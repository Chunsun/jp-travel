// ===== FILTER MANAGEMENT =====
const FilterManager = {
    apply(filter) {
        // Update button states
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        // Button animation
        event.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            event.target.style.transform = '';
        }, CONFIG.ui.clickAnimationDuration);
        
        // Filter markers
        const filteredMarkers = [];
        AppState.markers.forEach(marker => {
            const location = marker.location;
            const show = this.shouldShow(location, filter);
            
            if (show) {
                marker.addTo(AppState.map);
                filteredMarkers.push(marker);
            } else {
                AppState.map.removeLayer(marker);
            }
        });
        
        // Adjust view and animate
        if (filteredMarkers.length > 0) {
            this.fitBounds(filteredMarkers);
            this.animateMarkers(filteredMarkers);
        }
    },
    
    shouldShow(location, filter) {
        switch(filter) {
            case 'all': return true;
            case 'kyoto': return location.region === 'kyoto';
            case 'osaka': return location.region === 'osaka';
            case 'tokyo': return location.region === 'tokyo';
            case 'festival': return location.type === 'festival';
            case 'heritage': return location.type === 'heritage';
            default: return false;
        }
    },
    
    fitBounds(markers) {
        const group = new L.featureGroup(markers);
        AppState.map.fitBounds(group.getBounds().pad(0.1), {
            animate: true,
            duration: 1
        });
    },
    
    animateMarkers(markers) {
        setTimeout(() => {
            markers.forEach((marker, index) => {
                setTimeout(() => {
                    const location = marker.location;
                    marker.setIcon(MarkerManager.createIcon(location, false, true));
                    setTimeout(() => {
                        marker.setIcon(MarkerManager.createIcon(location, false, false));
                    }, CONFIG.ui.clickAnimationDuration);
                }, index * CONFIG.ui.markerAnimationStep);
            });
        }, CONFIG.ui.animationDelay);
    }
};
