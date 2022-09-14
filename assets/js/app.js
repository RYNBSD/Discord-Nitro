const openIcon = document.querySelector('.btn--open')
const closeIcon = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
const benefitsCards = document.querySelector('.benefits__cards')
const body = document.body

/**
 * 
 * Inner Html
 */
const data = [
    {
        title: 'Better Emoji',
        description: 'Collect or make your own custom and animated emojis.',
        source: './assets/images/emoji_card.svg'
    },
    {
        title: 'Personal Profile',
        description: 'Use an animated avatar and claim a custom tag.',
        source: './assets/images/profile_card.svg'
    },
    {
        title: 'Support a Server',
        description: 'Get 2 Server Boosts and 30% off extra Boosts.',
        source: './assets/images/support_card.svg'
    },
    {
        title: 'Rep Your Support',
        description: 'Profile badge shows how long you\'ve supported Discord.',
        source: './assets/images/rep_card.svg'
    },
    {
        title: 'Bigger Uploads',
        description: '100MB upload size for high-quality file sharing.',
        source: './assets/images/uploads_card.png'
    },
    {
        title: 'HD Video',
        description: 'Hi-res video, screenshare, and Go Live streaming.',
        source: './assets/images/video_card.png'
    }
]

const template = ({ title, description, source}) => {
    return `
        <article class="benefits__card">
            <h5 class="benefits__card-title adaptive-font adaptive-font--medium">
                ${title}
            </h5>
            <p class="benefits__card-description">
                ${description}
            </p>
            <img src="${source}" alt="" class="benefits__card-image">
        </article>
    `
}
const templates = data.map((dt, index) => {
    return template(dt)
})

benefitsCards.innerHTML = templates.join('')

/**
 * 
 * NavBar
 */
const openMenu = () => {
    navMenu.classList.add('nav__menu--active')
    body.style.overflow = 'hidden'
    addBackdrop()
}
const closeMenu = () => {
    navMenu.classList.remove('nav__menu--active')
    body.style.overflow = 'visible'
    removeBackdrop()
}

const addBackdrop = () => {
    const backdrop = document.createElement('div')
    const nav = document.querySelector('.nav')
    backdrop.classList.add('nav__backdrop')
    nav.insertBefore(backdrop, navMenu)
}
const removeBackdrop = () => {
    document.querySelector('.nav__backdrop').remove()
}

const closeMenuOutside = e => {
    if(e.target.classList.contains('nav__backdrop')) {
        closeMenu();
    }
}

openIcon.addEventListener('click', openMenu)
closeIcon.addEventListener('click', closeMenu)
window.addEventListener('click', closeMenuOutside)

