# Generated by Django 2.2.5 on 2019-10-27 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0004_auto_20191027_1251'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='last_action',
            field=models.DateField(blank=True, null=True),
        ),
    ]
