from django.conf import settings
from django.core.mail import send_mail
from braces.views import CsrfExemptMixin
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .serializers import (ProjectSerializer,
                          CommentSerializer,
                          ApplicationSerializer,
                          NewsletterSerializer,
                          ContactSerializer,
                          TestimonySerializer)
from .models import (Project, Application, Comment, Newsletter,
                     Contact,Testimony)
from rest_framework import permissions
from django.shortcuts import render
from rest_framework import permissions, serializers, views, status
from django.core.serializers.python import Serializer as sr
from django.core.serializers.json import Serializer as jsr
import json
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.core import serializers as coresr
from rest_framework.response import Response
from django.contrib.auth import get_user_model
User = get_user_model()


def ReactView(request):
    return render(request, 'index.html', {})


def get_or_none(model, **kwargs):
    try:
        return model.objects.get(**kwargs)
    except model.DoesNotExist:
        return None


class ApplicationView(CsrfExemptMixin, views.APIView):
    serializer_class = ApplicationSerializer
    authentication_classes = []

    def get(self, request, format=None):
        context = {
            'Application': "Apply For a Service",
        }
        return Response(context)

    def post(self, request, format=None):
        context = {
            'Application': "Apply For a Service",
        }
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            application, created = Application.objects.get_or_create(
                full_names=serializer.data.get('full_names'),
                email=serializer.data.get('email'),
                phone_number=serializer.data.get('phone_number'),
                service=serializer.data.get('service'),
                decription=serializer.data.get('decription'),
            )
            application.save()      
            subject = 'DevTrack Application'
            message = '%s' % (
                "name: " + str(serializer.data.get('full_names')) +
                "\nEmail: "+ str(serializer.data.get('email'))+
                "\nPhone Numbe: "+ str(serializer.data.get('phone_number'))+
                "\nService: "+ str(serializer.data.get('service'))+
                "\ndecription: "+ str(serializer.data.get('decription'))+
                "\n \n Link : https://www.ease4life.com/this-is-just-the-beginy/tech/application/"
                )
            emailFrom = 'mail@devtrack.me'
            emailTo = ['mytbota@gmail.com']
            send_mail(subject, message, emailFrom, emailTo,
                      fail_silently=True),

            context.update({
                'Application': "Message Sent.! Thank You..!",
            })
            return Response(context)
        else:
            context.update({
                'Application': "Inalid application",
            })
        return Response(context)


class ContactView(CsrfExemptMixin, views.APIView):
    serializer_class = ContactSerializer
    authentication_classes = []

    def get(self, request, format=None):
        context = {
            'contact': "We are Eager to hear from you",
        }
        return Response(context)

    def post(self, request, format=None):
        context = {
            'contact': False,
        }
        serializer = ContactSerializer(data=request.data)
        # print('\n',serializer)
        if serializer.is_valid(raise_exception=True):
            contact, created = Contact.objects.get_or_create(
                full_names=serializer.data.get('full_names'),
                email=serializer.data.get('email'),
                subject=serializer.data.get('subject'),
                message=serializer.data.get('message'),
            )
            contact.save()

            context.update({
                'contact': True,
            })
            subject = serializer.data.get('subject')
            message = '%s' % (
                "name: " + str(serializer.data.get('full_names')) +
                "\nEmail: "+ str(serializer.data.get('email'))+               
                "\nMessage: "+ str(serializer.data.get('message'))+
                "\n \n Link : https://www.ease4life.com/this-is-just-the-beginy/tech/contact/"
                )
            emailFrom = 'mail@devtrack.me'
            emailTo = ['mytbota@gmail.com']
            send_mail(subject, message, emailFrom, emailTo,
                      fail_silently=True)
            return Response(context)
        else:
            context.update({
                'contact': "Inalid submission",
            })
        return Response(context)


class ProjectDataSerializer(serializers.Serializer):
    label = serializers.JSONField()
    formData = serializers.JSONField()


