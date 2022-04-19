function showLocation(position) {
    const { longitude, latitude } = position.coords;
    map.setCenter([longitude, latitude]);
}

function errorHandler() {
    console.log('nope')
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showLocation, errorHandler);
} else {
    console.log('Geolocation is not supported by your browser');
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhcml1bSIsImEiOiJjbDF3ZzJ4MW0wZGRvM2tvMXdpZTR1NzVmIn0.TksuYf29aF9_CCGOwbBmKg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [0, 0], // starting position [lng, lat]
    interactive: false,
    zoom: 17 // starting zoom
});

// We listen to the resize event
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});