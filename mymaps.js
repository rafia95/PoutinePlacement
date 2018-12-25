var service;
var infowindow;
var marker,mtl,map;

function callPlaces(){
				initMap('3 amigos downtown');
				initMap('centrale bergham lasalle');
				initMap('Cacao 70 atwater');
				initMap('boston pizza lasalle');
				initMap('drive in lasalle');
}
			
function initMap(placeName) {
			var request = { query: placeName, fields: ['place_id', 'photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],};	   
		    infowindow = new google.maps.InfoWindow(); 
			 mtl = {lat: 45.5016889, lng: -73.567256};
			 map = new google.maps.Map(document.getElementById('map'), {zoom: 11.80, center: mtl});
			service = new google.maps.places.PlacesService(map);
			service.findPlaceFromQuery(request, callback);
}
function callback(results, status){
			var place;
			if (status == google.maps.places.PlacesServiceStatus.OK) {
							var infoHold = document.createElement('div');
							infoHold.setAttribute("class", "infoHold");
							document.body.appendChild(infoHold);	
						    place = results[0];
						//	alert(place.geometry.location);
						    marker= new google.maps.Marker({position: place.geometry.location , map: map});	
							google.maps.event.addListener(marker,'click', function(){  
							alert(place.name);
							});
							placeId= place.place_id;
							//create a div dynamically
							
							var card = document.createElement('div');
							card.setAttribute("class", "card text-white bg-info mb-3");
							card.setAttribute("style", "max-width: 17rem;");
							var placeImage = document.createElement('img');
							placeImage.setAttribute("class", "card-img-top");
							placeImage.setAttribute("style", "height: 18rem;");
							placeImage.src = "images/"+place.name+".jpg";
							var placeTitle = document.createElement('h5');
							placeTitle.setAttribute("class", "card-title");
							placeTitle.innerHTML =  place.name;
							card.appendChild(placeImage);
							card.appendChild(placeTitle);
							infoHold.appendChild(card);			

				
				}
	

			}

