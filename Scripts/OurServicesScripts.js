document.addEventListener('DOMContentLoaded', () => {
    // Select the first card and load its details
    const firstCard = document.querySelector('.service-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        const serviceType = firstCard.getAttribute('data-service');
        updateServiceDetails(serviceType); // Load details for the first card

        // Ensure the service details section is visible
        const serviceDetails = document.querySelector('.service-details');
        if (serviceDetails) {
            serviceDetails.style.display = 'block';
        }
    }

    // Get the service type from the URL (if available)
    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get('service');

    // If a service is specified in the URL, find the corresponding card and select it
    if (selectedService) {
        const selectedCard = document.querySelector(`.service-card[data-service="${selectedService}"]`);
        if (selectedCard) {
            document.querySelectorAll('.service-card').forEach(card => card.classList.remove('selected'));
            selectedCard.classList.add('selected');
            updateServiceDetails(selectedService);
        }
    }
});

// Existing service card click functionality
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'selected' class from all cards
        document.querySelectorAll('.service-card').forEach(card => card.classList.remove('selected'));

        // Add 'selected' class to the clicked card
        card.classList.add('selected');

        // Get the service type from the data-service attribute
        const serviceType = card.getAttribute('data-service');

        // Update service details
        updateServiceDetails(serviceType);

        // Display the details section
        document.querySelector('.service-details').style.display = 'block';
    });
});

// Function to update service details
function updateServiceDetails(serviceType) {
    const serviceTitle = document.getElementById('service-title');
    const serviceDescription = document.getElementById('service-description');

    if (serviceType === 'sap') {
        serviceTitle.textContent = 'SAP Consultants';
        serviceDescription.textContent = 'We offer expert solutions for SAP implementations, customizations, and optimizations to help businesses streamline their operations and improve efficiency.';
    } else if (serviceType === 'netsuite') {
        serviceTitle.textContent = 'Netsuite Consultants';
        serviceDescription.textContent = 'Our Netsuite consulting services provide businesses with the expertise needed to implement, customize, and maximize the potential of their ERP and financial management systems.';
    } else if (serviceType === 'ai') {
        serviceTitle.textContent = 'AI & ML Specialists';
        serviceDescription.textContent = 'We provide cutting-edge AI and machine learning solutions designed to help businesses leverage data-driven insights and automate processes to stay ahead of the competition.';
    } else if (serviceType === 'recruitment') {
        serviceTitle.textContent = 'Recruitment Process';
        serviceDescription.textContent = 'Our recruitment process ensures that you find the best talent quickly and efficiently, using a data-driven approach to match candidates with your organization\'s needs.';
    }
}
