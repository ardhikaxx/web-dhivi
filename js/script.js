document.addEventListener('DOMContentLoaded', function() {
    function handleMenuClick(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href').substring(1);

        var targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    var menuLinks = document.querySelectorAll('.nav-link');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', handleMenuClick);
    });
});