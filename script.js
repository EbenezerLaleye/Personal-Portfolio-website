const projectBtn = document.querySelector('#projectBtn');
const projectLink = document.querySelector('#projectlink');
const projectSec = document.querySelector('#projects')

projectBtn.addEventListener('click', ()=>{
    scrollToProject()
})
projectLink.addEventListener('click', ()=>{
    scrollToProject()
})
function scrollToProject(){
    projectSec.scrollIntoView({behavior:'smooth',block:'center'})
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        // else {
        //     entry.target.classList.remove('show')
        // }

    });
});

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((el) => observer.observe(el))

