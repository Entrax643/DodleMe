<!DOCTYPE html>
<html>
    <head>
        <title>Place Autocomplete</title>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
        <meta charset="utf-8">
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?&callback=initMap?&libraries=places"
    async defer></script>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }

        #map {
            height: 100%;
        }

        .controls {
            margin-top: 10px;
            border: 1px solid transparent;
            border-radius: 2px 0 0 2px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            height: 32px;
            outline: none;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        #pac-input {
            background-color: #fff;
            font-family: Roboto;
            font-size: 15px;
            font-weight: 300;
            margin-left: 12px;
            padding: 0 11px 0 13px;
            text-overflow: ellipsis;
            width: 300px;
        }

        #pac-input:focus {
            border-color: #4d90fe;
        }

        .pac-container {
            font-family: Roboto;
        }


    </style>
</head>
<body>
    <input id="pac-input" class="controls" type="text"
           placeholder="Entrez une position">
    <div id="map"></div>
    <script>
        function initMap() {
            // Instanciation de la carte                
            var map = new google.maps.Map(document.getElementById('map'), {
                // Coordonnées du point initial (Mairie de Toulouse ici)
                center: new google.maps.LatLng(43.604468, 1.444208),
                zoom: 13,
                scrollwheel: true,
                overviewMapControl: true,
                overviewMapControlOptions: {opened: true},
                panControl: true,
                zoomControl: true
            });

            // Récupération du champ texte permettant la recherche
            var input = /** @type {!HTMLInputElement} */(
                    document.getElementById('pac-input'));

            //Permet de placer le champ texte dans un coin de la carte et non au dessus.
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            //Instanciation de l'autocompletion
            var autocomplete = new google.maps.places.Autocomplete(input);
            // Liaison à la carte
            autocomplete.bindTo('bounds', map);

            //Instanciation de l'infobulle qui permettra d'afficher l'adresse et le nom de l'adresse.
            var infowindow = new google.maps.InfoWindow();

            //Instanciation du marqueur
            var marker = new google.maps.Marker({
                map: map
            });

            autocomplete.addListener('place_changed', function () {
                infowindow.close();
                marker.setVisible(false);
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    return;
                }

                // Si l'adresse à une vue(viewport) déjà déterminer alors l'afficher sur la carte 
                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    // Sinon centrer la carte sur l'adresse
                    map.setCenter(place.geometry.location);
                    map.setZoom(17);  // Why 17? Because it looks good.
                }
                //Paramétrage de l'icone du marqueur
                marker.setIcon(// @type {google.maps.Icon}
                        ({
                            size: new google.maps.Size(35, 35),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(35, 35)
                        })
                        );
                marker.setPosition(place.geometry.location);
                marker.setVisible(true);

                /* Code permettant de modifier l'adresse afficher dans l'infobulle
                 var address = '';
                 if (place.address_components) {
                 address = [
                 (place.address_components[0] && place.address_components[0].short_name || ''),
                 (place.address_components[1] && place.address_components[1].short_name || ''),
                 (place.address_components[2] && place.address_components[2].short_name || '')
                 ].join(' ');
                 } */

                // Configuration de l'infobule, affichage du nom de l'adresse et de l'adresse complète
                // place.formatted_address peut-être remplacé par address afin de personnnaliser l'affichage
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address);
                infowindow.open(map, marker);
            });
        }

    </script>
    <script src="https://maps.googleapis.com/maps/api/js?&libraries=places&callback=initMap"
    async defer></script>
</body>
</html>