document.addEventListener('DOMContentLoaded', () => {
    const inputBarErrorLabelDesktop = document.querySelector('.inputBarErrorLabelDesktop');
    const inputBarErrorLabelMobile = document.querySelector('.inputBarErrorLabelMobile');
    const inputBarContentInput = document.querySelector('.inputBarContentInput');
    const inputBarContentButton = document.querySelector('.inputBarContentButton');
    const footerSocialBarIconFacebook = document.querySelector('.footerSocialBarIconFacebook');
    const footerSocialBarIconTwitter = document.querySelector('.footerSocialBarIconTwitter');
    const footerSocialBarIconInstagram = document.querySelector('.footerSocialBarIconInstagram');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const messageEmpty = "Whoops! It looks like you forgot to add your email";
    const messageInvalid = "Please provide a valid email address";

    inputBarContentButton.addEventListener('click',validate);
    inputBarContentButton.addEventListener('keydown', function(event) {
        if(event.key === 'Enter' || event.key === ' '){
            validate.call(this);
        }
    });

    footerSocialBarIconFacebook.addEventListener('click',openFacebook);
    footerSocialBarIconFacebook.addEventListener('keydown', function(event) {
        if(event.key === 'Enter' || event.key === ' '){
            openFacebook.call(this);
        }
    });

    footerSocialBarIconTwitter.addEventListener('click',openTwitter);
    footerSocialBarIconTwitter.addEventListener('keydown', function(event) {
        if(event.key === 'Enter' || event.key === ' '){
            openTwitter.call(this);
        }
    });

    footerSocialBarIconInstagram.addEventListener('click',openInstagram);
    footerSocialBarIconInstagram.addEventListener('keydown', function(event) {
        if(event.key === 'Enter' || event.key === ' '){
            openInstagram.call(this);
        }
    });

    function validate() {
        if (!inputBarContentInput.value) {
            inputBarErrorLabelDesktop.textContent = messageEmpty;
            inputBarErrorLabelMobile.textContent = messageEmpty;
            addError();
            this.blur();
            return;
        }

        if (isValidEmail(inputBarContentInput.value)) {
            removeError();
        } else {
            inputBarErrorLabelDesktop.textContent = messageInvalid;
            inputBarErrorLabelMobile.textContent = messageInvalid;
            addError();
        }

        this.blur();
    }

    function addError() {
        inputBarErrorLabelDesktop.classList.add('error');
        inputBarErrorLabelMobile.classList.add('error');
        inputBarContentInput.classList.add('error');
    }

    function removeError() {
        inputBarErrorLabelDesktop.classList.remove('error');
        inputBarErrorLabelMobile.classList.remove('error');
        inputBarContentInput.classList.remove('error');
    }

    function isValidEmail(email) {
        return emailRegex.test(email);
    }

    function openFacebook() {
        window.open('https://www.facebook.com', '_blank');
        this.blur();
    }

    function openTwitter() {
        window.open('https://www.twitter.com', '_blank');
        this.blur();
    }

    function openInstagram() {
        window.open('https://www.instagram.com', '_blank');
        this.blur();
    }
});