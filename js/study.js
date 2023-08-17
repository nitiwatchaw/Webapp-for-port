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

            btnOpen.classList.remove("hide")
            btnClose.classList.add("hide")

            rightSide.classList.toggle('transform')
            setTimeout(function () {
                rightSide.classList.add('none')
                rightSide.classList.remove('transform')
            }, 50)
            btnClosemenu.classList.remove('cannotClick')
        }

    }

}


//btn-close menu-sidebar
function CloseMenuSide() {
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
        else if (!OpensubMenu.contains(e.target) && menuCover.contains(e.target) && !switchColor.contains(e.target)) {
            submenu.classList.add("hide"); //click outside
            submenu.classList.remove("show")
            linkToOpen.style.backgroundColor = "unset"
            OpensubMenu.style.backgroundColor = "unset";


            for (let i = 0; i < btnMenuOpen.length; i++) {
                btnMenuOpen[i].classList.remove("hide");
            }

            for (let i = 0; i < btnMenuClose.length; i++) {
                btnMenuClose[i].classList.add("hide");
            }


        }


    }
}


//open sub-menu
const linkToOpen = document.querySelector('.link-open-submenu')
const submenu = document.querySelector('.sub-menu')
const OpensubMenu = document.querySelector('.multiple')

function openSubmenu() {
    document.onclick = function (e) {
        if (linkToOpen.contains(e.target)) { //click inside
            e.preventDefault(); // protect scroll up after click
            submenu.classList.remove("hide")
            submenu.classList.toggle("show")

            linkToOpen.style.backgroundColor = "#012260"
            OpensubMenu.style.backgroundColor = "#022567";

            for (let i = 0; i < btnMenuClose.length; i++) {
                btnMenuClose[i].classList.toggle("hide");
            }
            for (let i = 0; i < btnMenuOpen.length; i++) {
                btnMenuOpen[i].classList.toggle("hide");
            }


        }

        else if (!OpensubMenu.contains(e.target) && menuCover.contains(e.target) && !switchColor.contains(e.target)) {
            submenu.classList.add("hide"); //click outside
            submenu.classList.remove("show")
            linkToOpen.style.backgroundColor = "unset"
            OpensubMenu.style.backgroundColor = "unset";

            for (let i = 0; i < btnMenuOpen.length; i++) {
                btnMenuOpen[i].classList.remove("hide");
                btnMenuOpen[i].classList.remove("show");
            }

            for (let i = 0; i < btnMenuClose.length; i++) {
                btnMenuClose[i].classList.add("hide");
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

function OpenMenuSidefromSidemini() {

    for (let i = 0; i < titlesidebarmini.length; i++) {
        titlesidebarmini[i].classList.toggle('show');
    }
    btnMini.classList.toggle('btn-mini-Left')
    menuMini.classList.toggle('menu-cover-mini-width-extend')
    contentSection.classList.toggle('content-all-section-movement')
 
    for (let i = 0; i < btnSubmenuMini.length; i++) {
        btnSubmenuMini[i].classList.toggle('show');
    }
    for (let i = 0; i < iconMenuMini.length; i++) {
        iconMenuMini[i].classList.toggle('side-menu-list-space-between');
    }

    for (let i = 0; i < textMenuMini.length; i++) {
        textMenuMini[i].classList.toggle('text-side-mini-show');
    }
    document.onclick = function clickOutsidemini (e){
        if (!menuMini.contains(e.target) && !btnMini.contains(e.target)) {
        
            btnSideOpen.classList.remove("hide")
            btnSideClose.classList.add("hide")
            e.preventDefault(); // protect scroll up after click


            for (let i = 0; i < btnSubmenuMini.length; i++) {
                btnSubmenuMini[i].classList.remove('show');
            }


            btnOpen.classList.remove('cannotClick')
            btnMini.classList.remove('btn-mini-Left')
            for (let i = 0; i < iconMenuMini.length; i++) {
                iconMenuMini[i].classList.remove('side-menu-list-space-between');
            }
            for (let i = 0; i < textMenuMini.length; i++) {
                textMenuMini[i].classList.remove('text-side-mini-show');
            }
            for (let i = 0; i < titlesidebarmini.length; i++) {
                titlesidebarmini[i].classList.remove('show');
            }

            menuMini.classList.remove('menu-cover-mini-width-extend')
        

        }

        else if (menuMini.contains(e.target) && !OpensubMenuMini.contains(e.target) && !btnMini.contains(e.target) && !switchColorMini.contains(e.target)) {
            subMenuMini.classList.remove('show');
            linkToOpenMini.style.backgroundColor = "unset"
            OpensubMenuMini.style.backgroundColor = "unset";


            for (let i = 0; i < btnMenuClose.length; i++) {
                btnMenuClose[i].classList.add("hide");
            }
            for (let i = 0; i < btnMenuOpen.length; i++) {
                btnMenuOpen[i].classList.remove('hide');
            }

        }

        else if (!OpensubMenu.contains(e.target) && menuMini.contains(e.target)) {
            submenu.classList.add("hide"); //click outside
            submenu.classList.remove("show")


        }
        
    }

   
}

//open submenu-mini
const btnSideMini = document.querySelector('.btn-menu-side')
const subMenuMini = document.querySelector('.sub-menu-mini')
const OpensubMenuMini = document.querySelector('.multiple-mini')
const linkToOpenMini = document.querySelector('.link-open-submenu-mini')
const switchColorMini = document.querySelector('.switchColorTablet')

function openSubmenuMini() {

    document.onclick = function (e) {
        if (linkToOpenMini.contains(e.target)) { //click inside
            contentSection.classList.add('content-all-section-movement')
            e.preventDefault(); // protect scroll up after click
            linkToOpenMini.style.backgroundColor = "#012260"
            OpensubMenuMini.style.backgroundColor = "#022567";
            subMenuMini.classList.toggle('show');
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
        if (menuMini.contains(e.target) && !OpensubMenuMini.contains(e.target) && !switchColorMini.contains(e.target)) {
            subMenuMini.classList.remove('show');

            linkToOpenMini.style.backgroundColor = "unset";
            OpensubMenuMini.style.backgroundColor = "unset";

            for (let i = 0; i < btnMenuClose.length; i++) {
                btnMenuClose[i].classList.add("hide");
            }

            for (let i = 0; i < btnMenuOpen.length; i++) {
                btnMenuOpen[i].classList.remove("hide");
            }

        }
    }

    function mobilesize(x) {
        if (x.matches) { // If media query matches
            document.onclick = function (e) {
                if (linkToOpenMini.contains(e.target)) { //click inside
                    e.preventDefault(); // protect scroll up after click
                    btnOpen.classList.add('cannotClick')
                    linkToOpenMini.style.backgroundColor = "#012260"
                    OpensubMenuMini.style.backgroundColor = "#022567";
                    subMenuMini.classList.toggle('show');
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
                if (OpensubMenuMini.contains(e.target) && subMenuMini.contains(e.target) && !switchColorMini.contains(e.target)) { //click inside
                    e.preventDefault(); // protect scroll up after click
                    subMenuMini.classList.add('show');
        
                    btnMini.classList.add('btn-mini-Left')
                    menuMini.classList.add('menu-cover-mini-width-extend')
                    for (let i = 0; i < textMenuMini.length; i++) {
                        textMenuMini[i].classList.add('text-side-mini-show');
                    }
        
                }
                if (!OpensubMenuMini.contains(e.target) && menuMini.contains(e.target) && btnSideMini.contains(e.target) && !switchColorMini.contains(e.target)) {
                    document.querySelector('.sub-menu-mini').classList.remove('show')
        
                    e.preventDefault(); // protect scroll up after click
                    btnOpen.classList.remove('cannotClick')
                    for (let i = 0; i < textMenuMini.length; i++) {
                        textMenuMini[i].classList.remove('text-side-mini-show');
                    }
                    for (let i = 0; i < iconMenuMini.length; i++) {
                        iconMenuMini[i].classList.remove('side-menu-list-space-between');
                    }
                    linkToOpenMini.style.backgroundColor = "unset";
                    OpensubMenuMini.style.backgroundColor = "unset";
        
                }
                if (!menuMini.contains(e.target)) {
                    for (let i = 0; i < titlesidebarmini.length; i++) {
                        titlesidebarmini[i].classList.remove('show');
                    }
                    e.preventDefault(); // protect scroll up after click
        
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
        
        
                    btnSideOpen.classList.remove("hide")
                    btnSideClose.classList.add("hide")
        
                }
                if (menuMini.contains(e.target) && !OpensubMenuMini.contains(e.target) && !switchColorMini.contains(e.target)) {
                    subMenuMini.classList.remove('show');
        
                    linkToOpenMini.style.backgroundColor = "unset";
                    OpensubMenuMini.style.backgroundColor = "unset";
        
                    for (let i = 0; i < btnMenuClose.length; i++) {
                        btnMenuClose[i].classList.add("hide");
                    }
        
                    for (let i = 0; i < btnMenuOpen.length; i++) {
                        btnMenuOpen[i].classList.remove("hide");
                    }
        
                }
        
        
            }
            return;
        }
         else {
           return;
        }
      }
      
      var x = window.matchMedia("(max-width: 1400px)")
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
        rightSideContent.classList.toggle('transform2')
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
            // when window width is <= 499px
            764: {
                slidesPerView: 7,

            },
            // when window width is <= 999px
            999: {
                slidesPerView: 9,

            },

        }
    });
}
slider() // Call listener function at run time



//text minimize
function changename() {
    const textMinimize = document.querySelectorAll(".minimize-text")
    if (!nameminimize.matches) { // If media query matches
        for (let i = 0; i < textMinimize.length; i++) {
            textMinimize[i].innerHTML = "+";
        }
    }
    else {
        return;
    }

}

var nameminimize = window.matchMedia("(min-width: 500px)")
nameminimize.addListener(changename) // Attach listener function on state changes
changename()
