"""
URL configuration for travel_api project.
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='/api/', permanent=False), name='root-redirect'),
    path('admin/', admin.site.urls),
    path('api/', include('destinations.urls')),
]
