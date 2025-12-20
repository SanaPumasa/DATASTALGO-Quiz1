"""
Admin configuration for destinations app.
"""
from django.contrib import admin
from .models import Destination, TravelPackage


@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ['name', 'location', 'price', 'duration', 'is_featured', 'created_at']
    list_filter = ['is_featured', 'location', 'created_at']
    search_fields = ['name', 'location', 'description']
    ordering = ['-is_featured', '-created_at']


@admin.register(TravelPackage)
class TravelPackageAdmin(admin.ModelAdmin):
    list_display = ['title', 'destination', 'package_type', 'price', 'is_available', 'created_at']
    list_filter = ['package_type', 'is_available', 'destination', 'created_at']
    search_fields = ['title', 'description', 'destination__name']
    ordering = ['-created_at']
