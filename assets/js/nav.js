/*
const burger = document.getElementById("sidebarToggle");
const navMobile = document.getElementById("mobileSidebar");
const page = document.getElementById("page");
const addcart = document.getElementById("addcart");
const closeAddcart = document.getElementById("closeAddcart");
const searchBtn = document.getElementById("searchBtn");
const searchForm = document.getElementById("searchForm");
const searchFormClose = document.getElementById("searchFormClose");
const body = document.body;


burger.addEventListener('click', event => {
    if (body.classList.contains('show-sidebar')) {
        closeSidebar();
    } else {
        showSidebar();
    }
});

searchBtn.addEventListener('click', event => {
    searchForm.classList.add('block');
});

searchFormClose.addEventListener('click', event => {
    searchForm.classList.remove('block');
});

document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        searchForm.classList.remove('block');
    }
});

function showSidebar() {
    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);
    body.classList.add('show-sidebar');
}

function closeSidebar() {
    body.classList.remove('show-sidebar');
    document.querySelector('.page__mask').remove();
}


addcart.addEventListener('click', event => {
    if (body.classList.contains('show-sidebar-cart')) {
        closeSidebarCart();
    } else {
        showSidebarCart();
    }

});

closeAddcart.addEventListener('click', event => {
    if (body.classList.contains('show-sidebar-cart')) {
        closeSidebarCart();
    } else {
        showSidebarCart();
    }
});


function showSidebarCart() {
    let mask = document.createElement('div');
    body.classList.add('show-sidebar-cart');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebarCart);
    page.appendChild(mask);
}

function closeSidebarCart() {
    body.classList.remove('show-sidebar-cart');
    document.querySelector('.page__mask').remove();
}
*/

/*$(function () {*/

var preloader = $('.preloader');

$(window).on('load', function () {
    preloader.delay(200).fadeOut(500);
});

var smoothScroll = $('[data-scroll]');

var navToggle = $("#navToggle");
var headerMenu = $("#headerMenu");

navToggle.on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    headerMenu.toggleClass("show");
});

/*Up Arrow*/

var btnTop = $(".up__arrow");

$(window).on('scroll load', function () {

    if ($(this).scrollTop() >= 50) {
        btnTop.fadeIn();
    } else {
        btnTop.fadeOut();
    }
});


/*Smooth Scroll*/

smoothScroll.on("click", function (event) {
    event.preventDefault();
    var target = $(this).attr('data-scroll');
    var top = $(target).offset().top;

    $('html, body').animate({
        scrollTop: top
    }, 1000);
    navToggle.removeClass("active");
    headerMenu.removeClass("show");
});


/*Modal*/

var modalRequest = $('#modalRequest'),
    modalCall = $('#modalCall'),
    modalPolicy = $('#modalPolicy'),
    modalVideo = $('#modalVideo'),
    overlay = $('.overlay'),
    overlayVideo = $('.overlay__video'),
    linkmodalRequest = $('[data-modal="request"]'),
    linkmodalCall = $('[data-modal="call"]'),
    linkmodalPolicy = $('[data-modal="policy"]'),
    linkmodalVideo = $('[data-modal="video"]'),
    modalClose = $('.modal__close');


linkmodalRequest.on('click', function () {
    event.preventDefault();

    overlay.show();
    modalRequest.addClass("modal__active");
});

modalClose.click(function () {
    event.preventDefault();
    modalRequest.removeClass("modal__active");
    overlay.hide();
});

overlay.click(function () {
    modalRequest.removeClass("modal__active");
    overlay.hide();
});



linkmodalCall.on('click', function () {
    event.preventDefault();

    overlay.show();
    modalCall.addClass("modal__active");
});

modalClose.click(function () {
    event.preventDefault();
    modalCall.removeClass("modal__active");
    overlay.hide();
});

overlay.click(function () {
    modalCall.removeClass("modal__active");
    overlay.hide();
});




linkmodalPolicy.on('click', function () {
    event.preventDefault();

    overlay.show();
    modalPolicy.addClass("modal__active");
});

modalClose.click(function () {
    event.preventDefault();
    modalPolicy.removeClass("modal__active");
    overlay.hide();
});

overlay.click(function () {
    modalPolicy.removeClass("modal__active");
    overlay.hide();
});




linkmodalVideo.on('click', function () {
    event.preventDefault();

    overlayVideo.show();
    modalVideo.addClass("modal__active");
});

modalClose.click(function () {
    event.preventDefault();
    modalVideo.removeClass("modal__active");
    overlayVideo.hide();
});

overlayVideo.click(function () {
    modalVideo.removeClass("modal__active");
    overlayVideo.hide();
});