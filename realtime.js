// Function to update the display with data
function updateDisplay(data) {
    const displayElement = document.getElementById('displayElement');
    
    // Extract and format the flight number and destination airport from the data
    const flightNumber = data.flightNumber;
    const destinationAirport = data.destination_airport;

    // Create a string to display on the page
    console.log(data)
    const displayText = `Flight Number: ${data[0].flightNumber}, Destination Airport: ${data[0].destination.city}`;

    displayElement.innerText = displayText;
}

// Function to fetch data from the server
function fetchData() {
    $.get("http://localhost:4000/flights?date=2020-01-01&origin=DFW", function(data) {
        updateDisplay(data);
    });
}

// Initial fetch when the page loads
fetchData(); // Fetch and display data when the page loads

// Periodically fetch and update data (every 5 minutes in this example)
setInterval(fetchData, 1000 * 60 * 5);
