const projectBtn = document.querySelector('#projectBtn');
// const projectLink = document.querySelector('#projectlink');
const contactBtn = document.querySelector('#contactBtn');
const projectSec = document.querySelector('#projects');
const contactSec = document.querySelector('#contact');
// const moreBtn = document.querySelector('#moreBtn');
// const modalPop = document.querySelector('#moreabout')
// const closeBtnModal = document.querySelector('#closeBtn')


projectBtn.addEventListener('click', (e) => {
    e.preventDefault()
    scrollToProject()
})
// projectLink.addEventListener('click', (e) => {
//     e.preventDefault()
//     scrollToProject()
// })
contactBtn.addEventListener('click', (e) => {
    e.preventDefault()
    scrollToContact()
})
function scrollToProject() {
    projectSec.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function scrollToContact() {
    contactSec.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
// moreBtn.addEventListener('click', () => {
//     modalPop.classList.add('showM')
// })
// closeBtnModal.addEventListener('click', () => {
//     modalPop.classList.remove('showM')
// })

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         }
//         // else {
//         //     entry.target.classList.remove('show')
//         // }

//     });
// });

// const hidden = document.querySelectorAll('.hidden')
// hidden.forEach((el) => observer.observe(el))
