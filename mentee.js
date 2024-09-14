// Function for Back Button
function goBack() {
    window.history.back();
}

// Get all dropdown buttons
var dropdowns = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Get all mentee links and display their info
var menteeLinks = document.getElementsByClassName("mentee-link");
var menteeInfoDiv = document.getElementById("mentee-info");

for (var j = 0; j < menteeLinks.length; j++) {
    menteeLinks[j].addEventListener("click", function(event) {
        event.preventDefault();

        // Get mentee data from the clicked link
        var menteeName = this.getAttribute("data-mentee");
        var menteeCourse = this.getAttribute("data-course");
        var menteeRating = this.getAttribute("data-rating");

        // Display the mentee's information
        menteeInfoDiv.innerHTML = `
            <h3>Mentee Information</h3>
            <p><strong>Name:</strong> ${menteeName}</p>
            <p><strong>Course Enrolled:</strong> ${menteeCourse}</p>
            <p><strong>Ratings Given to Mentor:</strong> ${menteeRating} / 5</p>
        `;
    });
}
