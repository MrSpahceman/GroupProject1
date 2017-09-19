//NOTES for reference: Goolge maps API key: AIzaSyBDvAwRHZIzy1VI4eUADeiPPcC76USV94Q



    // Event listener for a button
    //$("#button-id").on("click", function() {

    	$(document).ready();
    	console.log("I'm ready")

    	var county;

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
      	//console.log(response);

      	for (i = 0; i < results.length; i++) { 
    		if ((results[i].types.indexOf("administrative_area_level_2")) !== -1){

    		console.log(results[i].types);
    		county = (results[i].address_components[0].long_name);
    		//console.log(county);
    		console.log("Ready");
        county = county.replace(/\sCounty/g, "");
        county = county.replace(/\s/g, "-");
        county = county.toLowerCase();
    		var queryURL = "https://cors.io/?http://api.spitcast.com/api/county/spots/" +county
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            response = JSON.parse(response);

            console.log(response[0].spot_name);
        });
      	}
      	};
      });
      console.log(county);
   
    });

//console.log(response.results[5].address_components[0].long_name);

      	//var county = {
      		//(response.results[5].address_components[0].long_name);
      	//}








        // Saving the image_original_url property NOTE this does not work. I got this line from the giphy example from class but need to figure out how to change it for google maps

        //var county = response.data.image_original_url;

        // Creating and storing an paragraph tag to display the county name
        //var countyP = $("<p>");

        // Prepending the countyP to the p 
        //$("#county").prepend(countyP);
      