class ProjectView(views.APIView):
    serializer_class = ProjectSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        client = Project.objects.get(
            username=self.request.user.username, publish=True)

        client_comment = Comment.objects.filter(
            project=client).order_by("created_at")
        get_comments = []
        if client_comment.exists():            
            get_comments = coresr.serialize(
                'python', client_comment,
                fields=('content')
            )

        context = {
            'project': ProjectSerializer(instance=client).data,
            'comments': get_comments,
        }
        # print('\n', ProjectSerializer(instance=client).data)
        return Response(context)

    def post(self, request, format=None):
        client = Project.objects.get(
            username=self.request.user.username, publish=True)

        serializer = ProjectDataSerializer(
            data={**request.data, **request.FILES})

        if serializer.is_valid(raise_exception=True):
            if serializer.data.get("label") == "comment":
                get_comment = serializer.data.get("formData")
                add_comment, created = Comment.objects.get_or_create(
                    project=client, content=get_comment)
                add_comment.save()
                subject = "DevTrack Comment from "+ str(self.request.user.username)
                message = '%s' % (
                    "Comments " + str(serializer.data.get("formData"))
                    )
                emailFrom = 'mail@devtrack.me'
                emailTo = ['mytbota@gmail.com']
                send_mail(subject, message, emailFrom, emailTo,
                        fail_silently=True),
            elif serializer.data.get("label") == "project_content":
                get_content = serializer.data.get("formData")
                client.link_to_content = get_content
                client.save()
                subject = "Project Content from "+ str(self.request.user.username)
                message = '%s' % (
                    "Content " + str(serializer.data.get("formData"))
                    )
                emailFrom = 'mail@devtrack.me'
                emailTo = ['mytbota@gmail.com']
                send_mail(subject, message, emailFrom, emailTo,
                        fail_silently=True),
            elif serializer.data.get("label") == "project_start":
                client.project_started = True
                client.save()
                subject = "Project Start By "+ str(self.request.user.username)
                message = '%s' % (
                    "Content " + str(serializer.data.get("formData"))
                    )
                emailFrom = 'mail@devtrack.me'
                emailTo = ['mytbota@gmail.com']
                send_mail(subject, message, emailFrom, emailTo,
                        fail_silently=True),
            elif serializer.data.get("label") == "project_end_contract":
                client.publish = False
                client.save()
                subject = "Contract Terminated By "+ str(self.request.user.username)
                message = '%s' % (
                    "Contract "+ "https://www.ease4life.com/this-is-just-the-beginy/tech/contact/"
                    )
                emailFrom = 'mail@devtrack.me'
                emailTo = ['mytbota@gmail.com']
                send_mail(subject, message, emailFrom, emailTo,
                        fail_silently=True),
                

            # print(serializer.data)
        context = {
            'Application': "Apply For a Service",
        }
        return Response(context)


class TestimonyView(CsrfExemptMixin, views.APIView):
    serializer_class = TestimonySerializer
    authentication_classes = []

    def get(self, request, format=None):
        get_testimonies=[]
        testimonies= Testimony.objects.filter(publish=True)        
        if testimonies.exists():  
            # print("testimonies\n",testimonies)         
            get_testimonies = coresr.serialize(
                    'python', testimonies,
                    fields=('testimony',
                            'full_names',
                            'company', 
                            "pk",)
                )
                  
        context = {
            'testimonies': get_testimonies,
        }
        return Response(context)

    def post(self, request, format=None):
        context = {
            'testimony': False,
        }
        serializer = TestimonySerializer(data=request.data)
        # print('\n',serializer)
        if serializer.is_valid(raise_exception=True):
            testimony, created = Testimony.objects.get_or_create(
                testimony=serializer.data.get('testimony'),
                full_names=serializer.data.get('full_names'),
                company=serializer.data.get('company'),               
            )
            testimony.save()

            context.update({
                'testimony': True,
            })
            subject = "Testimony By "+ str(serializer.data.get('full_names'))
            message = '%s' % (
                "Testimony "+ str(serializer.data.get('testimony'))
                )
            emailFrom = 'mail@devtrack.me'
            emailTo = ['mytbota@gmail.com']
            send_mail(subject, message, emailFrom, emailTo,
                    fail_silently=True),
            return Response(context)
        else:
            context.update({
                'testimony': "Inalid submission",
            })
        return Response(context)