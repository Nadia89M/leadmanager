# Generated by Django 2.2.5 on 2019-11-09 18:49

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0007_auto_20191109_0815'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='last_action',
            field=models.DateField(blank=True, default=datetime.datetime.now, null=True),
        ),
    ]
