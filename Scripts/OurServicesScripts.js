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
        serviceDescription.textContent = 'At SACP, we empower your organization to harness the full capabilities of SAP with our team of professional consultants. Our highly skilled professionals are embedded in our principle operators. With our embedded approach, we provide streamlined, hassle-free management of resources. Let us help you navigate and excel through the vast and complex world of SAP. ';
    } else if (serviceType === 'netsuite') {
        serviceTitle.textContent = 'Netsuite Consultants';
        serviceDescription.textContent = 'Unlock the full potential of your ERP and financial management systems with our elite NetSuite consulting professionals. With a team that is embedded into your ecosystem. Our embedded nature and strategy is designed to streamline and optimize management of resources. By partnering with us, you gain access to a wealth of knowledge and experience, enabling you to maximize NetSuite’s capabilities and amplify profitability of your esteemed customers.';
    } else if (serviceType === 'ai') {
        serviceTitle.textContent = 'AI & ML Specialists';
        serviceDescription.textContent = 'Unlock the future of your business with our state-of-the-art AI and machine learning solutions. We empower enterprises to harness the power of data-driven insights and streamline operations through innovative automation. Stay ahead of the curve and transform your competitive landscape with our pioneering technologies designed for the global market. Elevate your business strategy and redefine success with our unparalleled expertise in AI and ML.';
    } else if (serviceType === 'recruitment') {
        serviceTitle.textContent = 'Recruitment Process';
        serviceDescription.textContent = 'Experience a transformative recruitment process designed to connect you with top-tier talent swiftly and seamlessly. Leveraging cutting-edge, data-driven methodologies, we expertly align candidates with your organization’s unique requirements. Our innovative approach not only streamlines your hiring journey but also ensures that you attract the best minds in the industry. Embrace the future of talent acquisition with us—where precision meets efficiency in every hire.';
    }
}
