//https://developers.google.com/maps/documentation/javascript/streetview
//heading (default 0) defines the rotation angle around the camera locus in degrees relative from true north. Headings are measured clockwise (90 degrees is true east).
//pitch (default 0) defines the angle variance "up" or "down" from the camera's initial default pitch, which is often (but not always) flat horizontal.


           function initialize() {

             var nola = {lat: 29.9579921, lng: -90.0659233};
             var map = new google.maps.Map(document.getElementById('map'), {
                center: nola,
                zoom: 14
              });
               var panorama = new google.maps.StreetViewPanorama(
                  document.getElementById('pano'), {
                    position: nola,
                    pov: {
                      heading: 10, pitch: -10
                    } });
                     map.setStreetView(panorama);
                     }


          
