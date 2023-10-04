
function slider(any){
    document.querySelector('.sattarbux').src = any;
   
    document.querySelectorAll('.thumb li').forEach(function (el) {
        el.classList.remove('active-thumb');
    });
    
    event.target.parentElement.classList.add('active-thumb');

}


function changeColor(color){
    const circle=document.querySelector('.circle');
    circle.style.background=color;
}



function firsPageAnim(){
    var tl=gsap.timeline();
    
    tl.from("#header", {
        y:'-10',
        opacity: 0,
        duration:1,
        ease:Expo.easeInOut
    })
    .from("#banner", {
        y:'10',
        opacity: 0,
        duration:.5,
        ease:Expo.easeInOut
    })
}
firsPageAnim();

const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-items');
        }
        else{
            entry.target.classList.remove('show-items');
        }
    });
});
const scrollScale=document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));
const scrollBottom=document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));
const scrollTop=document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

/* Mobile Menu */

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    var banner = document.getElementById('banner');
    let body=document.querySelector("body");
    if (menu.classList.contains('open')) {
       body.style.overflow='hidden';
        banner.style.opacity = 0;
    } else {
        body.style.overflow='visible';
        banner.style.opacity = 1;
    }
}
