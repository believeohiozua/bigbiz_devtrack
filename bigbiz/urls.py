from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from django.conf.urls import url

urlpatterns = [
    # path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('this-is-just-the-beginy/', admin.site.urls),
    path('', include('tech.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
]


urlpatterns += [
    url(r'^media/(?P<path>.*)$', serve,
        {'document_root': settings.MEDIA_ROOT}),
    url(r'^static/(?P<path>.*)$', serve,
        {'document_root': settings.STATIC_ROOT}),
]
admin.site.site_header = "DEVtRACK \n ADMINISTRATION"
admin.site.site_title = "DEVtRACK"
admin.site.index_title = "This is DEVtRACK Admin Portal"
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
