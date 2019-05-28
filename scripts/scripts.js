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

    // Animate text over the map
    const map_lead = document.querySelector('.map-container .lead');
    createObserver(map_lead, "slide-from-left");

    // Animate the h2 in .part-two
    const part_two_h2 = document.querySelector('.part-two h2');
    createObserver(part_two_h2, "fade-in");

    // Animate the h2 in .part-four
    const part_four_h2 = document.querySelector('.part-four h2');
    createObserver(part_four_h2, "fade-in");

    // Animate the h2 in .part-four
    const part_five_h2 = document.querySelector('.part-five h2');
    createObserver(part_five_h2, "fade-in");

    // Animate the 'we must be' list items
    const li1 = document.querySelector('.we-must-be ul li:nth-child(1)');
    const li2 = document.querySelector('.we-must-be ul li:nth-child(2)');
    const li3 = document.querySelector('.we-must-be ul li:nth-child(3)');
    createObserver(li1, "slide-from-left");
    createObserver(li2, "slide-from-right");
    createObserver(li3, "slide-from-left")

    const inclusive_archive_heading = document.querySelector('#inclusive-archive h3');
    createObserver(inclusive_archive_heading, "fade-in");

    const inclusive_archive_p = document.querySelector('#inclusive-archive p');
    createObserver(inclusive_archive_p, "slide-from-right");

    const entrepreneurial_archive_heading = document.querySelector('#entrepreneurial-archive h3');
    createObserver(entrepreneurial_archive_heading, "fade-in");

    const entrepreneurial_archive_p = document.querySelector('#entrepreneurial-archive p');
    createObserver(entrepreneurial_archive_p, "slide-from-right");

    const disruptive_archive_heading = document.querySelector('#disruptive-archive h3');
    createObserver(disruptive_archive_heading, "fade-in");

    const disruptive_archive_p = document.querySelector('#disruptive-archive p');
    createObserver(disruptive_archive_p, "slide-from-left");



}, false);
