// ===== ROUTE MANAGER =====
const RouteManager = {
    routeLines: [],
    
    show() {
        this.hide(); // Clear existing routes
        
        // Group locations by day
        const locationsByDay = {};
        TRAVEL_DATA.locations.forEach(location => {
            if (!locationsByDay[location.day]) {
                locationsByDay[location.day] = [];
            }
            locationsByDay[location.day].push(location);
        });
        
        // Create route lines for each day
        Object.keys(locationsByDay).forEach(day => {
            const dayLocations = locationsByDay[day];
            
            // Skip if filtering to specific day and this isn't it
            if (AppState.currentDayFilter !== 'all' && 
                AppState.currentDayFilter !== parseInt(day)) {
                return;
            }
            
            if (dayLocations.length > 1) {
                // Sort locations by name/order (could be improved with actual sequence)
                const coordinates = dayLocations.map(loc => [loc.lat, loc.lng]);
                
                const routeLine = L.polyline(coordinates, {
                    color: dayLocations[0].color,
                    weight: 3,
                    opacity: 0.7,
                    dashArray: '10, 5',
                    lineCap: 'round',
                    lineJoin: 'round'
                }).addTo(AppState.map);
                
                this.routeLines.push(routeLine);
            }
        });
    },
    
    hide() {
        this.routeLines.forEach(line => {
            AppState.map.removeLayer(line);
        });
        this.routeLines = [];
    },
    
    updateRoutes() {
        if (AppState.showRoutes) {
            this.show();
        }
    }
};

// ===== TIMELINE MANAGER =====
const TimelineManager = {
    init() {
        this.generate();
    },
    
    generate() {
        const container = document.getElementById('timeline-container');
        if (!container) return;
        
        // Group locations by day
        const locationsByDay = {};
        TRAVEL_DATA.locations.forEach(location => {
            if (!locationsByDay[location.day]) {
                locationsByDay[location.day] = [];
            }
            locationsByDay[location.day].push(location);
        });
        
        // Generate timeline HTML
        let html = '';
        Object.keys(locationsByDay)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .forEach(day => {
                const dayLocations = locationsByDay[day];
                const dayColor = dayLocations[0].color;
                const dayDate = dayLocations[0].date;
                
                html += `
                    <div class="timeline-day" data-day="${day}" style="--day-color: ${dayColor}">
                        <div class="timeline-day-header" onclick="this.parentElement.classList.toggle('expanded')">
                            <div>
                                <strong>Day ${day}</strong>
                                <span style="opacity: 0.8; margin-left: 8px;">${dayDate}</span>
                            </div>
                            <div>
                                <span style="opacity: 0.8;">${dayLocations.length} 個地點</span>
                                <span style="margin-left: 8px;">▼</span>
                            </div>
                        </div>
                        <div class="timeline-day-content">
                `;
                
                dayLocations.forEach(location => {
                    const icon = TRAVEL_DATA.icons[location.type] || TRAVEL_DATA.icons.default;
                    const featuresHtml = AppState.timelineMode === 'detailed' 
                        ? location.features.map(f => `<span class="feature-tag">${f}</span>`).join(' ')
                        : '';
                    
                    html += `
                        <div class="timeline-location" onclick="TimelineManager.focusLocation(${location.lat}, ${location.lng})" style="--location-color: ${location.color}">
                            <div class="timeline-location-icon">${icon}</div>
                            <div class="timeline-location-info">
                                <div class="timeline-location-name">${location.name}</div>
                                <div class="timeline-location-details">
                                    <span>⏱️ ${location.duration}</span>
                                    <span>🎯 ${location.priority}</span>
                                    ${AppState.timelineMode === 'detailed' ? `<span>🕒 ${location.openHours}</span>` : ''}
                                </div>
                                ${AppState.timelineMode === 'detailed' ? `
                                    <div style="margin-top: 8px;">
                                        ${featuresHtml}
                                    </div>
                                    <div style="margin-top: 4px; font-size: 12px; color: #6c757d;">
                                        ${location.description}
                                    </div>
                                ` : ''}
                            </div>
                            <div class="timeline-location-meta">
                                <div style="font-weight: 600;">${location.type}</div>
                            </div>
                        </div>
                    `;
                });
                
                html += `
                        </div>
                    </div>
                `;
            });
        
        container.innerHTML = html;
    },
    
    focusLocation(lat, lng) {
        // Find and highlight the marker
        const marker = AppState.markers.find(m => {
            const markerPos = m.getLatLng();
            return Math.abs(markerPos.lat - lat) < 0.0001 && Math.abs(markerPos.lng - lng) < 0.0001;
        });
        
        if (marker) {
            // Pan to location
            AppState.map.setView([lat, lng], 15, { animate: true });
            
            // Trigger marker click
            setTimeout(() => {
                marker.fire('click');
            }, 500);
        }
    },
    
    highlightDay(day) {
        // Update timeline day highlighting
        document.querySelectorAll('.timeline-day').forEach(dayEl => {
            const dayNum = parseInt(dayEl.dataset.day);
            if (day === 'all' || dayNum === day) {
                dayEl.style.opacity = '1';
                dayEl.style.transform = 'scale(1)';
            } else {
                dayEl.style.opacity = '0.5';
                dayEl.style.transform = 'scale(0.95)';
            }
        });
    }
};
