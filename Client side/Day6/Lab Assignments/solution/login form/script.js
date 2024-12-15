let fName = document.getElementById('fName');
let form = document.getElementsByTagName('form')[0];
let valid = true;
function addFocusStyle() {
    fName.style.border = 'solid 5px blue'
}
function validFName() {
    let fn = fName.value;
    let inv = document.getElementById('invN');
    if (fn.length < 3) {
        inv.style.display = 'inline';
        fName.focus();
        fName.ariaSelected();
        valid = false;
        fName.style.background='gray';
    }
    else {
        inv.style.display = 'inline';
        fName.style.border = 'solid 1px black'
        valid = true
    }
}

function validatePassword() {
    let pass = document.getElementById('pass');
    let cPass = document.getElementById('cPass');
    let preq = document.getElementById('preq')
    let invP = document.getElementById('invP')
    let vimg=document.getElementById('vimg')
    let nvimg=document.getElementById('nvimg')

    let passV = pass.value;
    let cPassV = cPass.value;
    if (!passV || !cPassV) {
        //text after filed this input is required
        preq.style.display = 'inline';
        pass.style.background='gray';
        cPass.style.background='gray';
        valid = false;
        nvimg.style.display='inline'
    }
    else {
        valid = true
        vimg.style.display='inline'
        nvimg.style.display='none'


    }
    if (passV != cPassV) {
        invP.style.display = 'inline';
        pass.style.background='gray';
        cPass.style.background='gray';
        valid = false;
        nvimg.style.display='inline'

    }
    else {
        valid = true
        nvimg.style.display='inline'
        nvimg.style.display='none'


    }

}
form.addEventListener('submit', (event) => {
    if (!valid){
        event.preventDefault();
    }
})




