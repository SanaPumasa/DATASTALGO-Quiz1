from django.db import models


class Destination(models.Model):
    name = models.CharField(max_length=200, help_text="Name of the destination")
    location = models.CharField(max_length=200, help_text="Location/Country of the destination")
    description = models.TextField(help_text="Detailed description of the destination")
    image_url = models.CharField(max_length=500, help_text="URL or path to destination image")
    price = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        help_text="Starting price for tour package (in PHP)"
    )
    duration = models.CharField(max_length=100, help_text="Duration of the tour (e.g., '3 Days 2 Nights')")
    is_featured = models.BooleanField(default=False, help_text="Whether this destination is featured")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-is_featured', '-created_at']
        verbose_name = "Destination"
        verbose_name_plural = "Destinations"

    def __str__(self):
        return f"{self.name} - {self.location}"


class TravelPackage(models.Model):
    PACKAGE_TYPES = [
        ('domestic', 'Domestic Tour'),
        ('international', 'International Tour'),
        ('adventure', 'Adventure Tour'),
        ('beach', 'Beach Getaway'),
        ('cultural', 'Cultural Tour'),
        ('custom', 'Custom Package'),
    ]

    title = models.CharField(max_length=200, help_text="Package title")
    destination = models.ForeignKey(
        Destination, 
        on_delete=models.CASCADE, 
        related_name='packages',
        help_text="Related destination"
    )
    package_type = models.CharField(
        max_length=20, 
        choices=PACKAGE_TYPES, 
        default='domestic',
        help_text="Type of travel package"
    )
    description = models.TextField(help_text="Detailed description of the package")
    inclusions = models.TextField(help_text="What's included in the package")
    exclusions = models.TextField(blank=True, help_text="What's not included in the package")
    price = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        help_text="Package price (in PHP)"
    )
    max_guests = models.PositiveIntegerField(default=10, help_text="Maximum number of guests")
    is_available = models.BooleanField(default=True, help_text="Whether the package is available")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Travel Package"
        verbose_name_plural = "Travel Packages"

    def __str__(self):
        return f"{self.title} ({self.get_package_type_display()})"
