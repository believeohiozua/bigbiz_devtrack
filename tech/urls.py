from django.urls import path, include, re_path
from django.conf.urls import url
from .views import (ApplicationView, ProjectView, ContactView, TestimonyView, ReactView)


urlpatterns = [
    path('tech/api/application/', ApplicationView.as_view()),
    path('tech/api/contact/', ContactView.as_view()),
    path('tech/api/testimonies/', TestimonyView.as_view()),
    path('tech/api/project/', ProjectView.as_view()),

    # re_path(r"^$", ReactView),
    # re_path(r"^(?:.*)/?$", ReactView),

]
