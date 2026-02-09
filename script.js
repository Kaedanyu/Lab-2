mapboxgl.accessToken = 'pk.eyJ1Ijoia2FlZGFueXUiLCJhIjoiY21rYXJpNHF6MGltODNkcHE3dHM5cmxlZyJ9.nnYd9wh7kN2DJFgtuewiyg' //mapbox public token

const map = new mapboxgl.Map({
    container: 'my-map', //map container id
    style: 'mapbox://styles/kaedanyu/cml6bsqrf005q01s6e2sxgikd', // style url
    center: [-79.385284, 43.654956], //starting position viewing downtown Toronto
    zoom: 10, //zoomed in
    pitch: 70, //angled camera view
});

map.on('load', () => {

    map.addSource('buildings-data', { //add geoJSON from github repo
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/Kaedanyu/Lab-2/main/Lost_Rivers_20170705__last_edited.geojson' //URL to geojson file via github (update once published!) ***WAIT TO WHAT?*
    });


    map.addLayer({
        'id': 'rivers-line',
        'type': 'line',
        'source': 'buildings-data',
        'paint': {
            'line-color': '#B4D2FF',
            'line-width': 2
        }
    });


});