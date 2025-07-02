# 🗾 2025年7月日本旅行地圖

An interactive travel map for a 17-day Japan itinerary featuring world heritage sites, festivals, and cultural experiences.

## 🎯 Features

- **Interactive Map**: Explore 17-day Japan travel itinerary with markers and routes
- **Smart Filtering**: Filter by location (Kyoto, Osaka, Tokyo) and categories (Festivals, World Heritage)
- **Day Navigation**: Browse day-by-day itinerary with color-coded markers
- **Timeline View**: Compact and detailed timeline views with location details
- **Route Visualization**: Optional route lines connecting daily locations
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🚀 Live Demo

Visit the live demo: [https://[YOUR-USERNAME].github.io/jp-travel](https://[YOUR-USERNAME].github.io/jp-travel)

## 📱 Screenshots

![Japan Travel Map](https://via.placeholder.com/800x400/4ECDC4/FFFFFF?text=Japan+Travel+Map)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Mapping**: Leaflet.js with OpenStreetMap tiles
- **UI/UX**: Modern gradient design with responsive layout
- **Hosting**: GitHub Pages

## 📋 Itinerary Highlights

- **17 Days**: Complete journey from Kansai to Tokyo
- **10 World Heritage Sites**: Including Fushimi Inari, Kiyomizu-dera, Todai-ji
- **3 Major Festivals**: Gion Matsuri, Tenjin Matsuri, Sumida River Fireworks
- **6 National Treasure Experiences**: Cultural immersion activities

## 🗓️ Travel Plan Overview

| Days | Region | Highlights |
|------|---------|------------|
| 1-4 | Kyoto | Fushimi Inari, Kiyomizu-dera, Gion Matsuri |
| 5 | Arima Onsen | Traditional hot springs |
| 6-11 | Osaka/Nara | Osaka Castle, Todai-ji Temple, Tenjin Matsuri |
| 12-17 | Tokyo/Kamakura | Sumida River Fireworks, Great Buddha of Kamakura |

## 🎨 Color Coding

- 🔴 **Festivals**: Cultural events and traditional celebrations
- 🟡 **World Heritage**: UNESCO World Heritage Sites
- 🟣 **National Treasures**: Important cultural properties
- 🟢 **Nature**: Gardens, mountains, and natural landscapes
- 🔵 **Historical**: Temples, shrines, and historical sites

## 💻 Local Development

1. Clone the repository:
```bash
git clone https://github.com/[YOUR-USERNAME]/jp-travel.git
cd jp-travel
```

2. Start a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```

3. Open `http://localhost:8000` in your browser

## 📁 Project Structure

```
jp-travel/
├── index.html                 # Main HTML file
├── css/                       # Stylesheets
│   ├── variables.css         # CSS custom properties
│   ├── base.css             # Base styles
│   ├── layout.css           # Layout and grid
│   ├── components.css       # UI components
│   ├── animations.css       # Animations and transitions
│   └── responsive.css       # Responsive design
├── js/                       # JavaScript modules
│   ├── app.js              # Main application
│   ├── config.js           # Configuration
│   ├── utils.js            # Utility functions
│   └── managers/           # Feature managers
│       ├── map-manager.js      # Map initialization
│       ├── marker-manager.js   # Marker handling
│       ├── popup-manager.js    # Popup system
│       ├── filter-manager.js   # Filtering logic
│       └── route-timeline-manager.js # Routes and timeline
├── data/
│   └── travel-data.js       # Travel location data
└── README.md
```

## 🎛️ Features Guide

### Filters
- **Location Filters**: Show only locations in specific regions
- **Category Filters**: Filter by type of attraction
- **Day Filters**: View specific days of the itinerary

### Timeline
- **Compact Mode**: Overview of daily activities
- **Detailed Mode**: Extended information with features and hours
- **Route Lines**: Visual connections between daily locations

### Map Interactions
- **Click Markers**: View detailed location information
- **Zoom Controls**: Navigate the map at different scales
- **Responsive Layout**: Sidebar collapses on mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎌 About the Trip

This interactive map represents a carefully planned 17-day journey through Japan, designed to experience the country's rich cultural heritage, traditional festivals, and natural beauty during the summer season of 2025.

---

Made with ❤️ for Japan travel enthusiasts