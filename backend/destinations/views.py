"""
Views for DRG Travel & Tours destinations app.
Implements List View, Detail View, and API Routes View as required.
"""
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Destination, TravelPackage
from .serializers import (
    DestinationSerializer,
    DestinationDetailSerializer,
    TravelPackageSerializer,
    APIRouteSerializer,
)


# =============================================================================
# API Routes View - Returns a list of all available API endpoints
# =============================================================================
class APIRoutesView(APIView):
    """
    API View that returns a list of all available API endpoints.
    This fulfills the 'API Routes View' requirement.
    """
    def get(self, request):
        api_routes = [
            {
                "endpoint": "/api/",
                "method": "GET",
                "description": "Returns a list of all available API endpoints"
            },
            {
                "endpoint": "/api/destinations/",
                "method": "GET",
                "description": "Returns a list of all travel destinations (List View)"
            },
            {
                "endpoint": "/api/destinations/<id>/",
                "method": "GET",
                "description": "Returns details of a specific destination (Detail View)"
            },
            {
                "endpoint": "/api/packages/",
                "method": "GET",
                "description": "Returns a list of all travel packages (List View)"
            },
            {
                "endpoint": "/api/packages/<id>/",
                "method": "GET",
                "description": "Returns details of a specific travel package (Detail View)"
            },
        ]
        serializer = APIRouteSerializer(api_routes, many=True)
        return Response({
            "message": "Welcome to DRG Travel & Tours API",
            "api_version": "1.0",
            "endpoints": serializer.data
        })


# =============================================================================
# Destination Views - List View and Detail View
# =============================================================================
class DestinationListView(generics.ListAPIView):
    """
    List View - Returns all destination objects.
    GET /api/destinations/
    """
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer


class DestinationDetailView(generics.RetrieveAPIView):
    """
    Detail View - Returns a specific destination object.
    GET /api/destinations/<id>/
    """
    queryset = Destination.objects.all()
    serializer_class = DestinationDetailSerializer
    lookup_field = 'pk'


# =============================================================================
# Travel Package Views - List View and Detail View
# =============================================================================
class TravelPackageListView(generics.ListAPIView):
    """
    List View - Returns all travel package objects.
    GET /api/packages/
    """
    queryset = TravelPackage.objects.all()
    serializer_class = TravelPackageSerializer


class TravelPackageDetailView(generics.RetrieveAPIView):
    """
    Detail View - Returns a specific travel package object.
    GET /api/packages/<id>/
    """
    queryset = TravelPackage.objects.all()
    serializer_class = TravelPackageSerializer
    lookup_field = 'pk'
