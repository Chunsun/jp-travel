// ===== UTILITY FUNCTIONS =====
const Utils = {
    getIcon(type) {
        return TRAVEL_DATA.icons[type] || TRAVEL_DATA.icons.default;
    },
    
    getMarkerSize(location, isHover, isClicked) {
        const { base, festival, hover, click } = TRAVEL_DATA.sizes;
        const normalSize = location.type === 'festival' ? festival : base;
        
        if (isClicked) return normalSize + click;
        if (isHover) return normalSize + hover;
        return normalSize;
    },
    
    getShadowIntensity(isHover) {
        return isHover ? 
            '0 8px 25px rgba(0,0,0,0.35)' : 
            '0 4px 15px rgba(0,0,0,0.2)';
    },
    
    getZIndex(location, isHover) {
        return isHover ? 1000 : (location.type === 'festival' ? 200 : 100);
    }
};
