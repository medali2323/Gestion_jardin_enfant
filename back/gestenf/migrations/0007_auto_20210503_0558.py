# Generated by Django 3.1.7 on 2021-05-03 03:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gestenf', '0006_enfant_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='enfant',
            old_name='user',
            new_name='userparent',
        ),
    ]
