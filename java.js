const sub_btn = document.querySelector('.sub_btn');
const subform = document.querySelector('.subform');
const dis_btn = document.querySelector('.dis_btn');
const disform = document.querySelector('.disform');
const container_box = document.querySelector('.container_box');
const maincontainer = document.querySelector('.maincontainer');
const email = document.querySelector('.email');
const form = document.querySelector('form')
form.onsubmit = submit;
// sub_btn.onclick = submit;
function submit(e) {
    e.preventDefault()
    // adding hide to the class list of container_box
    container_box.classList.add('hide')
    // removing hide from the class list of maincontainer
    maincontainer.classList.remove('hide')
}