# Generated by Django 3.1.7 on 2021-05-02 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestenf', '0003_enfant_cinparent'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='is_adj',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='account',
            name='is_ens',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='account',
            name='is_parent',
            field=models.BooleanField(default=False),
        ),
    ]