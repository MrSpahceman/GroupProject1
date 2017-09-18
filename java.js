//NOTES for reference: Goolge maps API key: AIzaSyBdFTld35JjmFfdeo1NWmjQMFgzTmC-GNs



    // Event listener for a button
    //$("#button-id").on("click", function() {

    	$(document).ready();
    	console.log("I'm ready")

      // Storing our google API URL for refence to use
      var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJd8BlQ2BZwokRAFUEcm_qrcA&key=AIzaSyBdFTld35JjmFfdeo1NWmjQMFgzTmC-GNs";

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {
      	console.log(response)

        // Saving the image_original_url property NOTE this does not work. I got this line from the giphy example from class but need to figure out how to change it for google maps

        //var county = response.data.image_original_url;

        // Creating and storing an paragraph tag to display the county name
        //var countyP = $("<p>");

        // Prepending the countyP to the p 
        //$("#county").prepend(countyP);
      });
