"""
Data seeding script for DRG Travel & Tours.
Run this to populate the database with sample destinations and packages.

Usage: python manage.py shell < seed_data.py
Or copy the content and paste into: python manage.py shell
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'travel_api.settings')
django.setup()

from destinations.models import Destination, TravelPackage

# Clear existing data
print("Clearing existing data...")
TravelPackage.objects.all().delete()
Destination.objects.all().delete()

# Create Destinations (matching the gallery images from Quiz 1)
print("Creating destinations...")

destinations_data = [
    {
        "name": "Mt. Pinatubo",
        "location": "Zambales, Philippines",
        "description": "Experience the majestic beauty of Mt. Pinatubo, an active stratovolcano known for its stunning crater lake. The trek offers breathtaking views of the volcanic landscape and the crystal-clear turquoise waters of the crater lake.",
        "image_url": "/MtPinatubo.jpg",
        "price": 2500.00,
        "duration": "1 Day",
        "is_featured": True
    },
    {
        "name": "Lake Danao",
        "location": "Leyte, Philippines",
        "description": "Discover the serene beauty of Lake Danao, a natural lake surrounded by lush mountains and forests. Perfect for kayaking, fishing, and nature walks.",
        "image_url": "/LakeDanao.jpg",
        "price": 3500.00,
        "duration": "2 Days 1 Night",
        "is_featured": True
    },
    {
        "name": "Sacobia Bridge",
        "location": "Pampanga, Philippines",
        "description": "Enjoy an exciting road trip adventure across the iconic Sacobia Bridge. This scenic route offers stunning views of the lahar-formed landscape and is perfect for adventure seekers.",
        "image_url": "/SacobiaBridge.jpeg",
        "price": 1500.00,
        "duration": "Half Day",
        "is_featured": False
    },
    {
        "name": "El Nido",
        "location": "Palawan, Philippines",
        "description": "Paradise found! El Nido is famous for its white-sand beaches, coral reefs, and limestone cliffs. Experience island hopping, snorkeling, and world-class beach resorts.",
        "image_url": "/ElNido.jpg",
        "price": 15000.00,
        "duration": "4 Days 3 Nights",
        "is_featured": True
    },
    {
        "name": "Arizona Desert",
        "location": "Arizona, USA",
        "description": "Explore the golden dunes and unique desert landscapes of Arizona. From the Grand Canyon to Monument Valley, experience the American Southwest's natural wonders.",
        "image_url": "/Arizona.jpg",
        "price": 85000.00,
        "duration": "5 Days 4 Nights",
        "is_featured": False
    },
    {
        "name": "Northern Lights",
        "location": "Iceland",
        "description": "Witness the magical Aurora Borealis dancing across the night sky. This once-in-a-lifetime experience includes stays in cozy lodges and guided aurora hunting tours.",
        "image_url": "/NorthernLights.jpg",
        "price": 120000.00,
        "duration": "7 Days 6 Nights",
        "is_featured": True
    }
]

created_destinations = []
for dest_data in destinations_data:
    dest = Destination.objects.create(**dest_data)
    created_destinations.append(dest)
    print(f"  Created: {dest.name}")

# Create Travel Packages
print("\nCreating travel packages...")

packages_data = [
    {
        "destination": created_destinations[0],  # Mt. Pinatubo
        "title": "Mt. Pinatubo Day Trek Adventure",
        "package_type": "adventure",
        "description": "A full-day adventure trek to the famous Mt. Pinatubo crater lake. Includes 4x4 ride through lahar fields and guided hiking.",
        "inclusions": "4x4 vehicle transfer, Professional guide, Lunch, Entrance fees, Travel insurance",
        "exclusions": "Personal expenses, Tips, Souvenirs",
        "price": 2500.00,
        "max_guests": 15,
        "is_available": True
    },
    {
        "destination": created_destinations[1],  # Lake Danao
        "title": "Lake Danao Camping Experience",
        "package_type": "adventure",
        "description": "An overnight camping adventure at the beautiful Lake Danao. Experience nature at its finest with kayaking and stargazing.",
        "inclusions": "Camping equipment, Kayak rental, Meals (2 lunches, 1 dinner, 1 breakfast), Guide services",
        "exclusions": "Transportation to Leyte, Personal items, Alcoholic beverages",
        "price": 4500.00,
        "max_guests": 20,
        "is_available": True
    },
    {
        "destination": created_destinations[3],  # El Nido
        "title": "El Nido Island Paradise Tour",
        "package_type": "beach",
        "description": "The ultimate El Nido experience! 4 days of island hopping, snorkeling, and beach relaxation in the Philippines' most beautiful destination.",
        "inclusions": "Roundtrip flights from Manila, Airport transfers, Beach resort accommodation, Island hopping tours A, B, C, Daily breakfast, Snorkeling gear",
        "exclusions": "Travel insurance, Other meals, Personal expenses, Optional activities",
        "price": 18000.00,
        "max_guests": 12,
        "is_available": True
    },
    {
        "destination": created_destinations[3],  # El Nido
        "title": "El Nido Luxury Escape",
        "package_type": "beach",
        "description": "A premium El Nido experience with 5-star resort accommodation and private tours.",
        "inclusions": "Roundtrip flights, Private airport transfers, Luxury resort stay, Private island tours, All meals, Spa treatment",
        "exclusions": "Travel insurance, Alcoholic beverages, Personal shopping",
        "price": 45000.00,
        "max_guests": 6,
        "is_available": True
    },
    {
        "destination": created_destinations[4],  # Arizona
        "title": "American Southwest Adventure",
        "package_type": "international",
        "description": "Explore the best of Arizona including the Grand Canyon, Monument Valley, and Sedona's red rocks.",
        "inclusions": "International flights, Hotel accommodations, Private tour vehicle, National park entrance fees, Breakfast daily, Professional guide",
        "exclusions": "US Visa, Lunch and dinner, Travel insurance, Personal expenses",
        "price": 95000.00,
        "max_guests": 10,
        "is_available": True
    },
    {
        "destination": created_destinations[5],  # Northern Lights
        "title": "Iceland Aurora Experience",
        "package_type": "international",
        "description": "A magical week in Iceland chasing the Northern Lights. Includes Golden Circle tour, Blue Lagoon, and glacier hiking.",
        "inclusions": "International flights, 6 nights accommodation, Aurora hunting tours, Golden Circle tour, Blue Lagoon entry, Glacier hiking, Daily breakfast and dinner",
        "exclusions": "Schengen Visa, Lunch, Travel insurance, Optional activities, Personal expenses",
        "price": 150000.00,
        "max_guests": 15,
        "is_available": True
    }
]

for pkg_data in packages_data:
    pkg = TravelPackage.objects.create(**pkg_data)
    print(f"  Created: {pkg.title}")

print("\n✅ Database seeding completed!")
print(f"   - {Destination.objects.count()} destinations created")
print(f"   - {TravelPackage.objects.count()} travel packages created")
