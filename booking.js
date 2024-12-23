// Get the form element
const userData = localStorage.getItem("user");
        user = JSON.parse(userData); 
const form = document.querySelector('.booking-form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    
    // Get the values of the inputs
    const checkInDate = document.getElementById('check-in').value;
    const checkOutDate = document.getElementById('check-out').value;
    const roomType = document.getElementById('room-type').value;
    const numberOfGuests = document.getElementById('guests').value;

    // Log the values to the console
    const bookingData = {
        userId: user.id, // Assuming this is the logged-in user ID, modify accordingly
        roomType,
        checkInDate,
        checkOutDate,
        numberOfGuests
    };

    fetch("/roomBooking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Handle the success or error messages here
        if (data.message) {
            alert(data.message); 
            window.location.href = "/payment";
        }
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
        alert("An error occurred while booking the room. Please try again.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const userData = localStorage.getItem("user");

    if (!userData) {
        setTimeout(() => {
            document.getElementById("background-light").style.display = "flex";
        }, 5000);
    }

    document.getElementById("doneButton").addEventListener("click", () => {
        window.location.href = "/login";
    });
});
    const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
});
