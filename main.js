let text = document.getElementById("itext");
let image = document.getElementById("iimage");
let lampOnOff = document.getElementById("acender-apagar")

image.addEventListener('dblclick', brokenlamp)
lampOnOff.addEventListener('click',OnOfflamp);

image.addEventListener('mouseover',onlamp);
image.addEventListener('mouseout', offlamp)

function islampbroken(){
 return image.src.indexOf  ('turnbroken') > -1
}

function onlamp( ){
if( !islampbroken() ){
image.src = 'imagens/turnon.jpg'
text.innerText = 'Lampada Ligada'
lampOnOff.value = 'Desligar'
}
};

function offlamp(){
if( !islampbroken() ){
    image.src = 'imagens/turnoff.jpg'
    text.innerText = 'Lampada Desligada'
    lampOnOff.value = 'Ligar'
}
}

function brokenlamp(){
    image.src = 'imagens/turnbroken.jpg'
    text.innerHTML = 'Lampada Quebrada'
}

function OnOfflamp(){
    if (lampOnOff.value === 'Ligar')
    {
    lampOnOff.value = 'Desligar'
    image.src = 'imagens/turnon.jpg'
    text.innerText = 'Lampada Ligada'
    
    }
    else{
        image.src = 'imagens/turnoff.jpg'
        text.innerText = 'Lampada Desligada'
        lampOnOff.value = 'Ligar'
    }
}