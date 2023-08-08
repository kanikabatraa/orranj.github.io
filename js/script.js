
AOS.init();


var cur = document.querySelector('.cursor');


window.addEventListener('mousemove', function(e){

    cur.style.left = e.clientX + 'px';

    cur.style.top = e.clientY + 'px';

})



$('.box2').click(function(){
    $('.menu-box').toggle(500);
});

$('.profile').click(function(){
    $('.sub-menu-wrap').toggle(500);
});


 document.getElementById('here').addEventListener('click' , function(){
     document.querySelector('.popup').style.display = "block";
})

// $('#here').click(function(){
//     $('.popup').toggle(500);
// });

// document.getElementById('cross').addEventListener('click',function(){
//     document.querySelector('.popup').style.display = "none";
// });



//     var a = document.getElementById('contact-name').value;

        
//     var b = document.getElementById('contact-email').value;

//     var c = document.getElementById('contact-no.');

//     var d = document.getElementById('box3');
// function submit(){
    
//  if( a.length == 0){
//         d.innerHTML='Please Enter name';
        
//     }
//   else if(a.length < 3){
//     d.innerHTML= 'please enter full'
//   }
    
   
// }
