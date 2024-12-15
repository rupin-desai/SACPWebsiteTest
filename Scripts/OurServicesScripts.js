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
        serviceDescription.textContent = 'At the forefront of digital transformation, we provide cutting-edge SAP solutions tailored to your unique business needs. Our team of seasoned experts specializes in seamless SAP implementations, bespoke customizations, and innovative optimizations designed to enhance operational efficiency and drive sustainable growth. Partner with us to transform your SAP landscape into a powerhouse of productivity and insight. Together, let\'s navigate the complexities of the digital era and propel your organization toward unparalleled success. Experience the difference with our professional services, designed for today\'s global industry leaders.';
    } else if (serviceType === 'netsuite') {
        serviceTitle.textContent = 'Netsuite Consultants';
        serviceDescription.textContent = 'At the forefront of digital transformation, our Netsuite consulting services empower businesses to harness the full capabilities of their ERP and financial management systems. With a dedicated team of seasoned professionals, we deliver tailored solutions that not only implement and customize Netsuite to your unique needs but also optimize its functionality to drive unparalleled growth and efficiency. Embrace innovation and elevate your operations with our cutting-edge strategies, designed to streamline processes and enhance decision-making. Partner with us to transform your financial landscape and propel your business into the future of success. Your journey to maximizing potential starts here!';
    } else if (serviceType === 'ai') {
        serviceTitle.textContent = 'AI & ML Specialists';
        serviceDescription.textContent = 'Unlock the future of your business with our state-of-the-art AI and machine learning solutions. We empower enterprises to harness the power of data-driven insights and streamline operations through innovative automation. Stay ahead of the curve and transform your competitive landscape with our pioneering technologies designed for the global market. Elevate your business strategy and redefine success with our unparalleled expertise in AI and ML.';
    } else if (serviceType === 'recruitment') {
        serviceTitle.textContent = 'Recruitment Process';
        serviceDescription.textContent = 'Experience a transformative recruitment process designed to connect you with top-tier talent swiftly and seamlessly. Leveraging cutting-edge, data-driven methodologies, we expertly align candidates with your organization’s unique requirements. Our innovative approach not only streamlines your hiring journey but also ensures that you attract the best minds in the industry. Embrace the future of talent acquisition with us—where precision meets efficiency in every hire.';
    }
}
