# Generated by Django 4.0.6 on 2023-11-19 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classifier', '0003_delete_semanticimagesearch'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
        migrations.CreateModel(
            name='SemanticImageSearch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('query', models.TextField()),
                ('result', models.CharField(blank=True, max_length=250, null=True)),
                ('date_uploaded', models.DateTimeField(auto_now_add=True)),
                ('images', models.ManyToManyField(to='classifier.image')),
            ],
        ),
    ]
