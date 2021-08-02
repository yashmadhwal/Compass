// Navigation MENU

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

document.getElementById("buttonId").addEventListener("click", function(){
document.querySelector('.ResponseRecorded').style.display='block';})

document.getElementById("buttonId").addEventListener("click", function(){
document.getElementById('ResponseArea').style.display='none';})




// Ajax Pluging for Phone Number
$(window).load(function()
{
   var phones = [{ "mask": "+7(###)###-##-##"}];
    $('#phone').inputmask({ 
        mask: phones, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });
});