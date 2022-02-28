from .models import (Project, Application, Comment, Newsletter,
                     Contact,Testimony)
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from django.utils import timezone
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
User = get_user_model()


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('__all__')


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ("__all__")


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = ('__all__')


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('__all__')

class TestimonySerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimony
        fields = ('__all__')

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = (
            "__all__"
            # 'project_name',
            # 'contract_terms',
            # 'report',
            # 'progress_bar',
            # 'link_to_content',
            # 'Link_to_test_run',
            # 'Link_to_downlaod_project',
            # 'total_amount',
            # 'part_payment_amount',
            # 'balance_payment_amount',
            # 'total_amount_status',
            # 'part_payment_status',
            # 'balance_payment_status',
            # 'project_status',
            # 'terminate_contract',
            # 'created_at',
        )


# class ProjectSerializer2(RegisterSerializer):

#     class Meta:
#         model = Project
#         fields = (
#             'project_name',
#             'contract_terms',
#             'report',
#             'progress_bar',
#             'link_to_content',
#             'Link_to_test_run',
#             'Link_to_downlaod_project',
#             'total_amount',
#             'part_payment_amount',
#             'balance_payment_amount',
#             'total_amount_status',
#             'part_payment_status',
#             'balance_payment_status',
#             'project_status',
#             'terminate_contract',
#             'created_at',
#         )
#     link_to_content = serializers.URLField(
#         required=False,
#         max_length=250,
#     )
#     terminate_contract = serializers.BooleanField(default=False)

#     def get_cleaned_data(self):
#         data_dict = super().get_cleaned_data()
#         data_dict['project_name'] = self.validated_data.get('project_name', '')
#         data_dict['contract_terms'] = self.validated_data.get(
#             'contract_terms', '')
#         data_dict['report'] = self.validated_data.get('report', '')
#         data_dict['progress_bar'] = self.validated_data.get('progress_bar', '')
#         data_dict['link_to_content'] = self.validated_data.get(
#             'link_to_content', '')
#         data_dict['Link_to_test_run'] = self.validated_data.get(
#             'Link_to_test_run', '')
#         data_dict['Link_to_downlaod_project'] = self.validated_data.get(
#             'Link_to_downlaod_project', '')
#         data_dict['total_amount'] = self.validated_data.get('total_amount', '')
#         data_dict['part_payment_amount'] = self.validated_data.get(
#             'part_payment_amount', '')
#         data_dict['balance_payment_amount'] = self.validated_data.get(
#             'balance_payment_amount', '')
#         data_dict['total_amount_status'] = self.validated_data.get(
#             'total_amount_status', '')
#         data_dict['part_payment_status'] = self.validated_data.get(
#             'part_payment_status', '')
#         data_dict['balance_payment_status'] = self.validated_data.get(
#             'balance_payment_status', '')
#         data_dict['project_status'] = self.validated_data.get(
#             'project_status', '')
#         data_dict['terminate_contract'] = self.validated_data.get(
#             'terminate_contract', '')
#         data_dict['created_at'] = self.validated_data.get('created_at', '')

#         return data_dict
