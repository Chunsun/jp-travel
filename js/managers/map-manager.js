// ===== MAP MANAGEMENT =====
const MapManager = {
    init() {
        AppState.map = L.map('map').setView(CONFIG.map.defaultCenter, CONFIG.map.defaultZoom);
        
        L.tileLayer(CONFIG.map.tileUrl, {
            attribution: CONFIG.map.attribution
        }).addTo(AppState.map);
        
        this.loadMarkers();
        this.hideLoader();
    },
    
    loadMarkers() {
        TRAVEL_DATA.locations.forEach(location => {
            const markerIcon = MarkerManager.createIcon(location);
            const marker = L.marker([location.lat, location.lng], { icon: markerIcon });
            
            MarkerManager.setupEvents(marker, location);
            
            marker.addTo(AppState.map);
            marker.location = location;
            AppState.markers.push(marker);
            
            console.log('Marker added:', location.name);
        });
    },
    
    hideLoader() {
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, CONFIG.ui.loadingDelay);
    }
};
