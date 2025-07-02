// ===== ENHANCED POPUP MANAGEMENT =====
const PopupManager = {
    currentPopup: null,
    
    createContent(location) {
        const emoji = Utils.getIcon(location.type);
        const features = location.features.map(f => {
            let className = 'feature-tag';
            if (f.includes('世界遺產')) className += ' heritage';
            if (f.includes('祭')) className += ' festival';
            return `<span class="${className}">${f}</span>`;
        }).join('');
        
        return `
            <div class="enhanced-popup">
                <button class="popup-close" onclick="PopupManager.hide()" aria-label="Close popup">×</button>
                <div class="popup-header">
                    <div class="popup-emoji">${emoji}</div>
                    <h3 class="popup-title">${location.name}</h3>
                </div>
                <div class="popup-body">
                    <div class="popup-date">
                        <span class="date-icon">📅</span>
                        <span class="date-text">${location.date}</span>
                    </div>
                    <div class="popup-features">${features}</div>
                </div>
                <div class="popup-arrow"></div>
            </div>
        `;
    },
    
    show(marker, location) {
        console.log('Showing popup for:', location.name);
        
        // Immediately remove any existing popup without animation
        if (this.currentPopup) {
            this.currentPopup.remove();
            this.currentPopup = null;
        }
        
        // Get marker position on screen
        const markerPoint = AppState.map.latLngToContainerPoint(marker.getLatLng());
        const mapContainer = document.getElementById('map');
        const mapRect = mapContainer.getBoundingClientRect();
        
        // Create popup element
        const popupElement = document.createElement('div');
        popupElement.innerHTML = this.createContent(location);
        popupElement.style.position = 'absolute';
        popupElement.style.zIndex = '2000';
        
        // Add to map container
        mapContainer.appendChild(popupElement);
        
        // Get popup dimensions for smart positioning
        const popup = popupElement.querySelector('.enhanced-popup');
        const popupRect = popup.getBoundingClientRect();
        const popupWidth = popupRect.width || 300;
        const popupHeight = popupRect.height || 200;
        
        // Smart positioning logic
        let left = markerPoint.x - (popupWidth / 2);
        let top = markerPoint.y - popupHeight - 50;
        let arrowPosition = 'bottom'; // Arrow points down when popup is above
        
        // Check if popup fits above marker
        if (top < 10) {
            // Show below marker instead
            top = markerPoint.y + 50;
            arrowPosition = 'top'; // Arrow points up when popup is below
        }
        
        // Keep popup within horizontal bounds
        if (left < 10) left = 10;
        if (left + popupWidth > mapRect.width - 10) left = mapRect.width - popupWidth - 10;
        
        // Position popup and arrow
        popupElement.style.left = left + 'px';
        popupElement.style.top = top + 'px';
        
        // Position arrow to point to marker
        const arrow = popup.querySelector('.popup-arrow');
        const arrowLeft = markerPoint.x - left - 8; // 8px is half arrow width
        arrow.style.left = Math.max(16, Math.min(arrowLeft, popupWidth - 32)) + 'px';
        
        if (arrowPosition === 'top') {
            arrow.classList.add('arrow-top');
        } else {
            arrow.classList.add('arrow-bottom');
        }
        
        // Store reference first
        this.currentPopup = popupElement;
        
        // Add smooth fade-in effect
        setTimeout(() => {
            if (this.currentPopup === popupElement) { // Check if still current
                popup.classList.add('popup-visible');
            }
        }, 10);
        
        console.log('Enhanced popup created and positioned');
    },
    
    hide() {
        if (this.currentPopup) {
            console.log('Hiding popup');
            const popupToRemove = this.currentPopup;
            this.currentPopup = null; // Clear reference immediately
            
            const popup = popupToRemove.querySelector('.enhanced-popup');
            if (popup) {
                popup.classList.remove('popup-visible');
                
                // Remove after fade-out animation
                setTimeout(() => {
                    if (popupToRemove.parentNode) {
                        popupToRemove.remove();
                    }
                }, 200);
            } else {
                // Fallback: remove immediately if no popup element found
                popupToRemove.remove();
            }
        }
    }
};
