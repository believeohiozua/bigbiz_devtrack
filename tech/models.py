from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver


class Comment(models.Model):
    # client = models.CharField(max_length=100)
    content = models.TextField()
    project = models.ForeignKey(
        'Project', related_name='comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.project.project_name)


class Application(models.Model):
    full_names = models.CharField(max_length=150)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    service = models.CharField(max_length=200)
    decription = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_names

    def save(self, *args, **kwargs):
        if self.service:
            self.service = self.service.replace(",", " |-| ")
        super().save(*args, **kwargs)


Projecyt_Status_Cat = [
    ('initilizing', 'initilizing'),
    ('Started', 'Started'),
    ('Inprogress', 'Inprogress'),
    ('Testing', 'Testing'),
    ('Completed', 'Completed'),
    ('Terminated', 'Terminated'),
]


class Project(AbstractUser):
    application = models.ForeignKey(
        Application, null=True, related_name='application_by', on_delete=models.CASCADE)
    project_name = models.CharField(max_length=100)
    contract_terms = RichTextUploadingField()
    report = models.TextField()
    progress_bar = models.FloatField(default=0)

    link_to_content = models.URLField(blank=True, null=True)
    Link_to_test_run = models.URLField(blank=True, null=True)
    Link_to_downlaod_project = models.URLField(blank=True, null=True)

    total_amount = models.FloatField(default=0)
    part_payment_amount = models.FloatField(default=0)
    balance_payment_amount = models.FloatField(default=0)

    project_status = models.CharField(max_length=30,
                                      choices=Projecyt_Status_Cat,
                                      help_text='initilizing',
                                      blank=True,
                                      null=True)

    part_payment_status = models.BooleanField(default=False)
    link_to_content_status = models.BooleanField(default=False)
    project_started = models.BooleanField(default=False)
    balance_payment_status = models.BooleanField(default=False)
    project_testing = models.BooleanField(default=False)
    project_completed = models.BooleanField(default=False)

    total_amount_status = models.BooleanField(default=False)
    terminate_contract = models.BooleanField(default=False)
    publish = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.project_name)

    @property
    def get_comments(self):
        return self.comments.all().order_by('-created_at')

    def save(self, *args, **kwargs):
        if self.part_payment_status and self.balance_payment_status:
            self.total_amount_status = True

        if self.total_amount_status:
            self.part_payment_status = True
            self.balance_payment_status = True

        if not self.part_payment_status:
            self.link_to_content_status = False
            self.project_status = "initilizing"

        if not self.link_to_content_status:
            self.project_started = False
            self.project_status = "initilizing"

        if not self.Link_to_test_run:
            self.project_testing = False

        if not self.total_amount_status and not self.balance_payment_amount and not self.Link_to_downlaod_project:
            self.project_completed = False

        if self.progress_bar > 1:
            self.project_status = "Inprogress"

        super().save(*args, **kwargs)


class Newsletter(models.Model):
    sub_email = models.EmailField(blank=True, null=True)
    subscribe = models.BooleanField(default=True)

    def __str__(self):
        return self.sub_email


class Contact(models.Model):
    full_names = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(
        help_text='subject', max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.email)


class Testimony(models.Model):
    testimony = models.TextField(max_length=200)
    full_names = models.CharField(max_length=100, blank=True, null=True)   
    company = models.CharField(max_length=100, blank=True, null=True)  
    publish = models.BooleanField(default=False)  
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.full_names)

class Credentials(models.Model):
    project = models.ForeignKey(
        'Project', related_name='project_credentials', on_delete=models.CASCADE)    
    project_user = models.CharField(max_length=20)
    project_password = models.CharField(max_length=20)    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.project)


