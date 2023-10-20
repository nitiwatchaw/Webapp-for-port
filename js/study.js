const btnOpen = document.querySelector('.menuOpen')
const btnClose = document.querySelector('.menuClose')
const rightSide = document.querySelector('.right-side')
//open-close Profile setting
function toOpen() {
    btnOpen.classList.toggle("hide")
    btnClose.classList.toggle("hide")
    rightSide.classList.remove('none')
    setTimeout(function () {
        rightSide.classList.toggle('transform')

    }, 10)
    btnClosemenu.classList.toggle('cannotClick')
    document.onclick = function (e) {
        if (!rightSide.contains(e.target) && !btnOpen.contains(e.target) && !btnClose.contains(e.target)) {
            modalSidebar.classList.remove("show")
            btnOpen.classList.remove("hide")
            btnClose.classList.add("hide")

            rightSide.classList.toggle('transform')
            setTimeout(function () {
                rightSide.classList.add('none')
                rightSide.classList.remove('transform')
            }, 50)
            btnClosemenu.classList.remove('cannotClick')



            //turn to mini bar
            for (let i = 0; i < titlesidebarmini.length; i++) {
                titlesidebarmini[i].classList.remove('show');
            }
            e.preventDefault();

            btnOpen.classList.remove('cannotClick')
            btnMini.classList.remove('btn-mini-Left')
            menuMini.classList.remove('menu-cover-mini-width-extend')
            for (let i = 0; i < btnSubmenuMini.length; i++) {
                btnSubmenuMini[i].classList.remove('show');
            }

            for (let i = 0; i < textMenuMini.length; i++) {
                textMenuMini[i].classList.remove('text-side-mini-show');
            }
            for (let i = 0; i < iconMenuMini.length; i++) {
                iconMenuMini[i].classList.remove('side-menu-list-space-between');
            }
            contentSection.classList.remove('content-all-section-movement')
            linkToOpenMini.classList.toggle('border-bottom-0')
            btnSideOpen.classList.remove("hide")
            btnSideClose.classList.add("hide")
            modalSidebar.classList.remove("show")

        }

    }

}


//btn-close menu-sidebar
function CloseMenuSide() {

    btnOpen.classList.remove('cannotClick')
    document.querySelector('.menu-cover').style.left = "-600px";
    setTimeout(function () {
        document.querySelector('.menu-cover').style.display = "none";
    }, 300)


}

//open menu-sidebar
const body = document.querySelector('body')
const menuCover = document.querySelector('.menu-cover')
const btnClosemenu = document.querySelector('.btn-menu')
const switchColor = document.querySelector('.switchColorMobile')


const btnMenuClose = document.querySelectorAll('.btn-submenu-close')
const btnMenuOpen = document.querySelectorAll('.btn-submenu-open')
function OpenMenuSide() {
    btnOpen.classList.toggle('cannotClick')

    setTimeout(function () {
        document.querySelector('.menu-cover').style.left = "0px";
    }, 0)
    document.querySelector('.menu-cover').style.display = "block";


    document.onclick = function (e) {
        if (!menuCover.contains(e.target) && !btnClosemenu.contains(e.target)) {

            document.querySelector('.menu-cover').style.left = "-600px";

            setTimeout(function () {
                document.querySelector('.menu-cover').style.display = "none";
            }, 300)

            btnOpen.classList.remove('cannotClick')
        }



    }
}


//open sub-menu
const linkToOpen = document.querySelector('.link-open-submenu')
const submenu = document.querySelector('.sub-menu')
const OpensubMenu = document.querySelector('.multiple')
const btnMenuSideMobile = document.querySelector('.btn-menu-side-mobile')
function openSubmenu() {
    document.onclick = function (e) {
        if (linkToOpen.contains(e.target)) { //click inside
            e.preventDefault(); // protect scroll up after click
            submenu.classList.remove("hide")

            for (let i = 0; i < btnMenuClose.length; i++) {
                btnMenuClose[i].classList.toggle("hide");
            }
            for (let i = 0; i < btnMenuOpen.length; i++) {
                btnMenuOpen[i].classList.toggle("hide");
            }


        }


        else if (!OpensubMenu.contains(e.target) && !menuCover.contains(e.target)) {
            document.querySelector('.menu-cover').style.left = "-600px";
            setTimeout(function () {
                document.querySelector('.menu-cover').style.display = "none";
            }, 300)
            btnOpen.classList.remove('cannotClick')

        }


    }

}


