export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
}


export const removeScript = (scriptToremove) => {
    let allsuspects = document.getElementsByTagName("script");
    for (let i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] && allsuspects[i].getAttribute("src") !== null
            && allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1) {
            allsuspects[i].parentNode.removeChild(allsuspects[i])
        }
    }
}


// import {appendScript} from 'utils/appendScript'
// import {removeScript} from 'utils/removeScript'
// class Demo extends React.Component {
// componentDidMount () {
//     appendScript("/path/to/resource.js");
// }
// componentDidUnmount () {
//     removeScript("/path/to/resource.js")
// }
// ...
// }

// import {appendScript} from 'utils/appendScript'
// import {removeScript} from 'utils/removeScript'
// class Demo extends React.Component {
// componentDidMount () {
//     appendScript("/path/to/resource.js");
// }
// componentDidUnmount () {
//     removeScript("/path/to/resource.js")
// }
// ...
// }