// // Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

initMap();


// Initialize and display the map
function initMap() {
    // Specify the coordinates for the map center
    var myLatLng = { lat: 37.7749, lng: -122.4194 };
  
    // Create a map object and specify the element to display it
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12
    });
  
    // Add a marker to the map
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'San Francisco'
    });
  }