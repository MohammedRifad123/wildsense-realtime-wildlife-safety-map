// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Coordinates for Kochi, Kerala
    const kochiCoords = [9.9312, 76.2673];
    const initialZoom = 13;

    // Initialize the Leaflet map
    const map = L.map('map', {
        zoomControl: false // We will move zoom control to a different position if needed, or keep it default but styled
    }).setView(kochiCoords, initialZoom);

    // Add Zoom control to bottom right (like Google Maps)
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Add OpenStreetMap tiles
    // Using a cleaner tile style (CartoDB Positron) for a modern, minimal look like Google Maps
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Translations Dictionary
    const translations = {
        en: {
            search_placeholder: "Search a place...",
            recent_alerts: "Recent Alerts",
            report_animal: "Report Animal",
            report_title: "Report Animal Sighting",
            animal_type: "Animal Type",
            select_animal: "Select Animal",
            animal_leopard: "Leopard",
            animal_elephant: "Elephant",
            animal_wild_boar: "Wild Boar",
            animal_snake: "Snake",
            animal_tiger: "Tiger",
            animal_bear: "Bear",
            animal_other: "Other",
            location_coords: "Location Coordinates",
            detecting_placeholder: "Detecting or Select on Map",
            use_map: "You can also click anywhere on the map to select a specific location.",
            detect_loc: "Detect Location",
            risk_level: "Risk Level",
            select_risk: "Select Risk",
            risk_high: "High (Immediate Danger)",
            risk_medium: "Medium (Nearby)",
            risk_low: "Low (Spotted Far Away)",
            submit_report: "Submit Report",
            report_here: "Report Animal Here",
            spotted: "Spotted:",
            selected_location: "Selected Location",
            toast_getting_loc: "Getting your location...",
            toast_loc_denied: "Location access needed to show your position.",
            toast_loc_error: "Unable to fetch location.",
            toast_searching: "Searching...",
            toast_loc_not_found: "Location not found.",
            toast_alerts_found: "wildlife alerts found near searched location",
            toast_animal_reported: "Animal reported at selected location",
            spotted_near: "spotted near your area"
        },
        ml: {
            search_placeholder: "ഒരു സ്ഥലം തിരയുക...",
            recent_alerts: "സമീപകാല അറിയിപ്പുകൾ",
            report_animal: "മൃഗത്തെ റിപ്പോർട്ട് ചെയ്യുക",
            report_title: "മൃഗത്തെ കണ്ടത് റിപ്പോർട്ട് ചെയ്യുക",
            animal_type: "മൃഗത്തിന്റെ തരം",
            select_animal: "മൃഗത്തെ തിരഞ്ഞെടുക്കുക",
            animal_leopard: "പുലി",
            animal_elephant: "ആന",
            animal_wild_boar: "കാട്ടുപന്നി",
            animal_snake: "പാമ്പ്",
            animal_tiger: "കടുവ",
            animal_bear: "കരടി",
            animal_other: "മറ്റ്",
            location_coords: "സ്ഥലത്തിന്റെ കോർഡിനേറ്റുകൾ",
            detecting_placeholder: "കണ്ടെത്തുന്നു...",
            use_map: "മാപ്പിൽ എവിടെയെങ്കിലും ക്ലിക്ക് ചെയ്തും സ്ഥലം തിരഞ്ഞെടുക്കാം.",
            detect_loc: "സ്ഥലം കണ്ടെത്തുക",
            risk_level: "അപകട സാധ്യത",
            select_risk: "സാധ്യത തിരഞ്ഞെടുക്കുക",
            risk_high: "ഉയർന്നത് (ഉடனடி അപകടം)",
            risk_medium: "ഇടത്തരം (അടുത്തുള്ള)",
            risk_low: "കുറഞ്ഞത്",
            submit_report: "റിപ്പോർട്ട് സമർപ്പിക്കുക",
            report_here: "ഇവിടെ റിപ്പോർട്ട് ചെയ്യുക",
            spotted: "കണ്ടെത്തിയത്:",
            selected_location: "തിരഞ്ഞെടുത്ത സ്ഥലം",
            toast_getting_loc: "നിങ്ങളുടെ സ്ഥലം കണ്ടെത്തുന്നു...",
            toast_loc_denied: "നിങ്ങളുടെ സ്ഥലം കാണിക്കാൻ അനുമതി ആവശ്യമാണ്.",
            toast_loc_error: "സ്ഥലം കണ്ടെത്താനായില്ല.",
            toast_searching: "തിരയുന്നു...",
            toast_loc_not_found: "സ്ഥലം കണ്ടെത്തിയില്ല.",
            toast_alerts_found: "തിരഞ്ഞെടുത്ത സ്ഥലത്തിന് സമീപം വന്യജീവി മുന്നറിയിപ്പുകൾ കണ്ടെത്തി",
            toast_animal_reported: "തിരഞ്ഞെടുത്ത സ്ഥലത്ത് മൃഗത്തെ റിപ്പോർട്ട് ചെയ്തു",
            spotted_near: "നിങ്ങളുടെ പ്രദേശത്തിന് സമീപം കണ്ടെത്തി"
        },
        hi: {
            search_placeholder: "जगह खोजें...",
            recent_alerts: "हाल के अलर्ट",
            report_animal: "जानवर की रिपोर्ट करें",
            report_title: "जानवर दिखने की रिपोर्ट करें",
            animal_type: "जानवर का प्रकार",
            select_animal: "जानवर चुनें",
            animal_leopard: "तेंदुआ",
            animal_elephant: "हाथी",
            animal_wild_boar: "जंगली सुअर",
            animal_snake: "सांप",
            animal_tiger: "बाघ",
            animal_bear: "भालू",
            animal_other: "अन्य",
            location_coords: "स्थान के निर्देशांक",
            detecting_placeholder: "पता लगा रहे हैं...",
            use_map: "विशिष्ट स्थान चुनने के लिए नक्शे पर क्लिक करें।",
            detect_loc: "स्थान का पता लगाएं",
            risk_level: "खतरे का स्तर",
            select_risk: "स्तर चुनें",
            risk_high: "उच्च (तत्काल खतरा)",
            risk_medium: "मध्यम",
            risk_low: "कम",
            submit_report: "रिपोर्ट जमा करें",
            report_here: "यहाँ रिपोर्ट करें",
            spotted: "देखा गया:",
            selected_location: "चुना हुआ स्थान",
            toast_getting_loc: "आपका स्थान प्राप्त कर रहे हैं...",
            toast_loc_denied: "आपका स्थान दिखाने के लिए अनुमति की आवश्यकता है।",
            toast_loc_error: "स्थान प्राप्त करने में असमर्थ।",
            toast_searching: "खोज रहे हैं...",
            toast_loc_not_found: "स्थान नहीं मिला।",
            toast_alerts_found: "खोजे गए स्थान के पास वन्यजीव अलर्ट मिले",
            toast_animal_reported: "चुने गए स्थान पर जानवर की रिपोर्ट की गई",
            spotted_near: "आपके क्षेत्र के पास देखा गया"
        },
        ta: {
            search_placeholder: "இடத்தை தேடுங்கள்...",
            recent_alerts: "சமீபத்திய விழிப்பூட்டல்கள்",
            report_animal: "விலங்கை புகாரளி",
            report_title: "விலங்கு பார்த்ததை புகாரளி",
            animal_type: "விலங்கின் வகை",
            select_animal: "விலங்கைத் தேர்ந்தெடுக்கவும்",
            animal_leopard: "சிறுத்தை",
            animal_elephant: "யானை",
            animal_wild_boar: "காட்டுப்பன்றி",
            animal_snake: "பாம்பு",
            animal_tiger: "புலி",
            animal_bear: "கரടി (கரடி)",
            animal_other: "மற்றவை",
            location_coords: "இடத்தின் ஆயத்தொலைவுகள்",
            detecting_placeholder: "கண்டறியப்படுகிறது...",
            use_map: "வரைபடத்தைப் பயன்படுத்தவும்.",
            detect_loc: "இடத்தைக் கண்டறி",
            risk_level: "ஆபத்து நிலை",
            select_risk: "நிலையைத் தேர்ந்தெடுக்கவும்",
            risk_high: "அதிகம்",
            risk_medium: "நடுத்தரம்",
            risk_low: "குறைவு",
            submit_report: "அறிக்கையைச் சமர்ப்பிக்கவும்",
            report_here: "இங்கே புகாரளி",
            spotted: "காணப்பட்டது:",
            selected_location: "தேர்ந்தெடுக்கப்பட்ட இடம்",
            toast_getting_loc: "உங்கள் இருப்பிடத்தைப் பெறுகிறது...",
            toast_loc_denied: "உங்கள் இருப்பிடத்தைக் காட்ட அனுமதி தேவை.",
            toast_loc_error: "இருப்பிடத்தைப் பெற முடியவில்லை.",
            toast_searching: "தேடுகிறது...",
            toast_loc_not_found: "இடம் கிடைக்கவில்லை.",
            toast_alerts_found: "தேடப்பட்ட இடத்திற்கு அருகில் வனவிலங்கு விழிப்பூட்டல்கள் கிடைத்தன",
            toast_animal_reported: "தேர்ந்தெடுக்கப்பட்ட இடத்தில் விலங்கு புகாரளிக்கப்பட்டது",
            spotted_near: "உங்கள் பகுதிக்கு அருகில் காணப்பட்டது"
        },
        kn: {
            search_placeholder: "ಸ್ಥಳವನ್ನು ಹುಡುಕಿ...",
            recent_alerts: "ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆಗಳು",
            report_animal: "ಪ್ರಾಣಿಯನ್ನು ವರದಿ ಮಾಡಿ",
            report_title: "ಪ್ರಾಣಿ ನೋಡಿದ್ದನ್ನು ವರದಿ ಮಾಡಿ",
            animal_type: "ಪ್ರಾಣಿಯ ಪ್ರಕಾರ",
            select_animal: "ಪ್ರಾಣಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            animal_leopard: "ಚಿರತೆ",
            animal_elephant: "ಆನೆ",
            animal_wild_boar: "ಕಾಡುಹಂದಿ",
            animal_snake: "ಹಾವು",
            animal_tiger: "ಹುಲಿ",
            animal_bear: "ಕರಡಿ (ಕರಡಿ)",
            animal_other: "ಇತರೆ",
            location_coords: "ಸ್ಥಳದ ನಿರ್ದೇಶಾಂಕಗಳು",
            detecting_placeholder: "ಪತ್ತೆಹಚ್ಚಲಾಗುತ್ತಿದೆ...",
            use_map: "ನಕ್ಷೆಯನ್ನು ಬಳಸಿ",
            detect_loc: "ಸ್ಥಳವನ್ನು ಪತ್ತೆಹಚ್ಚಿ",
            risk_level: "ಅಪಾಯದ ಮಟ್ಟ",
            select_risk: "ಮಟ್ಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            risk_high: "ಹೆಚ್ಚು",
            risk_medium: "ಮಧ್ಯಮ",
            risk_low: "ಕಡಿಮೆ",
            submit_report: "ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿ",
            report_here: "ಇಲ್ಲಿ ವರದಿ ಮಾಡಿ",
            spotted: "ಕಂಡಿದೆ:",
            selected_location: "ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳ",
            toast_getting_loc: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ...",
            toast_loc_denied: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ತೋರಿಸಲು ಅನುಮತಿ ಅಗತ್ಯವಿದೆ.",
            toast_loc_error: "ಸ್ಥಳವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ.",
            toast_searching: "ಹುಡುಕಲಾಗುತ್ತಿದೆ...",
            toast_loc_not_found: "ಸ್ಥಳ ಕಂಡುಬಂದಿಲ್ಲ.",
            toast_alerts_found: "ಹುಡುಕಿದ ಸ್ಥಳದ ಬಳಿ ವನ್ಯಜೀವಿ ಎಚ್ಚರಿಕೆಗಳು ಕಂಡುಬಂದಿವೆ",
            toast_animal_reported: "ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳದಲ್ಲಿ ಪ್ರಾಣಿಯನ್ನು ವರದಿ ಮಾಡಲಾಗಿದೆ",
            spotted_near: "ನಿಮ್ಮ ಪ್ರದೇಶದ ಬಳಿ ಕಂಡುಬಂದಿದೆ"
        }
    };

    let currentLang = localStorage.getItem('wildsense_lang') || 'en';

    // Global Translation Helper
    window.t = (key) => {
        return translations[currentLang][key] || translations['en'][key] || key;
    };

    const updateLanguage = (lang) => {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Re-render feed elements
        const feedList = document.getElementById('feed-list');
        if (feedList) {
            feedList.innerHTML = '';
            sampleReports.forEach(report => {
                const dangerLevel = calculateDangerLevel ? calculateDangerLevel(report.timestamp) : 'safe';
                const feedItem = createFeedItem ? createFeedItem(window.t('animal_' + report.animal.toLowerCase().replace(' ', '_')) || report.animal, report.timeStr, dangerLevel) : null;
                if (feedItem) feedList.appendChild(feedItem);
            });
        }

        // Close popups to avoid un-translated text showing
        map.closePopup();
    };

    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
            localStorage.setItem('wildsense_lang', e.target.value);
        });
    }

    // Track and display user location
    let userLocationMarker = null;
    let userAccuracyCircle = null;

    map.on('locationfound', (e) => {
        const radius = e.accuracy / 2;

        if (!userLocationMarker) {
            userLocationMarker = L.circleMarker(e.latlng, {
                radius: 8,
                fillColor: '#4285F4', // Google Maps Blue
                color: '#ffffff',
                weight: 2,
                opacity: 1,
                fillOpacity: 1,
                className: 'pulse-marker-blue'
            }).addTo(map);

            userAccuracyCircle = L.circle(e.latlng, radius, {
                color: '#4285F4',
                fillColor: '#4285F4',
                fillOpacity: 0.15,
                weight: 1
            }).addTo(map);
            
            userLocationMarker.bindPopup('<div class="custom-popup"><p style="margin:0;font-weight:500;">You are here</p></div>');
        } else {
            userLocationMarker.setLatLng(e.latlng);
            userAccuracyCircle.setLatLng(e.latlng);
            userAccuracyCircle.setRadius(radius);
        }
    });

    map.on('locationerror', (e) => {
        console.log('Location access denied or unavailable.', e.message);
    });

    // Start tracking user location
    map.locate({setView: true, maxZoom: 14, watch: true, enableHighAccuracy: true});

    // Locate Me Button
    const locateMeBtn = document.getElementById('locate-me-btn');
    locateMeBtn.addEventListener('click', () => {
        // Trigger Ripple Animation
        locateMeBtn.classList.remove('clicked');
        void locateMeBtn.offsetWidth; // Force reflow to restart animation
        locateMeBtn.classList.add('clicked');

        const toastNotification = document.getElementById('toast-notification');
        const toastMessage = document.getElementById('toast-message');
        toastMessage.textContent = window.t('toast_getting_loc');
        toastNotification.classList.remove('hidden');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    // Center the map smoothly
                    map.flyTo([lat, lng], 15, {
                        animate: true,
                        duration: 1.5
                    });
                    locateMeBtn.classList.add('active');
                    toastNotification.classList.add('hidden');
                    
                    // Update user marker position directly
                    if (userLocationMarker && userAccuracyCircle) {
                        userLocationMarker.setLatLng([lat, lng]);
                        userAccuracyCircle.setLatLng([lat, lng]);
                    } else {
                        userLocationMarker = L.circleMarker([lat, lng], {
                            radius: 8,
                            fillColor: '#4285F4', // Google Maps Blue
                            color: '#ffffff',
                            weight: 2,
                            opacity: 1,
                            fillOpacity: 1,
                            className: 'pulse-marker-blue'
                        }).addTo(map);

                        userAccuracyCircle = L.circle([lat, lng], position.coords.accuracy / 2, {
                            color: '#4285F4',
                            fillColor: '#4285F4',
                            fillOpacity: 0.15,
                            weight: 1
                        }).addTo(map);
                        
                        userLocationMarker.bindPopup('<div class="custom-popup"><p style="margin:0;font-weight:500;">You are here</p></div>');
                    }
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    if (error.code === error.PERMISSION_DENIED) {
                        toastMessage.textContent = window.t('toast_loc_denied');
                    } else {
                        toastMessage.textContent = window.t('toast_loc_error');
                    }
                    setTimeout(() => toastNotification.classList.add('hidden'), 4000);
                },
                { enableHighAccuracy: true }
            );
        } else {
            toastMessage.textContent = window.t('toast_loc_error');
            setTimeout(() => toastNotification.classList.add('hidden'), 3000);
        }
    });

    // Make button active when location is found, disable when panning away
    map.on('locationfound', () => {
        locateMeBtn.classList.add('active');
    });

    map.on('dragstart', () => {
        locateMeBtn.classList.remove('active');
    });

    const now = Date.now();
    const HOUR_MS = 60 * 60 * 1000;

    // Sample Wildlife Data with timestamps relative to now
    const sampleReports = [
        { lat: 9.9352, lng: 76.2673, animal: 'Elephant', timestamp: now - (10 * 60 * 1000), timeStr: '10 mins ago' }, // < 2 hrs
        { lat: 9.9212, lng: 76.2700, animal: 'Wild Boar', timestamp: now - (3 * HOUR_MS), timeStr: '3 hours ago' }, // 2-6 hrs
        { lat: 9.9400, lng: 76.2550, animal: 'Snake', timestamp: now - (45 * 60 * 1000), timeStr: '45 mins ago' }, // < 2 hrs
        { lat: 9.9150, lng: 76.2600, animal: 'Deer', timestamp: now - (24 * HOUR_MS), timeStr: '1 day ago' }, // > 6 hrs
        { lat: 9.9380, lng: 76.2800, animal: 'Leopard', timestamp: now - (5 * 60 * 1000), timeStr: '5 mins ago' } // < 2 hrs
    ];

    // Dynamic Risk Detection Logic
    const calculateDangerLevel = (timestamp) => {
        const diffHours = (Date.now() - timestamp) / (1000 * 60 * 60);
        if (diffHours <= 2) return 'high'; // <= 2 hours: Red
        if (diffHours <= 6) return 'medium'; // 2-6 hours: Yellow
        return 'safe'; // > 6 hours: Green
    };

    // Helper function to get color based on danger level
    const getColor = (level) => {
        switch(level) {
            case 'high': return '#e53935'; // Red
            case 'medium': return '#fb8c00'; // Yellow/Orange
            case 'safe': return '#43a047'; // Green
            default: return '#333333';
        }
    };

    // Helper to render a report marker on the map
    const renderReportMarker = (report) => {
        const dangerLevel = calculateDangerLevel(report.timestamp);
        const color = getColor(dangerLevel);
        
        const marker = L.circleMarker([report.lat, report.lng], {
            radius: 12,
            fillColor: color,
            color: '#ffffff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
            className: dangerLevel === 'high' ? 'pulse-marker-high' : ''
        }).addTo(map);

        const popupContent = `
            <div class="custom-popup">
                <h3 style="margin: 0 0 5px 0; color: ${color}; font-size: 16px;">${window.t('animal_' + report.animal.toLowerCase().replace(' ', '_')) || report.animal}</h3>
                <p style="margin: 0; font-size: 13px; color: #555;">${window.t('spotted')} ${report.timeStr}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
        return marker;
    };

    // Add initial markers to the map
    sampleReports.forEach(report => {
        renderReportMarker(report);
    });

    // Helper to generate dynamic reports around a new searched location
    const generateLocalAlerts = (lat, lon) => {
        const animals = ['Leopard', 'Elephant', 'Wild Boar', 'Snake'];
        const numReports = Math.floor(Math.random() * 3) + 2; // 2 to 4 reports
        
        for (let i = 0; i < numReports; i++) {
            const randomLat = lat + (Math.random() - 0.5) * 0.04;
            const randomLon = lon + (Math.random() - 0.5) * 0.04;
            const isHighDanger = Math.random() > 0.5;
            const offsetMs = isHighDanger ? (Math.random() * 60 * 60 * 1000) : (Math.random() * 5 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000);
            const reportTime = Date.now() - offsetMs;
            
            let timeStr = 'Just now';
            if (offsetMs > 60 * 60 * 1000) timeStr = Math.floor(offsetMs / (60 * 60 * 1000)) + ' hours ago';
            else if (offsetMs > 60 * 1000) timeStr = Math.floor(offsetMs / (60 * 1000)) + ' mins ago';

            const newReport = {
                lat: randomLat,
                lng: randomLon,
                animal: animals[Math.floor(Math.random() * animals.length)],
                timestamp: reportTime,
                timeStr: timeStr
            };

            sampleReports.unshift(newReport);
            renderReportMarker(newReport);
            
            // Add to feed silently
            const feedItem = createFeedItem(newReport.animal, newReport.timeStr, calculateDangerLevel(reportTime));
            feedList.insertBefore(feedItem, feedList.firstChild);
        }

        if (isHeatmapActive) {
            updateHeatmap();
        }

        // Show toast
        const toastNotification = document.getElementById('toast-notification');
        const toastMessage = document.getElementById('toast-message');
        toastMessage.textContent = `⚠️ ${numReports} ${window.t('toast_alerts_found')}`;
        toastNotification.classList.remove('hidden');
        setTimeout(() => {
            toastNotification.classList.add('hidden');
        }, 4000);
    };

    // Heatmap Logic
    let heatLayer = null;
    let isHeatmapActive = false;
    const heatmapToggleBtn = document.getElementById('heatmap-toggle-btn');

    const updateHeatmap = () => {
        if (heatLayer) {
            map.removeLayer(heatLayer);
        }
        
        if (isHeatmapActive) {
            // Map reports to intensity values based on danger level
            const heatData = sampleReports.map(report => {
                const dangerLevel = calculateDangerLevel(report.timestamp);
                let intensity = 0.4; // safe
                if (dangerLevel === 'high') intensity = 1.0;
                else if (dangerLevel === 'medium') intensity = 0.7;
                return [report.lat, report.lng, intensity];
            });

            heatLayer = L.heatLayer(heatData, {
                radius: 35,
                blur: 25,
                maxZoom: 14,
                gradient: {
                    0.4: '#43a047', // Green
                    0.7: '#fb8c00', // Yellow
                    1.0: '#e53935'  // Red
                }
            }).addTo(map);
            
            heatmapToggleBtn.classList.add('active');
        } else {
            heatmapToggleBtn.classList.remove('active');
        }
    };

    heatmapToggleBtn.addEventListener('click', () => {
        isHeatmapActive = !isHeatmapActive;
        updateHeatmap();
    });

    // Alert Feed Logic
    const feedPanel = document.getElementById('alert-feed');
    const feedToggleBtn = document.getElementById('feed-toggle-btn');
    const closeFeedBtn = document.getElementById('close-feed');
    const feedList = document.getElementById('feed-list');

    // Initially hide the feed
    feedPanel.classList.add('hidden');

    feedToggleBtn.addEventListener('click', () => {
        feedPanel.classList.remove('hidden');
    });

    closeFeedBtn.addEventListener('click', () => {
        feedPanel.classList.add('hidden');
    });

    const createFeedItem = (animal, timeStr, dangerLevel) => {
        const li = document.createElement('li');
        li.className = 'feed-item';
        li.innerHTML = `
            <div class="feed-icon ${dangerLevel}"></div>
            <div class="feed-content">
                <p>${animal} ${window.t('spotted_near')}</p>
                <small>${timeStr}</small>
            </div>
        `;
        return li;
    };

    // Render initial sample reports in feed
    sampleReports.forEach(report => {
        const dangerLevel = calculateDangerLevel(report.timestamp);
        feedList.appendChild(createFeedItem(window.t('animal_' + report.animal.toLowerCase().replace(' ', '_')) || report.animal, report.timeStr, dangerLevel));
    });

    // Modal Logic
    const reportBtn = document.getElementById('report-btn');
    const reportModal = document.getElementById('report-modal');
    const closeModal = document.getElementById('close-modal');
    const detectLocationBtn = document.getElementById('detect-location-btn');
    const locationInput = document.getElementById('location-input');
    const reportForm = document.getElementById('report-form');

    let currentLat = null;
    let currentLng = null;
    let tempMarker = null;

    // Open Modal Function
    const openModalWithLocation = (lat, lng) => {
        if (lat && lng) {
            currentLat = lat;
            currentLng = lng;
            locationInput.value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        }
        reportModal.classList.remove('hidden');
    };

    // Location Detection Logic
    const autoDetectLocation = () => {
        locationInput.value = 'Locating...';
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    currentLat = position.coords.latitude;
                    currentLng = position.coords.longitude;
                    locationInput.value = `${currentLat.toFixed(4)}, ${currentLng.toFixed(4)}`;
                },
                (error) => {
                    locationInput.value = 'Unable to fetch location';
                    console.log('Location access denied or unavailable');
                }
            );
        } else {
            locationInput.value = 'Geolocation not supported';
        }
    };

    // Open Modal from main button
    reportBtn.addEventListener('click', () => {
        openModalWithLocation(null, null);
        // Automatically attempt to fetch GPS location
        autoDetectLocation();
    });

    // Handle Map Click to place temporary marker
    map.on('click', (e) => {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        // Remove existing temporary marker if any
        if (tempMarker) {
            map.removeLayer(tempMarker);
        }

        // Add temporary pin marker
        tempMarker = L.marker([lat, lng]).addTo(map);

        // Bind popup with action button
        const popupContent = document.createElement('div');
        popupContent.className = 'custom-popup';
        popupContent.innerHTML = `
            <p style="margin: 0 0 10px 0; font-weight: 500;">${window.t('selected_location')}</p>
            <button id="report-here-btn" class="secondary-btn" style="width: 100%; font-size: 13px; padding: 6px;">${window.t('report_here')}</button>
        `;

        tempMarker.bindPopup(popupContent).openPopup();

        // Add event listener to the popup button after it's added to the DOM
        tempMarker.on('popupopen', () => {
            const reportHereBtn = document.getElementById('report-here-btn');
            if (reportHereBtn) {
                reportHereBtn.addEventListener('click', () => {
                    tempMarker.closePopup();
                    openModalWithLocation(lat, lng);
                });
            }
        });
    });

    // Close Modal
    const hideModal = () => {
        reportModal.classList.add('hidden');
        reportForm.reset();
        locationInput.value = '';
        currentLat = null;
        currentLng = null;
        if (tempMarker) {
            map.removeLayer(tempMarker);
            tempMarker = null;
        }
    };

    closeModal.addEventListener('click', hideModal);

    // Close if clicked outside the content
    reportModal.addEventListener('click', (e) => {
        if (e.target === reportModal) {
            hideModal();
        }
    });

    // Handle Detect Location Button click
    detectLocationBtn.addEventListener('click', () => {
        autoDetectLocation();
    });

    // Handle Form Submit
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const animalType = document.getElementById('animal-type').value;
        
        if (!currentLat || !currentLng) {
            // Default to center of map if location wasn't detected for demo purposes
            currentLat = map.getCenter().lat;
            currentLng = map.getCenter().lng;
        }

        // Add the new report to the map dynamically
        const reportTimestamp = Date.now();
        const dangerLevel = calculateDangerLevel(reportTimestamp); // Will be 'high'
        const markerColor = getColor(dangerLevel);

        const newMarker = L.circleMarker([currentLat, currentLng], {
            radius: 12,
            fillColor: markerColor,
            color: '#ffffff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
            className: 'pulse-marker-high'
        }).addTo(map);

        const popupContent = `
            <div class="custom-popup">
                <p style="margin: 0 0 5px 0; color: #43a047; font-size: 12px; font-weight: bold;">✅ Report Confirmed</p>
                <h3 style="margin: 0 0 5px 0; color: ${markerColor}; font-size: 16px;">${animalType}</h3>
                <p style="margin: 0 0 2px 0; font-size: 13px; color: #555;">Danger: <strong style="color: ${markerColor}; text-transform: uppercase;">${dangerLevel}</strong></p>
                <p style="margin: 0; font-size: 13px; color: #555;">Spotted: Just now</p>
            </div>
        `;
        newMarker.bindPopup(popupContent).openPopup();

        // Center map on new report
        map.setView([currentLat, currentLng], 14);

        // Update Sample Reports array so heatmap updates correctly
        sampleReports.unshift({
            lat: currentLat,
            lng: currentLng,
            animal: animalType,
            timestamp: reportTimestamp,
            timeStr: 'Just now'
        });

        // Update heatmap if active
        if (isHeatmapActive) {
            updateHeatmap();
        }

        // Add to Alert Feed
        const newFeedItem = createFeedItem(animalType, 'Just now', 'high');
        feedList.insertBefore(newFeedItem, feedList.firstChild);

        // Hide modal
        hideModal();
        
        // Show custom toast notification
        const toastNotification = document.getElementById('toast-notification');
        const toastMessage = document.getElementById('toast-message');
        
        toastMessage.textContent = '⚠️ Animal reported at selected location';
        toastNotification.classList.remove('hidden');
        
        // Hide after 4 seconds
        setTimeout(() => {
            toastNotification.classList.add('hidden');
        }, 4000);
    });

    // Handle Map Search
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');

    // Helper to center map and drop marker
    const handleLocationSelect = (lat, lon, displayName) => {
        // Center the map
        map.setView([lat, lon], 14);
        
        // Hide suggestions and unfocus input
        searchSuggestions.classList.add('hidden');
        searchInput.value = displayName || searchInput.value;
        searchInput.blur();

        // Remove existing temporary marker if any
        if (tempMarker) {
            map.removeLayer(tempMarker);
        }

        // Add temporary pin marker
        tempMarker = L.marker([lat, lon]).addTo(map);

        // Bind popup with action button
        const popupContent = document.createElement('div');
        popupContent.className = 'custom-popup';
        popupContent.innerHTML = `
            <button id="report-here-btn" class="secondary-btn" style="width: 100%; font-size: 13px; padding: 6px;">${t('report_here')}</button>
        `;

        tempMarker.bindPopup(popupContent).openPopup();

        // Add event listener to the popup button after it's added to the DOM
        tempMarker.on('popupopen', () => {
            const reportHereBtn = document.getElementById('report-here-btn');
            if (reportHereBtn) {
                reportHereBtn.addEventListener('click', () => {
                    tempMarker.closePopup();
                    openModalWithLocation(lat, lon);
                });
            }
        });

        // Dynamically generate local alerts for the new area to demonstrate the feature
        generateLocalAlerts(lat, lon);
    };

    // Form submit fallback
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (!query) return;

        searchSuggestions.classList.add('hidden');

        // Show a brief locating toast
        const toastNotification = document.getElementById('toast-notification');
        const toastMessage = document.getElementById('toast-message');
        toastMessage.textContent = `Searching for "${query}"...`;
        toastNotification.classList.remove('hidden');

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                toastNotification.classList.add('hidden');
                if (data && data.length > 0) {
                    const result = data[0];
                    handleLocationSelect(parseFloat(result.lat), parseFloat(result.lon), result.display_name);
                } else {
                    toastMessage.textContent = `Location not found.`;
                    toastNotification.classList.remove('hidden');
                    setTimeout(() => {
                        toastNotification.classList.add('hidden');
                    }, 3000);
                }
            })
            .catch(error => console.error('Search error:', error));
    });

    // Autocomplete logic with debounce
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value.trim();

        if (query.length < 3) {
            searchSuggestions.classList.add('hidden');
            searchSuggestions.innerHTML = '';
            return;
        }

        debounceTimer = setTimeout(() => {
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    searchSuggestions.innerHTML = '';
                    if (data && data.length > 0) {
                        data.forEach(result => {
                            const li = document.createElement('li');
                            li.className = 'search-suggestion-item';
                            // Shorten the display name for UI cleanliness
                            const shortName = result.display_name.split(',').slice(0, 3).join(',');
                            li.textContent = shortName;
                            li.addEventListener('click', () => {
                                handleLocationSelect(parseFloat(result.lat), parseFloat(result.lon), shortName);
                            });
                            searchSuggestions.appendChild(li);
                        });
                        searchSuggestions.classList.remove('hidden');
                    } else {
                        searchSuggestions.classList.add('hidden');
                    }
                })
                .catch(err => console.error('Autocomplete error:', err));
        }, 400); // 400ms debounce
    });

    // Hide suggestions on outside click
    document.addEventListener('click', (e) => {
        if (!searchForm.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.classList.add('hidden');
        }
    });

    // Initial Language Render
    updateLanguage(currentLang);
});
