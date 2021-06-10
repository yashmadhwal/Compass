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