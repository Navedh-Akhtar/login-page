function validateForm() {
    let isValid = true;

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate name
    if (!name) {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    if (!email) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (!password) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // If all fields are valid
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
    }
}
