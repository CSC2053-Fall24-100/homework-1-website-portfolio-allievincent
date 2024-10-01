// Function to load the navbar dynamically
function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="hobbies.html">Hobbies</a></li>
                <li><a href="schedule.html">Schedule</a></li>
            </ul>
        </nav>
    `;
}

// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target); // Get the form data

    // Create an object to store the schedule entry
    const scheduleEntry = {};
    formData.forEach((value, key) => {
        scheduleEntry[key] = value; // Add each form field to the object
    });

    // Log the schedule entry to the console (you can replace this with your own logic)
    console.log('New Schedule Entry:', scheduleEntry);

    // Optionally, you can clear the form fields after submission
    event.target.reset();
}

// Add an event listener for the form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('schedule-form'); // Assume the form has this ID
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Handle the toggle functionality for hiding/showing the schedule
    const toggleButton = document.getElementById('toggle-schedule');
    const scheduleContainer = document.getElementById('schedule-container');

    if (toggleButton && scheduleContainer) {
        toggleButton.addEventListener('click', () => {
            if (scheduleContainer.style.display === 'none') {
                scheduleContainer.style.display = 'block';
                toggleButton.textContent = 'Hide Schedule';
            } else {
                scheduleContainer.style.display = 'none';
                toggleButton.textContent = 'Show Schedule';
            }
        });
    }
});
