mapboxgl.accessToken = 'pk.eyJ1Ijoia2FlZGFueXUiLCJhIjoiY21rYXJpNHF6MGltODNkcHE3dHM5cmxlZyJ9.nnYd9wh7kN2DJFgtuewiyg'

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/kaedanyu/cml6bsqrf005q01s6e2sxgikd',
    center: [-79.385284, 43.654956],
    zoom: 10,
    pitch: 70,
});

map.on('load', () => {

    map.addSource('buildings-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/Kaedanyu/ExerciseV/main/wk5-data/buildings.geojson' //URL to geojson file via github (update once published!)
    });


    map.addLayer({
        'id': 'buildings-pnt',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 20,
            'circle-color': '#2bff00'
        }
    });

   
});