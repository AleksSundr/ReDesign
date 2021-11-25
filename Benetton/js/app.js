$(function () {


    /* Burger nav */
    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.click(function(event){

        //event.stopPropagation(); not required any more
        nav.show();

        // add one mousedown event to html
        $('html').one('mousedown', function(){
            nav.hide();
        });
    });

    // mousedown must not be triggered inside menu
    nav.bind('mousedown', function(event){
        event.stopPropagation();
    });


    /* Footer dropdown */
    const footertitle = $("#footertitle");
    const footerdrop = $("#footerdrop");
    const footertitle2 = $("#footertitle2");
    const footerdrop2 = $("#footerdrop2");
    const footertitle3 = $("#footertitle3");
    const footerdrop3 = $("#footerdrop3");
    const footertitle4 = $("#footertitle4");
    const footerdrop4 = $("#footerdrop4");


    footertitle.click(function(e){
        footerdrop.toggleClass("show");
        footertitle.toggleClass("active");
        e.stopPropagation();
    });

    $(document).click(function(){
        footerdrop.removeClass("show");
        footertitle.removeClass("active");
    });


    footertitle2.click(function(e){
        footerdrop2.toggleClass("show");
        footertitle2.toggleClass("active");
        e.stopPropagation();
    });

    $(document).click(function(){
        footerdrop2.removeClass("show");
        footertitle2.removeClass("active");
    });


    footertitle3.click(function(e){
        footerdrop3.toggleClass("show");
        footertitle3.toggleClass("active");
        e.stopPropagation();
    });

    $(document).click(function(){
        footerdrop3.removeClass("show");
        footertitle3.removeClass("active");
    });


    footertitle4.click(function(e){
        footerdrop4.toggleClass("show");
        footertitle4.toggleClass("active");
        e.stopPropagation();
    });

    $(document).click(function(){
        footerdrop4.removeClass("show");
        footertitle4.removeClass("active");
    });


    /* Slider Intro
    https://kenwheeler.github.io/slick/  */

    $("#introSlider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        $('#introSlider').slick("slickPrev");
        $('#introSlider').slick('slickPlay');
    });

    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        $('#introSlider').slick("slickNext");
        $('#introSlider').slick('slickPlay');
    });


    /* Slider Mobile Collections*/
    $("#introSlider_mobile").slick({
        mobileFirst: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 598,
                settings: {
                    slidesToShow: 2,
                    dots: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    dots: false
                }
            }
        ]
    });


    /* Animations
    https://michalsnik.github.io/aos/
    https://github.com/michalsnik/aos#animations */
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "scroll", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });


});




