function page1(){
    limpar()
    document.querySelector('.sliders').classList.add('page1')
}
function page2(){
    limpar()
    document.querySelector('.sliders').classList.add('page2')
}
function page3(){
    limpar()
    document.querySelector('.sliders').classList.add('page3')
}
 function limpar(){
     document.querySelector(".sliders").classList.remove('page1')
     document.querySelector(".sliders").classList.remove('page2')
     document.querySelector(".sliders").classList.remove('page3')
 }
 function abreFecha(){
     if(document.getElementById(menuOpener).style.width='0vw'){
         document.getElementById(menuOpener).style.width=='70vw';
     }
     else{
        document.getElementById(menuOpener).style.width=='0vw';
     }
 }