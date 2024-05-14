
function getAirQuality() {
    var location = document.getElementById("location").value;
    var url = "https://api.openaq.org/v1/latest?limit=1&location=" + location;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                var airQuality = data.results[0].measurements[0].value;
                document.getElementById("result").innerHTML = "<p>Air Quality Index: " + airQuality + "</p>";
            } else {
                document.getElementById("result").innerHTML = "<p>No air quality data available for this location</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching air quality data:", error);
            document.getElementById("result").innerHTML = "<p>Failed to retrieve air quality data</p>";
        });
}