const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const notifiable = document.querySelector(".notifiable");
const contactForm = document.querySelector('#contact');

contactForm.addEventListener('submit', (e) => {
    
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        notifiable.classList.add('active')
    } else {
        contactForm.submit();
    }

});

