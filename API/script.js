function iniciarMap(){
    //declaramos las coordenadas de la longitud y latitud y el mapa para que aparezca en pantalla en google maps
    var coord = {lat:-33.38654335630157 ,lng: -70.55324799014213};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}