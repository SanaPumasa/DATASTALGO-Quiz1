"""
Serializers for DRG Travel & Tours destinations app.
"""
from rest_framework import serializers
from .models import Destination, TravelPackage


class TravelPackageSerializer(serializers.ModelSerializer):
    """
    Serializer for TravelPackage model.
    """
    package_type_display = serializers.CharField(
        source='get_package_type_display', 
        read_only=True
    )
    destination_name = serializers.CharField(
        source='destination.name', 
        read_only=True
    )

    class Meta:
        model = TravelPackage
        fields = [
            'id',
            'title',
            'destination',
            'destination_name',
            'package_type',
            'package_type_display',
            'description',
            'inclusions',
            'exclusions',
            'price',
            'max_guests',
            'is_available',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['created_at', 'updated_at']


class DestinationSerializer(serializers.ModelSerializer):
    """
    Serializer for Destination model (basic version).
    """
    class Meta:
        model = Destination
        fields = [
            'id',
            'name',
            'location',
            'description',
            'image_url',
            'price',
            'duration',
            'is_featured',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['created_at', 'updated_at']


class DestinationDetailSerializer(serializers.ModelSerializer):
    """
    Serializer for Destination model with nested packages (detail view).
    """
    packages = TravelPackageSerializer(many=True, read_only=True)
    package_count = serializers.SerializerMethodField()

    class Meta:
        model = Destination
        fields = [
            'id',
            'name',
            'location',
            'description',
            'image_url',
            'price',
            'duration',
            'is_featured',
            'packages',
            'package_count',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['created_at', 'updated_at']

    def get_package_count(self, obj):
        """Return the count of packages for this destination."""
        return obj.packages.count()


class APIRouteSerializer(serializers.Serializer):
    """
    Serializer for API routes information.
    """
    endpoint = serializers.CharField()
    method = serializers.CharField()
    description = serializers.CharField()
