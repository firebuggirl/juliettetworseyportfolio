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


          // var map;
          //       function initialize() {
          //         map = new google.maps.Map(document.getElementById('map'), {
          //           zoom: 16,
          //           center: new google.maps.LatLng(-33.91722, 151.23064),
          //           mapTypeId: 'roadmap',
          //           styles: [
          //             {
          //               featureType: 'road',
          //               elementType: 'geometry',
          //               stylers: [
          //                 { color: '#000000' },
          //                 { weight: 1.6 }
          //               ]
          //             }, {
          //               featureType: 'road',
          //               elementType: 'labels',
          //               stylers: [
          //                 { saturation: -100 },
          //                 { invert_lightness: true }
          //               ]
          //             }, {
          //               featureType: 'landscape',
          //               elementType: 'geometry',
          //               stylers: [
          //                 { hue: '#B50C0C' },
          //                 { gamma: 1.4 },
          //                 { saturation: 82 },
          //                 { lightness: 96 }
          //               ]
          //             }, {
          //               featureType: 'poi.school',
          //               elementType: 'geometry',
          //               stylers: [
          //                 { hue: '#B50C0C' },
          //                 { lightness: -15 },
          //                 { saturation: 99 }
          //               ]
          //             }, {
          //               featureType: 'poi',
          //               elementType: 'geometry',
          //               stylers: [
          //                 { visibility: 'off' }
          //               ]
          //             }, {
          //               featureType: 'poi.school',
          //               elementType: 'geometry',
          //               stylers: [
          //                 { visibility: 'on' },
          //                 { hue: '#B50C0C' },
          //                 { lightness: -15 },
          //                 { saturation: 99 }
          //               ]
          //             }
          //           ]
          //         });
          //       }


            //  var map;
            //       function initMap() {
            //         map = new google.maps.Map(document.getElementById('map'), {
            //           center: {lat: -33.86, lng: 151.209},
            //           zoom: 13,
            //           mapTypeControl: false
            //         });
             //
            //         // Add controls to the map, allowing users to hide/show features.
            //         var styleControl = document.getElementById('style-selector-control');
            //         map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
             //
            //         // Apply new JSON when the user chooses to hide/show features.
            //         document.getElementById('hide-poi').addEventListener('click', function() {
            //           map.setOptions({styles: styles['hide']});
            //         });
            //         document.getElementById('show-poi').addEventListener('click', function() {
            //           map.setOptions({styles: styles['default']});
            //         });
            //       }
             //
            //       var styles = {
            //         default: null,
            //         hide: [
            //           {
            //             featureType: 'poi.business',
            //             stylers: [{visibility: 'off'}]
            //           },
            //           {
            //             featureType: 'transit',
            //             elementType: 'labels.icon',
            //             stylers: [{visibility: 'off'}]
            //           }
            //         ]
            //       };
