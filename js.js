let btn = document.querySelectorAll('.conten__block__buy--btn')


//btn.forEach(function(elem){
    for(let i =0;i<btn.length;i++){
        btn[i].addEventListener('click',funk)
        function funk(){
            if(btn[i].classList.contains('conten__block__buy--btn')){
                btn[i].classList.remove("conten__block__buy--btn");
                btn[i].classList.add("disabled");
                btn[i].innerHTML='обработка'
                window.setTimeout(bascket,2000)
                function bascket(){
                    btn[i].classList.remove('disabled')
                    btn[i].classList.add('conten__block__basket')
                    btn[i].innerHTML = '<img class="checked" src="./img/Vector.png"> в корзине'
                   let str1 = btn[0].innerHTML   
                   let str2 = btn[1].innerHTML   
                   localStorage.setItem('btn1', str1) 
                   localStorage.setItem('btn2', str2) 
                    
                
                  
                }
            }else if(btn[i].classList.contains('conten__block__basket')){
                btn[i].classList.remove('conten__block__basket')
               btn[i].classList.add("conten__block__buy--btn")
               btn[i].innerHTML = 'купить'
                let str1 = btn[0].innerHTML   
                   let str2 = btn[1].innerHTML   
                   localStorage.setItem('btn1', str1) 
                   localStorage.setItem('btn2', str2) 
                    
                   
       }
       
    }
}


    //elem.addEventListener('click', func)
    
    
    //function func(){
        
        //elem.classList.remove("conten__block__buy--btn");
        //elem.classList.add("disabled");
        //elem.innerHTML='обработка'
        //window.setTimeout(bascket,2000)
        //function bascket(){
        //    elem.classList.remove('disabled')
        //    elem.classList.add('conten__block__basket')
        //    elem.innerHTML = '<img class="checked" src="./img/Vector.png"> в корзине'
        //    let obj=elem.innerHTML
        //    arr.push(obj)
        //    localStorage.setItem('basket',arr)
            
           
        
        
        //elem.removeEventListener('click',func)
    //}
   
    
    
//})




window.addEventListener('load', func3)  
function func3(){
        let value1 = localStorage.getItem('btn1')
        let value2 = localStorage.getItem('btn2')
        
        btn[0].innerHTML=value1
        if(btn[0].textContent==' в корзине'){
             btn[0].classList.remove("conten__block__buy--btn");
             btn[0].classList.add('conten__block__basket')
        }
        btn[1].innerHTML=value2
        if(btn[1].textContent==' в корзине'){
            btn[1].classList.remove("conten__block__buy--btn");
            btn[1].classList.add('conten__block__basket')
       }
    }

    

let text = document.getElementById('test');
let btn1=document.querySelector('.header__search--button')
let names = document.querySelectorAll('.content__block--lotName')
let blocks = document.querySelectorAll('.content__block')

btn1.addEventListener('click', func2);
function func2() {
   let value = text.value.toUpperCase()
   for(i of blocks){
    i.classList.remove('none')
   }
   
   
    if(value !=''){
        names.forEach(function(elem){
            let str=elem.innerText.toUpperCase()
            if(str.search(value) == -1){
            elem.parentNode.classList.add('none')
        }else {
            elem.parentNode.classList.remove('none')
        }})}}
        

    
    
let img1 = document.getElementById('img1')
img1.addEventListener('click', slide)
function slide(){
    img1.classList.add('slide')
}

$(document).ready(function() {
    // Обрабатывает клик на картинке
    $('#img1-').click(function() {
      // Получаем адрес картинки
      var imgAddr = $(this).attr(&quot;src&quot;);
      // Задаем свойство SRC картинке, которая в скрытом диве.
      $('#img_big_block img').attr({src: imgAddr});
      // Показываем скрытый контейнер
      $('#img_big_block').fadeIn('slow');
    });
  
    // Обрабатывает клик по большой картинке
    $('#img_big_block').click(function() {
      $(this).fadeOut();
    });
  });