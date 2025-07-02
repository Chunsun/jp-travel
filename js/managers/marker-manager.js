// ===== MARKER MANAGEMENT =====
const MarkerManager = {
    createIcon(location) {
        const emoji = Utils.getIcon(location.type);
        const size = 32; // Fixed size, no variations
        
        return L.divIcon({
            html: `
                <div class="marker-main" style="
                    width: ${size}px;
                    height: ${size}px;
                    background: ${location.color};
                    border: 2px solid white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                ">
                    ${emoji}
                </div>
            `,
            className: 'custom-marker',
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
    },
    
    setupEvents(marker, location) {
        // Simple hover feedback
        marker.on('mouseover', function() {
            const markerElement = this.getElement();
            if (markerElement) {
                const markerMain = markerElement.querySelector('.marker-main');
                if (markerMain) {
                    markerMain.style.transform = 'scale(1.1)';
                    markerMain.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
                }
            }
        });
        
        marker.on('mouseout', function() {
            const markerElement = this.getElement();
            if (markerElement) {
                const markerMain = markerElement.querySelector('.marker-main');
                if (markerMain) {
                    markerMain.style.transform = 'scale(1)';
                    markerMain.style.boxShadow = 'none';
                }
            }
        });
        
        // Click handler
        marker.on('click', function() {
            console.log('Marker clicked:', location.name);
            PopupManager.show(this, location);
        });
    }
};
