function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (email.trim() === '' || password.trim() === '') {
        errorMessage.textContent = 'Both fields are required.';
        return false;
    }

    if (email.length < 3 || email.length > 25) {
        errorMessage.textContent = 'Username must be between 3 and 25 characters.';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'password must be atleast 6 charcters.';
        return false;
    }
    alert('Form submitted sucessfully');
    return true;
}