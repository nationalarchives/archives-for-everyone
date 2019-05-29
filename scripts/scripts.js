const toggle_class_on_intersection = (entries, element, className) => {
    if (entries[0].isIntersecting) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
};

const createObserver = (element, className) => {

    const observer = new IntersectionObserver(iObserver => {
        toggle_class_on_intersection(iObserver, element, className)
    }, {root: null, rootMargin: "0px",});

    observer.observe(element);
};


window.addEventListener("load", function (event) {

    const animations = [
        // { selector: '.map-container .lead', className: 'slide-from-left' },
        // { selector: '.part-two h2', className: 'fade-in' },
        // { selector: '.part-two h2', className: 'fade-in' },
        // { selector: '.part-four h2', className: 'fade-in' },
        // { selector: '.part-five h2', className: 'fade-in' },
        // { selector: '.we-must-be ul li:nth-child(1)', className: 'slide-from-left' },
        // { selector: '.we-must-be ul li:nth-child(2)', className: 'slide-from-right' },
        // { selector: '.we-must-be ul li:nth-child(3)', className: 'slide-from-left' },
        // { selector: '#inclusive-archive h3', className: 'fade-in' },
        // { selector: '#inclusive-archive p', className: 'slide-from-right' },
        // { selector: '#entrepreneurial-archive h3', className: 'fade-in' },
        // { selector: '#entrepreneurial-archive p', className: 'slide-from-right' },
        // { selector: '#disruptive-archive h3', className: 'fade-in' },
        // { selector: '#disruptive-archive p', className: 'slide-from-left' },
        // { selector: '.part-five p:nth-child(1)', className: 'slide-from-right'},
        // { selector: '.part-five p:nth-child(2)', className: 'slide-from-left'},
        // { selector: '.part-five p:nth-child(3)', className: 'fade-in'}
    ];

    animations.forEach(function (item) {
        const entrepreneurial_archive_p = document.querySelector(item.selector);
        createObserver(entrepreneurial_archive_p, item.className);
    });


}, false);
