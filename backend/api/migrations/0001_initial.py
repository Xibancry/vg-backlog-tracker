# Generated by Django 3.2.25 on 2025-01-31 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('date_of_birth', models.DateField()),
                ('password', models.CharField(max_length=256)),
            ],
        ),
    ]
