console.log('map-script.js connected');

mapboxgl.accessToken = 'pk.eyJ1Ijoic3dzMzAzIiwiYSI6ImNqOWVpNnZsOTJhZjIzMnJ3ZXcwYnI5ZDEifQ.w9e2F0_uvFFTHBYz7RIM5w';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-96, 37.8],
  zoom: 3
});


// code from the next step will go here!
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.032, 38.913]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.414, 37.776]
    },
    properties: {
      title: 'Mapbox',
      description: 'San Francisco, California'
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
   .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
});


//Parse data from our server to obtain lat/long and whatever else we may need
const headers = new Headers({
  'Accept': 'application/json'
})

fetch('/parking', {
  headers: headers
}).then(res => res.json())
.then(spotsData => {
  console.log(spotsData);
  spotsData.parking.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat([parseFloat(marker.longitude), parseFloat(marker.latitude)])
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
   .setHTML('<h3>' + spotsData.description + '</h3><p>' + spotsData.departtime + '</p>'))
  .addTo(map);
  });
})








