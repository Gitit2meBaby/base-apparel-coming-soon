document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const emailBtn = document.getElementById('emailBtn');
    const error = document.querySelector('.error')
    const exclamation = document.getElementById('exclamation')

    function validateEmail(email) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }

    function clearError() {
        input.classList.remove('invalid');
        error.classList.add('hidden');
        exclamation.classList.add('hidden')
    }

    input.addEventListener('focus', clearError);

    emailBtn.addEventListener('click', function () {
        const email = input.value;

        if (validateEmail(email)) {
            // Valid email address
            input.classList.remove('invalid');
            console.log("valid")
        } else {
            // Invalid email address
            input.classList.add('invalid');
            error.classList.remove('hidden')
            exclamation.classList.remove('hidden')
            console.log("invalid")
        }
    });
});