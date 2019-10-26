# Generated by Django 2.2.5 on 2019-10-19 17:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Lead',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(blank=True, max_length=100)),
                ('city', models.CharField(blank=True, max_length=100)),
                ('region', models.CharField(blank=True, max_length=100)),
                ('district', models.CharField(blank=True, max_length=100)),
                ('address', models.CharField(blank=True, max_length=100)),
                ('name', models.CharField(blank=True, max_length=100)),
                ('number', models.CharField(blank=True, max_length=100)),
                ('email', models.EmailField(blank=True, max_length=100, unique=True)),
                ('message', models.CharField(blank=True, max_length=500)),
                ('status', models.CharField(blank=True, default='NEW', max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='leads', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
