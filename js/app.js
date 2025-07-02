// ===== APPLICATION INITIALIZATION =====

// ===== APPLICATION STATE =====
const AppState = {
    map: null,
    markers: [],
    routeLines: [],
    currentDayFilter: 'all',
    showRoutes: false,
    timelineMode: 'compact'
};

// ===== GLOBAL FUNCTIONS =====
function filterMap(filter) {
    FilterManager.apply(filter);
}

function filterByDay(day) {
    AppState.currentDayFilter = day;
    
    // Update button states
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (day === 'all') {
        document.querySelector('.day-btn[onclick="filterByDay(\'all\')"]').classList.add('active');
    } else {
        document.querySelector(`[data-day="${day}"]`).classList.add('active');
    }
    
    // Filter markers
    AppState.markers.forEach(marker => {
        const location = TRAVEL_DATA.locations.find(loc => 
            loc.lat === marker.getLatLng().lat && loc.lng === marker.getLatLng().lng
        );
        
        if (day === 'all' || location.day === day) {
            marker.addTo(AppState.map);
        } else {
            marker.remove();
        }
    });
    
    // Update route lines
    if (AppState.showRoutes) {
        RouteManager.updateRoutes();
    }
    
    // Update timeline
    TimelineManager.highlightDay(day);
}

function showTimelineMode(mode) {
    AppState.timelineMode = mode;
    
    // Update button states
    document.querySelectorAll('.timeline-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="showTimelineMode('${mode}')"]`).classList.add('active');
    
    // Regenerate timeline
    TimelineManager.generate();
}

function toggleRouteLines() {
    AppState.showRoutes = !AppState.showRoutes;
    
    // Update button state
    const btn = document.querySelector('.route-toggle-btn');
    btn.classList.toggle('active', AppState.showRoutes);
    
    if (AppState.showRoutes) {
        RouteManager.show();
    } else {
        RouteManager.hide();
    }
}

// ===== GLOBAL EVENT HANDLERS =====
document.addEventListener('click', function(e) {
    // Close popup when clicking outside of it
    if (PopupManager.currentPopup && 
        !e.target.closest('.custom-popup-content') && 
        !e.target.closest('.custom-marker')) {
        PopupManager.hide();
    }
});

// Close popup on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && PopupManager.currentPopup) {
        PopupManager.hide();
    }
});

// ===== APPLICATION INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        MapManager.init();
        TimelineManager.init();
    }, CONFIG.ui.initDelay);
});
