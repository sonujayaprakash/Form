function validateForm() {
    let isValid = true;

    // Clear all error messages
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('commentsError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';

    const fullName = document.getElementById('fullname').value;
    if (fullName.length < 3) {
        document.getElementById('nameError').innerHTML = 'Name must be at least 3 characters long';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = 'Please enter a valid email';
        isValid = false;
    }

    const comments = document.getElementById('comments').value;
    if (comments.length > 200) {
        document.getElementById('commentsError').innerHTML = 'Comments must be 200 characters long';
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerHTML = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }

    return isValid;
}