//extend sidebar-mini
const btnSideOpen = document.querySelector('.btn-side-open')
const btnSideClose = document.querySelector('.btn-side-close')
const titlesidebarmini = document.querySelectorAll('.cover-title')
const btnMini = document.getElementById('btn-mini')
const btnSubmenuMini = document.querySelectorAll('.btn-submenu-mini')
const iconMenuMini = document.querySelectorAll('.icon-menu-mini')
const textMenuMini = document.querySelectorAll('.text-side-mini')
const menuMini = document.querySelector('.menu-cover-mini')
const contentSection = document.querySelector('.content-all-section')
const myswiper = document.querySelector('.swiper-initialized')
const mediaQuery = window.matchMedia('(min-width: 1599px)')
const modalSidebar = document.querySelector('.modalSidebar')
function OpenMenuSidefromSidemini() {
    // btnOpen.classList.add('cannotClick')
    for (let i = 0; i < titlesidebarmini.length; i++) {
        titlesidebarmini[i].classList.toggle('show');
    }
    btnMini.classList.toggle('btn-mini-Left')
    menuMini.classList.toggle('menu-cover-mini-width-extend')
    modalSidebar.classList.add("show")

    for (let i = 0; i < btnSubmenuMini.length; i++) {
        btnSubmenuMini[i].classList.toggle('show');
    }

    for (let i = 0; i < iconMenuMini.length; i++) {
        iconMenuMini[i].classList.toggle('side-menu-list-space-between');
    }

    for (let i = 0; i < textMenuMini.length; i++) {
        textMenuMini[i].classList.toggle('text-side-mini-show');
    }

    linkToOpenMini.classList.toggle('border-bottom-0')
    contentSection.classList.toggle('content-all-section-movement')


    document.onclick = function clickOutsidemini() {
        function mobilesize(x) {
            if (x.matches) {
                document.onclick = function (e) {
                    if (modalSidebar.contains(e.target)) {
                        for (let i = 0; i < titlesidebarmini.length; i++) {
                            titlesidebarmini[i].classList.remove('show');
                        }
                        e.preventDefault();

                        btnOpen.classList.remove('cannotClick')
                        btnMini.classList.remove('btn-mini-Left')
                        menuMini.classList.remove('menu-cover-mini-width-extend')
                        for (let i = 0; i < btnSubmenuMini.length; i++) {
                            btnSubmenuMini[i].classList.remove('show');
                        }

                        for (let i = 0; i < textMenuMini.length; i++) {
                            textMenuMini[i].classList.remove('text-side-mini-show');
                        }
                        for (let i = 0; i < iconMenuMini.length; i++) {
                            iconMenuMini[i].classList.remove('side-menu-list-space-between');
                        }
                        contentSection.classList.remove('content-all-section-movement')
                        linkToOpenMini.classList.toggle('border-bottom-0')
                        btnSideOpen.classList.remove("hide")
                        btnSideClose.classList.add("hide")
                        modalSidebar.classList.remove("show")
                    }
                    return;
                }
                return;
            }
            else {
                return;
            }
        }

        var x = window.matchMedia("(max-width: 1599px)")
        mobilesize(x) // Call listener function at run time
        x.addListener(mobilesize) // Attach listener function on state changes


    }


}


//open submenu-mini
const btnSideMini = document.querySelector('.btn-menu-side')
const subMenuMini = document.querySelector('.sub-menu-mini')
const OpensubMenuMini = document.querySelector('.multiple-mini')
const linkToOpenMini = document.querySelector('.link-open-submenu-mini')
const switchColorMini = document.querySelector('.switchColorTablet')

