# Generated by Django 3.1.6 on 2021-04-08 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RatingCounter', '0004_alter_ratingcountermodel_album'),
    ]

    operations = [
        migrations.AddField(
            model_name='ratingcountermodel',
            name='modified',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='ratingcountermodel',
            name='created',
            field=models.DateField(auto_now_add=True),
        ),
    ]
