# Generated by Django 2.2 on 2020-12-27 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tech', '0005_auto_20201225_1140'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='publish',
            field=models.BooleanField(default=False),
        ),
    ]