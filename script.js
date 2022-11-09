const projects = document.querySelectorAll('.project-wrapper');      
const menuBtn = document.querySelector('.menu-wrapper') 
const menuBtnClose = document.querySelector('.close-wrapper')
const menu = document.querySelector('.links')
const menuLink = document.querySelectorAll('.link')
projects.forEach(project => {
    project.addEventListener('mouseover', (e) => {
        const element = e.target
             var image = element.parentNode.children[1]
             image.classList.add('shown')
    })
    project.addEventListener('mouseleave', (e) => {
        const element = e.target
 
             var image = element.children[1]
             image.classList.remove('shown')
    })
});
menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    menu.classList.add('expanded')
    menuBtn.classList.add('clicked')
})
menuBtnClose.addEventListener('click', (e) => {
    e.preventDefault()
    menu.classList.remove('expanded')
    menuBtn.classList.remove('clicked')
})
menuLink.forEach(link => {
    link.addEventListener('click', () =>  {
        menu.classList.remove('expanded')
        menuBtn.classList.remove('clicked')
    })
})