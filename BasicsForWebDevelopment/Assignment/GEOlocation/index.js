function showLocation(position) {
    const { longitude, latitude } = position.coords;
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhcml1bSIsImEiOiJjbDF3ZzJ4MW0wZGRvM2tvMXdpZTR1NzVmIn0.TksuYf29aF9_CCGOwbBmKg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [longitude, latitude], // starting position [lng, lat]
        interactive: false,
        zoom: 17 // starting zoom
    });
}

function errorHandler() {
    console.log('nope')
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
} else {
    console.log('Geolocation is not supported by your browser');
}