function openSubmenuMini() {

    modalSidebar.classList.add("show")
    document.onclick = function (e) {
        if (linkToOpenMini.contains(e.target)) { //click inside
            contentSection.classList.add('content-all-section-movement')
            e.preventDefault(); // protect scroll up after click
            btnMini.classList.add('btn-mini-Left')
            for (let i = 0; i < titlesidebarmini.length; i++) {
                titlesidebarmini[i].classList.add('show');
            }

            for (let i = 0; i < btnSubmenuMini.length; i++) {
                btnSubmenuMini[i].classList.add('show');
            }
            menuMini.classList.add('menu-cover-mini-width-extend')
            for (let i = 0; i < textMenuMini.length; i++) {
                textMenuMini[i].classList.add('text-side-mini-show');
            }
            for (let i = 0; i < iconMenuMini.length; i++) {
                iconMenuMini[i].classList.add('side-menu-list-space-between');
            }

            for (let i = 0; i < btnMenuClose.length; i++) {
                btnMenuClose[i].classList.toggle("hide");
            }

            for (let i = 0; i < btnMenuOpen.length; i++) {
                btnMenuOpen[i].classList.toggle("hide");
            }
            linkToOpenMini.classList.remove('border-bottom-0')

        }

        const mediaQuery = window.matchMedia('(min-width: 1599px)')
        const mediaQueryMobile = window.matchMedia('(max-width: 768px)')
        if (mediaQuery.matches) {

            if (menuMini.classList.contains('menu-cover-mini-width-extend')) {
                modalCreate.style.marginLeft = "11.5%"
                modalDelete.style.marginLeft = "11.5%"
                modalEventContent.style.left = "56%"
                new Swiper('.swiper', {
                    slidesPerView: 4,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {

                        550: {
                            slidesPerView: 5,

                        },
                        650: {
                            slidesPerView: 6,

                        },
                        764: {
                            slidesPerView: 7,

                        },

                        999: {
                            slidesPerView: 9,

                        },
                        1200: {
                            slidesPerView: 9,

                        },
                        1400: {
                            slidesPerView: 10,

                        },
                        1500: {
                            slidesPerView: 11,

                        },
                        1700: {
                            slidesPerView: 12,

                        },
                        1900: {
                            slidesPerView: 13,

                        },

                    }
                });
            }
            else if (mediaQueryMobile.matches) {
                slider()
            }
            else {
                slider()
                modalCreate.style.marginLeft = "95px"
                modalDelete.style.marginLeft = "95px"
                modalEventContent.style.left = "50%"
            }
        }


    }
    function mobilesize(x) {
        if (x.matches) { // If media query matches
            document.onclick = function (e) {
                if (linkToOpenMini.contains(e.target)) { //click inside
                    e.preventDefault(); // protect scroll up after click
                    // btnOpen.classList.add('cannotClick')
                    linkToOpenMini.classList.remove('border-bottom-0')

                    btnMini.classList.add('btn-mini-Left')
                    for (let i = 0; i < titlesidebarmini.length; i++) {
                        titlesidebarmini[i].classList.add('show');
                    }

                    for (let i = 0; i < btnSubmenuMini.length; i++) {
                        btnSubmenuMini[i].classList.add('show');
                    }
                    menuMini.classList.add('menu-cover-mini-width-extend')
                    for (let i = 0; i < textMenuMini.length; i++) {
                        textMenuMini[i].classList.add('text-side-mini-show');
                    }
                    for (let i = 0; i < iconMenuMini.length; i++) {
                        iconMenuMini[i].classList.add('side-menu-list-space-between');
                    }

                    for (let i = 0; i < btnMenuClose.length; i++) {
                        btnMenuClose[i].classList.toggle("hide");
                    }

                    for (let i = 0; i < btnMenuOpen.length; i++) {
                        btnMenuOpen[i].classList.toggle("hide");
                    }


                }

                if (!menuMini.contains(e.target)) {
                    for (let i = 0; i < titlesidebarmini.length; i++) {
                        titlesidebarmini[i].classList.remove('show');
                    }
                    e.preventDefault(); // protect scroll up after click
                    modalSidebar.classList.remove("show")
                    btnMini.classList.remove('btn-mini-Left')
                    btnOpen.classList.remove('cannotClick')
                    menuMini.classList.remove('menu-cover-mini-width-extend')
                    for (let i = 0; i < btnSubmenuMini.length; i++) {
                        btnSubmenuMini[i].classList.remove('show');
                    }

                    for (let i = 0; i < textMenuMini.length; i++) {
                        textMenuMini[i].classList.remove('text-side-mini-show');
                    }
                    for (let i = 0; i < iconMenuMini.length; i++) {
                        iconMenuMini[i].classList.remove('side-menu-list-space-between');
                    }


                }


            }
            return;
        }
        else {
            return;
        }
    }

    var x = window.matchMedia("(max-width: 1599px)")
    mobilesize(x) // Call listener function at run time
    x.addListener(mobilesize) // Attach listener function on state changes




}



//open collape side-right
function openrightSide() {

    const btnSideRightOpen = document.querySelector('.btn-open-right-side')
    const btnSideRightClose = document.querySelector('.btn-close-right-side')
    const rightSideContent = document.getElementById('scrollbar-rightSide')


    rightSideContent.classList.toggle('displayFlex')
    btnSideRightOpen.classList.toggle('hide')
    btnSideRightClose.classList.toggle('hide')
    setTimeout(function () {
        rightSideContent.classList.toggle('reset-transform')
    }, 10)

}

