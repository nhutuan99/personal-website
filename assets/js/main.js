
/* MENU SHOW YOUR HIDDEN */

const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show');
})


closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show');
})

/* REMOVE MENU */

const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',linkAction))

/* SCROLL SELECTIONS ACTIONS LINK */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50

        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active')
        }
        else
        {
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active')
        }
    })
}

/* BACKGROUND MODE */

const checkbox = document.querySelector('#checkbox');
const homeContainer = document.getElementById('home__container');
checkbox.addEventListener('change',() =>{
    document.body.classList.toggle('dark-mode');
    homeContainer.classList.toggle('dark-mode');
    document.querySelectorAll('.inverted').forEach((result) => {
        result.classList.toggle('invert');
    })
})