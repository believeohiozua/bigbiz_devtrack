// NavBar collapse on window click
// $(document).ready(function () {
//   $(document).click(function (event) {
//     var clickover = $(event.target);
//     var _opened = $(".navbar-collapse").hasClass("show");
//     if (_opened === true && !clickover.hasClass("navbar-toggler")) {
//       $(".navbar-toggler").click();
//     }
//   });
// });

// **********************************************
// NavBar dropdown on hover
$('.dropdown').hover(function () {
  $('.dropdown-toggle', this).trigger('click');
});

// Type_writer
// var i = 0;
// var txt = "Only Perfection is Permitted here!";
// var speed = 100;
// function typeWriter() {
//   document.getElementById("writer").innerHTML += txt.charAt(i);
//   i++;
//   setTimeout(typeWriter, speed);
// }
// var writer = document.getElementById("writer")
// if (writer !== null) {
//   typeWriter();
// }
function myTypewriter(id, text) {
  var i = 0;
  var txt = text //"Only Perfection is Permitted here!";
  var speed = 100;
  function typeWriter() {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  var writer = document.getElementById(id)
  if (writer !== null) {
    typeWriter();
  }
}


// HOME PAGE COLLPASE *****************************
// DOM selectors
// var mystars = document.getElementById('stars');
// var starsCtx = document.getElementById('stars').getContext('2d');
// var slider = document.querySelector(".slider input");
// var output = document.querySelector("#speed");

// // global variables
// var screen, starsElements, starsParams = { speed: 4, number: 300, extinction: 4 };

// // run stars
// setupStars();
// updateStars();

// // handle slider
// output.innerHTML = slider.value;
// slider.oninput = function () {
//   output.innerHTML = this.value;
//   starsParams.speed = this.value;
// };

// // update stars on resize to keep them centered
// window.onresize = function () {
//   setupStars();
// };

// // star constructor
// function Star() {
//   this.x = Math.random() * stars.width;
//   this.y = Math.random() * stars.height;
//   this.z = Math.random() * stars.width;

//   this.move = function () {
//     this.z -= starsParams.speed;
//     if (this.z <= 0) {
//       this.z = stars.width;
//     }
//   };

//   this.show = function () {
//     let x, y, rad, opacity;
//     x = (this.x - screen.c[0]) * (stars.width / this.z);
//     x = x + screen.c[0];
//     y = (this.y - screen.c[1]) * (stars.width / this.z);
//     y = y + screen.c[1];
//     rad = stars.width / this.z;
//     opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

//     starsCtx.beginPath();
//     starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
//     starsCtx.arc(x, y, rad, 0, Math.PI * 2);
//     starsCtx.fill();
//   }
// }

// // setup <canvas>, create all the starts
// function setupStars() {
//   screen = {
//     w: window.innerWidth,
//     h: window.innerHeight,
//     c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
//   };
//   window.cancelAnimationFrame(updateStars);
//   stars.width = screen.w;
//   stars.height = screen.h;
//   starsElements = [];
//   for (let i = 0; i < starsParams.number; i++) {
//     starsElements[i] = new Star();
//   }
// }

// // redraw the frame
// function updateStars() {
//   starsCtx.fillStyle = "black";
//   starsCtx.fillRect(0, 0, stars.width, stars.height);
//   starsElements.forEach(function (s) {
//     s.show();
//     s.move();
//   });
//   window.requestAnimationFrame(updateStars);
// }


// *****************************


var stars = document.getElementById('stars');
var speedRegulator;
speedRegulator = 0.1;
if (/Mobi|Tablet|iPad|iPhone/.test(navigator.userAgent)) {
  speedRegulator = 0.1;
}
// alert("loaded");
var starsCtx = stars.getContext('2d');
// global variables
var screen, starsElements, starsParams = {
  speed: speedRegulator,
  number: 300,
  extinction: 4
};

// // run stars
setupStars();
updateStars();
// console.log("stars.width", starsParams.speed)

// update stars on resize to keep them centered
window.onresize = function () {
  setupStars();
};

// star constructor
function Star() {
  this.x = Math.random() * stars.width;
  this.y = Math.random() * stars.height;
  this.z = Math.random() * stars.width;

  this.move = function () {
    // this.z += starsParams.speed;
    this.z -= starsParams.speed;
    if (this.z <= 0) {
      this.z = stars.width;
    }
  };

  this.show = function () {
    let x, y, rad, opacity;
    x = (this.x - screen.c[0]) * (stars.width / this.z);
    x = x + screen.c[0];
    y = (this.y - screen.c[1]) * (stars.width / this.z);
    y = y + screen.c[1];
    rad = stars.width / this.z;
    opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

    starsCtx.beginPath();
    starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
    starsCtx.arc(x, y, rad, 0, Math.PI * 2);
    starsCtx.fill();
  }
}

// setup <canvas>, create all the starts
function setupStars() {
  screen = {
    w: window.innerWidth,
    h: window.innerHeight,
    c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
  };
  window.cancelAnimationFrame(updateStars);
  stars.width = screen.w;
  stars.height = screen.h;
  starsElements = [];
  for (let i = 0; i < starsParams.number; i++) {
    starsElements[i] = new Star();
  }
}

// redraw the frame
function updateStars() {
  starsCtx.fillStyle = "black";
  starsCtx.fillRect(0, 0, stars.width, stars.height);
  starsElements.forEach(function (s) {
    s.show();
    s.move();
  });
  window.requestAnimationFrame(updateStars);
};



// ********************************************
function limeLight(text) {
  var txt = text;
  var txtH = 20;
  var font = "fantasy";
  var bg = "#2c71fc";
  var rayColor1 = "#bc45b4";
  var rayColor2 = "#2c71fc";
  var fade = 1000;

  var canvas = document.getElementById("canvas");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    var cw = canvas.width = 280 //window.innerWidth;
    var ch = canvas.height = 23// window.innerHeight;

    var w2 = cw / 2;
    var h2 = ch / 2;
    var pi = Math.PI;
    var pi2 = pi * .5;

    var txtCanvas = document.createElement("canvas");
    var txtCtx = txtCanvas.getContext("2d");
    txtCtx.font = txtH + "px " + font;
    txtCtx.textBaseline = "middle";
    var txtW = Math.floor(txtCtx.measureText(txt).width);
    txtCanvas.width = txtW;
    txtCanvas.height = txtH * 1.5;

    var gradient = ctx.createRadialGradient(w2, h2, 0, w2, h2, txtW);
    gradient.addColorStop(0, rayColor2);
    gradient.addColorStop(1, rayColor1);
    ctx.strokeStyle = gradient;

    txtCtx.fillStyle = gradient;
    txtCtx.font = txtH + "px " + font;
    txtCtx.textBaseline = "middle";
    txtCtx.fillText(txt, 0, txtH * .5);

    //dirty adjust for descends
    txtH *= 1.5;

    var bufferCanvas = document.createElement("canvas");
    bufferCanvas.width = txtW;
    bufferCanvas.height = txtH;
    var buffer = bufferCanvas.getContext("2d");

    //text start position
    var sx = 3//(cw - txtW) * 0.5
    var sy = 3//(ch - txtH) * 0.5

    ////generate data
    var rays = [];
    var txtData = txtCtx.getImageData(0, 0, txtW, txtH);
    for (var i = 0; i < txtData.data.length; i += 4) {
      var ii = i / 4;
      var row = Math.floor(ii / txtW)
      var col = ii % txtW
      var alpha = txtData.data[i + 3]
      if (alpha !== 0) {
        var c = "rgba("
        c += [txtData.data[i], txtData.data[i + 1], txtData.data[i + 2], alpha / 255]
        c += ")";
        rays.push(new Ray(Math.floor(ii / txtW), ii % txtW, c));
      }
    }

    var current = 1;
    //start animation
    tick();

    function tick() {
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(bufferCanvas, 0, 0, current, txtH, sx, sy, current, txtH)
      ctx.save()
      ctx.globalAlpha = .07;
      ctx.globalCompositeOperation = "lighter";
      if (drawRays(current)) {
        current++;
        current = Math.min(current, txtW)
        window.requestAnimationFrame(tick)
      } else {
        // fadeOut()
      }
      ctx.restore()
    }

    function fadeOut() {
      ctx.clearRect(0, 0, cw, ch)
      ctx.globalAlpha *= .95;
      ctx.drawImage(bufferCanvas, 0, 0, current, txtH, sx, sy, current, txtH)
      if (ctx.globalAlpha > .01) {
        window.requestAnimationFrame(fadeOut)
      } else {
        window.setTimeout(restart, 500)
      }
    }
    function restart() {
      for (var i = 0; i < rays.length; i++) {
        rays[i].reset()
      }
      ctx.globalAlpha = 1
      buffer.clearRect(0, 0, txtW, txtH)
      current = 1;
      tick();
    }
    function drawRays(c) {
      var count = 0;
      ctx.beginPath()
      for (var i = 0; i < rays.length; i++) {
        var ray = rays[i];
        if (ray.col < c) {
          count += ray.draw()
        }
      }
      ctx.stroke()
      return count !== rays.length;
    }

    function filterRays(r) {
      return Boolean(r);
    }

    function Ray(row, col, f) {
      this.col = col;
      this.row = row;

      var xp = sx + col;
      var yp = sy + row;
      var fill = f;

      var ath = (txtH / 1.5)

      var a = pi2 * (this.row - ath * .5) / ath;
      if (a === 0) {
        a = (Math.random() - .5) * pi2;
      }
      var da = .02 * Math.sign(a);
      da += (Math.random() - .5) * .005;
      var l = 0;
      var dl = Math.random() * 2 + 2;

      var buffered = false;
      this.reset = function () {
        a = pi2 * (this.row - ath * .5) / ath;
        if (a === 0) {
          a = -pi2 * .5;
        }
        l = 0;
        buffered = false
      }
      this.draw = function () {
        if (l < 0) {
          if (!buffered) {
            buffer.fillStyle = fill;
            buffer.fillRect(this.col, this.row, 1, 1);
            buffered = true
          }
          return 1;
        } else {
          ctx.moveTo(xp, yp)
          ctx.lineTo(xp + Math.cos(a) * l, yp + Math.sin(a) * l);
          a += da;
          l += Math.cos(a) * dl;
          return 0;
        }
      }
    }
  }
};