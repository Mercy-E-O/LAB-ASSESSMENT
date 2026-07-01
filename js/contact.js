function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    var formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || phone === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'All fields are required!';
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address!';
        return;
    }

    var phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Phone number must contain only digits!';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Message sent successfully!';
    document.getElementById('contactForm').reset();
}
