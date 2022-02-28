from django.contrib import admin
from .models import (Project, Application, Comment, Newsletter,
                     Contact, Testimony, Credentials)


@admin.register(Project)
class Project(admin.ModelAdmin):
    list_display = ('application',
                    'project_name',
                    'progress_bar',
                    'total_amount_status',
                    'part_payment_status',
                    'balance_payment_status',
                    'project_status',
                    'created_at',)


@admin.register(Application)
class Application(admin.ModelAdmin):
    list_display = ('full_names',
                    'email',
                    'phone_number',
                    'service',
                    'created_at',)


@admin.register(Comment)
class Comment(admin.ModelAdmin):
    list_display = ('project',
                    'created_at',)


@admin.register(Newsletter)
class Newsletter(admin.ModelAdmin):
    list_display = ('sub_email',
                    'subscribe',)


@admin.register(Contact)
class Contact(admin.ModelAdmin):
    list_display = ('full_names',
                    'email',
                    'subject',
                    'created_at',)

@admin.register(Testimony)
class Testimony(admin.ModelAdmin):
    list_display = ('full_names',
                    'company',
                    'publish',)


@admin.register(Credentials)
class Credentials(admin.ModelAdmin):
    list_display = ('project',
                    'project_user',)