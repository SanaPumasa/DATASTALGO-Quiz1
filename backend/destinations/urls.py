"""
URL configuration for destinations app.
"""
from django.urls import path
from .views import (
    APIRoutesView,
    DestinationListView,
    DestinationDetailView,
    TravelPackageListView,
    TravelPackageDetailView,
)

urlpatterns = [
    # API Routes View - lists all available endpoints
    path('', APIRoutesView.as_view(), name='api-routes'),
    
    # Destination endpoints
    path('destinations/', DestinationListView.as_view(), name='destination-list'),
    path('destinations/<int:pk>/', DestinationDetailView.as_view(), name='destination-detail'),
    
    # Travel Package endpoints
    path('packages/', TravelPackageListView.as_view(), name='package-list'),
    path('packages/<int:pk>/', TravelPackageDetailView.as_view(), name='package-detail'),
]
