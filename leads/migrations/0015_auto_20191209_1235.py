# Generated by Django 2.2.5 on 2019-12-09 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0014_auto_20191209_1233'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
