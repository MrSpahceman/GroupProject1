//NOTES for reference: Goolge maps API key: AIzaSyBDvAwRHZIzy1VI4eUADeiPPcC76USV94Q



    // Event listener for a button
    //$("#button-id").on("click", function() {

    	$(document).ready();
    	console.log("I'm ready")

	navigator.geolocation.getCurrentPosition(function(position) {
		  var lat = position.coords.latitude;
		  var long = position.coords.longitude;
		  console.log(lat, long);
		  $("p").append(lat, long);	

      // Storing our google API URL for refence to use
      var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyBDvAwRHZIzy1VI4eUADeiPPcC76USV94Q";

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

      	var results = response.results;
      	console.log(response);

      	for (i = 0; i < results.length; i++) { 
    		if (results[i].address_components[i].types == "administrative_area_level_2");
    		console.log(results[i]);
      	//console.log(response.results[5].address_components[0].long_name);
      };
      });
      });








        // Saving the image_original_url property NOTE this does not work. I got this line from the giphy example from class but need to figure out how to change it for google maps

        //var county = response.data.image_original_url;

        // Creating and storing an paragraph tag to display the county name
        //var countyP = $("<p>");

        // Prepending the countyP to the p 
        //$("#county").prepend(countyP);
      
