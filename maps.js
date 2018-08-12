mapboxgl.accessToken = 'pk.eyJ1IjoiZG91YmxlYXlrYXkiLCJhIjoiY2prcjFmM2sxMHZwaDNwbG1vdmI1M2p3dSJ9.lsLTFEgtfhgbI18RFypUuQ';

var mapStyle = 'mapbox://styles/doubleaykay/cjkr3ud6nblay2rten5sb06bv'
var mapZoom = 16.5

const focoMap = new mapboxgl.Map({
  container: 'focoMap',
  style: mapStyle,
  center: [-72.290939, 43.703056],
  zoom: mapZoom
});

const collisMap = new mapboxgl.Map({
  container: 'collisMap',
  style: mapStyle,
  center: [-72.289848, 43.702667],
  zoom: mapZoom
});

const hopMap = new mapboxgl.Map({
  container: 'hopMap',
  style: mapStyle,
  center: [-72.288135, 43.701659],
  zoom: mapZoom
});

const kafMap = new mapboxgl.Map({
  container: 'kafMap',
  style: mapStyle,
  center: [-72.288512, 43.705318],
  zoom: mapZoom
});

const novackMap = new mapboxgl.Map({
  container: 'novackMap',
  style: mapStyle,
  center: [-72.288585, 43.705778],
  zoom: mapZoom
});
