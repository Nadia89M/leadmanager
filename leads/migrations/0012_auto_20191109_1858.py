# Generated by Django 2.2.5 on 2019-11-09 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0011_auto_20191109_1857'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='last_action',
            field=models.DateField(blank=True, null=True),
        ),
    ]
