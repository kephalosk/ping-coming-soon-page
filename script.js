document.addEventListener('DOMContentLoaded', () => {
    const inputBarErrorLabelDesktop = document.querySelector('.inputBarErrorLabelDesktop');
    const inputBarErrorLabelMobile = document.querySelector('.inputBarErrorLabelMobile');
    const inputBarContentInput = document.querySelector('.inputBarContentInput');
    const inputBarContentButton = document.querySelector('.inputBarContentButton');
    const footerSocialBarIconFacebook = document.querySelector('.footerSocialBarIconFacebook');
    const footerSocialBarIconTwitter = document.querySelector('.footerSocialBarIconTwitter');
    const footerSocialBarIconInstagram = document.querySelector('.footerSocialBarIconInstagram');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
        if (isValidEmail(inputBarContentInput.value)) {
            inputBarErrorLabelDesktop.classList.remove('error');
            inputBarErrorLabelMobile.classList.remove('error');
            inputBarContentInput.classList.remove('error');
        } else {
            inputBarErrorLabelDesktop.classList.add('error');
            inputBarErrorLabelMobile.classList.add('error');
            inputBarContentInput.classList.add('error');
        }
        this.blur();
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