//show calenda
function showMonth() {

    document.querySelector('.calenda-section').classList.add('show')
    document.querySelector('.btn-showMonth').classList.add('active')
    document.querySelector('.btn-showDay').classList.remove('active')
    document.querySelector('.day-section').classList.remove('show')
}
function showDay() {
    document.querySelector('.day-section').classList.add('show')
    document.querySelector('.btn-showMonth').classList.remove('active')
    document.querySelector('.btn-showDay').classList.add('active')
    document.querySelector('.calenda-section').classList.remove('show')
}


//modal event
const modalEvent = document.createElement('div')
const eventPopup = document.querySelector('.event-modal-popup')
const eventTitleDisplay = document.querySelector(".event-title")

function eventShow() {

    modalEvent.classList.add('modal-event');
    modalEvent.classList.add('show');
    document.body.appendChild(modalEvent);
    eventPopup.classList.toggle('show');
    document.body.classList.add('disableScroll');

    Bootcamp()
    Meeting()
    Conference()
    Reporting()
    more()
    Crainl()
}


const eventTitleBootcamp = document.querySelector('.event-title-bootcamp')
eventTitleBootcamp.addEventListener('click', function Bootcamp() {
    eventTitleDisplay.innerHTML = "● Bootcamp"
    eventTitleDisplay.style.color = "#25b003"
    return;
})


const eventTitleMeeting = document.querySelector('.event-title-meeting')
eventTitleMeeting.addEventListener('click', function Meeting() {
    eventTitleDisplay.innerHTML = '● Meeting';
    eventTitleDisplay.style.color = "#3874ff"
    return;
})

const eventTitleConference = document.querySelector('.event-title-conference')
eventTitleConference.addEventListener('click', function Conference() {
    eventTitleDisplay.innerHTML = '● Conference';
    eventTitleDisplay.style.color = "#25b003"
    return;
})
const eventTitleReporting = document.querySelector('.event-title-reporting')
eventTitleReporting.addEventListener('click', function Reporting() {
    eventTitleDisplay.innerHTML = '● Reporting';
    eventTitleDisplay.style.color = "#25b003"
    return;
})
const eventTitleCrainl = document.querySelector('.event-title-crainl')
eventTitleCrainl.addEventListener('click', function Crainl() {
    eventTitleDisplay.innerHTML = `● Crainl's New York Era`;
    eventTitleDisplay.style.color = "#3874ff"
    return;
})

const eventMore = document.querySelector('.event-more')
eventMore.addEventListener('click', function more() {
    eventTitleDisplay.innerHTML = "● Reading <br> ● Swimming";
    eventTitleDisplay.style.color = "#25b003"
    return;
})

//close event popup
function closeEventPopup() {
    eventPopup.classList.remove('show')
    modalEvent.style.display = "none"
    document.body.removeChild(modalEvent);
    document.body.classList.remove('disableScroll')
    eventTitleDisplay.innerHTML = "";
    eventTitleDisplay.style.color = "unset"
    return;
}



function slider() {
    new Swiper('.swiper', {
        slidesPerView: 4,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 499px
            550: {
                slidesPerView: 5,

            },
            650: {
                slidesPerView: 6,

            },
            764: {
                slidesPerView: 7,

            },

            999: {
                slidesPerView: 9,

            },
            1200: {
                slidesPerView: 8,

            },
            1400: {
                slidesPerView: 10,

            },
            1500: {
                slidesPerView: 11,

            },
            1600: {
                slidesPerView: 12,

            },
            1700: {
                slidesPerView: 13,

            },
            1900: {
                slidesPerView: 15,

            },

        }
    });
}
slider() // Call listener function at run time


const modalCreate = document.getElementById('modal-create')
const modalDelete = document.getElementById('modal-delete')
const modalEventContent = document.querySelector('.event-modal-popup-content')

