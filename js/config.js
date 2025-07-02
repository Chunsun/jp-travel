// ===== APPLICATION CONFIGURATION =====
const CONFIG = {
    map: {
        defaultCenter: [35.6762, 139.6503],
        defaultZoom: 6,
        tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors'
    },
    
    ui: {
        loadingDelay: 1000,
        initDelay: 500,
        animationDelay: 600,
        markerAnimationStep: 80,
        clickAnimationDuration: 150
    },
    
    popup: {
        offset: [0, -35],
        closeButton: true,
        autoClose: false,
        closeOnEscapeKey: true,
        className: 'custom-popup-style',
        maxWidth: 320,
        keepInView: true,
        autoPan: true,
        autoPanPadding: [10, 10]
    }
};
