# Generated by Django 2.2.5 on 2019-12-09 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0013_lead_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='updated_at',
            field=models.DateField(auto_now=True),
        ),
    ]