function changeSlide() {
    const mediaQuery = window.matchMedia('(min-width: 1599px)')
    const mediaQueryMobile = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {

        if (menuMini.classList.contains('menu-cover-mini-width-extend')) {
            modalCreate.style.marginLeft = "11.5%"
            modalDelete.style.marginLeft = "11.5%"
            modalEventContent.style.left = "56%"
            new Swiper('.swiper', {
                slidesPerView: 4,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    550: {
                        slidesPerView: 5,

                    },
                    650: {
                        slidesPerView: 6,

                    },
                    764: {
                        slidesPerView: 7,

                    },

                    999: {
                        slidesPerView: 9,

                    },
                    1200: {
                        slidesPerView: 9,

                    },
                    1400: {
                        slidesPerView: 10,

                    },
                    1500: {
                        slidesPerView: 11,

                    },
                    1700: {
                        slidesPerView: 12,

                    },
                    1900: {
                        slidesPerView: 13,

                    },

                }
            });
        }
        else if (mediaQueryMobile.matches) {
            slider()
        }
        else {
            slider()
            modalCreate.style.marginLeft = "95px"
            modalDelete.style.marginLeft = "95px"
            modalEventContent.style.left = "50%"
        }
    }

}



//text minimize
const textMinimize = document.querySelectorAll(".minimize-text")

function changename() {
    if (!nameminimize.matches) { // If media query matches
        for (let i = 0; i < textMinimize.length; i++) {
            textMinimize[i].innerHTML = "+";
        }
        return;
    }
    else {
        for (let i = 0; i < textMinimize.length; i++) {
            textMinimize[i].innerHTML = textMinimize[i].id;
        }
        return;
    }


}

var nameminimize = window.matchMedia("(min-width:500px)")
nameminimize.addListener(changename) // Attach listener function on state changes



const PageDashboard = document.querySelector('.Dashboard-page')
const PageBrowse = document.querySelector('.Browse-Companies')
function GotoPageBrowse() {
    PageBrowse.style.display = "block"
    PageDashboard.style.display = "none"
}
function GotoPageDashboard() {
    PageBrowse.style.display = "none"
    PageDashboard.style.display = "block"
}


const navlinkEls = document.querySelectorAll('.navLink')
const navLinkUser = document.querySelectorAll('.navLink-user')
const navlinkElsSub = document.querySelectorAll('.navLinkSub')
navlinkEls.forEach((navlinkEl) => {

    navlinkEl.addEventListener('click', () => {
        document.querySelector('.active-link-user')?.classList.remove('active-link-user');
        document.querySelector('.active-link')?.classList.remove('active-link');
        navlinkEl.classList.add('active-link');
        subMenuMini.classList.remove('show');
        submenu.classList.remove('show');
        for (let i = 0; i < btnMenuClose.length; i++) {
            btnMenuClose[i].classList.add("hide");
        }

        for (let i = 0; i < btnMenuOpen.length; i++) {
            btnMenuOpen[i].classList.remove("hide");
        }
    });

})


navLinkUser.forEach((navLinkUser) => {
    navLinkUser.addEventListener('click', () => {
        document.querySelector('.active-link')?.classList.remove('active-link');


        navLinkUser.classList.toggle('active-link-user');


        if (navLinkUser.classList.contains('active-link-user')) {

            subMenuMini.classList.add('show');
            submenu.classList.add('show');

        }
        else {
            subMenuMini.classList.remove('show');
            submenu.classList.remove('show');
        }

    });

})


navlinkElsSub.forEach(navlinkElsub => {
    navlinkElsub.addEventListener('click', () => {

        document.querySelector('.active-link-sub')?.classList.remove('active-link-sub');
        navlinkElsub.classList.add('active-link-sub');
    });
})




//store theme item
const colorThemes = document.querySelectorAll('[name="theme"]')
colorThemes.forEach((themeOption) => {

    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id)
    });
});
const storeTheme = function (e) {
    localStorage.setItem("theme", e)
}
const setTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
    // fall back for no support
    document.documentElement.className = theme;
}

document.onload = setTheme();






var initialViewportWidth = window.innerWidth || document.documentElement.clientWidth;

//  mobile viewport initial, any change refresh
if (initialViewportWidth < 768) {
    window.addEventListener('resize', function () {
        newViewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (newViewportWidth > 768) {
            location.reload();
        }
    });
}

// tablet mobile viewport initial, any change refresh
else if (initialViewportWidth > 768 && initialViewportWidth < 992) {
    window.addEventListener('resize', function () {
        newViewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (newViewportWidth < 768 || newViewportWidth > 992) {
            location.reload();
        }
    });
}

// laptop viewport initial, any change refresh
else if (initialViewportWidth > 992 && initialViewportWidth < 1200) {
    window.addEventListener('resize', function () {
        newViewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (newViewportWidth < 992 || newViewportWidth > 1200) {
            location.reload();
        }
    });
}

// desktop viewport initial, any change refresh
else if (initialViewportWidth > 1200) {
    window.addEventListener('resize', function () {
        newViewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (newViewportWidth < 1200) {
            location.reload();
        }
    });
}
