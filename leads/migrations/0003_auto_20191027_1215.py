# Generated by Django 2.2.5 on 2019-10-27 12:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_auto_20191020_1750'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='last_action',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='lead',
            name='to_be_contacted_on',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
