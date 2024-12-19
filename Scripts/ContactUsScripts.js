// Initialize EmailJS with your User ID
(function() {
    emailjs.init("PSw6hK0DffZRv0nlB");  // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Show the loader overlay
    document.getElementById("loader").style.visibility = "visible"; // Make loader visible

    // Get the form element
    var formElement = document.getElementById("contactForm");

    // Send the email using EmailJS
    emailjs.sendForm('service_gzdmdnj', 'template_9q7idfm', formElement)
    .then(function(response) {
        console.log('Success:', response);
        // Hide the loader immediately after successful submission
        document.getElementById("loader").style.visibility = "hidden";
        alert('Your message has been sent successfully!');
    })
    .catch(function(error) {
        alert(error);
        console.log('Error:', error);
        // Hide the loader immediately after error
        document.getElementById("loader").style.visibility = "hidden";
        alert('There was an error sending your message. Please try again later.');
    });
});
