var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');

var selectPlanButtons= document.querySelectorAll('.plan button');
console.dir(modal);
var selectNoButton=document.querySelector('.modal button');
var  mobileNavBar=document.querySelector('.mobile-nav');
var mobileNavBarButton=document.querySelector('.toggle-button');

for (let index = 0; index < selectPlanButtons.length; index++) {
    selectPlanButtons[index].addEventListener('click',function(){
        modal.style.display='block';
        console.dir(modal);
    });

selectNoButton.addEventListener('click',function(){
    modal.style.display='none'; 
});
mobileNavBarButton.addEventListener('click',function(){
    mobileNavBar.style.display='block';

})


//  temporary solution
    mobileNavBar.addEventListener('click',function(){
        mobileNavBar.style.display='none';
    })

}