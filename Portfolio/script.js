//TExt Typing Effect
const dynamicText = document.querySelector('.word');
const words = ["Front-End Developer","Wordpress Developer", "Graphic Designer", "Content Writer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

  dynamicText.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
   
    setTimeout(typeEffect, 50); // Adjust typing speed for smoothness (lower value for smoother)
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    
    setTimeout(typeEffect, 20); // Adjust deleting speed for smoother effect (lower value for smoother)
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
     
      setTimeout(typeEffect, 500); // Pause after a word is typed completely
    } else {
      setTimeout(typeEffect, 1000); // Delay before typing the next word
     
    }
  }
}
typeEffect();

//Projects Link
 function productsLinks() {
    let p1=document.querySelector('.project-1');
    p1.addEventListener('click',()=>{
        let extLink='https://kotharieducation.com';
        window.open(extLink, '_blank');
    });
    let p2=document.querySelector('.project-2');
    p2.addEventListener('click',()=>{
        let extLink='https://codebyshoaib.github.io/Qau-Gpa-Calculator/';
        window.open(extLink, '_blank');
    });
    let p3=document.querySelector('.project-3');
    p3.addEventListener('click',()=>{
        let extLink='http://blackwheelscarrental.com.au/';
        window.open(extLink, '_blank');
    });

}
productsLinks();

//Active Navbar
let menuli=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');
function activeMenu(){
    let len=section.length; 
    while(--len && window.scrollY +97 < section[len].offsetTop){

    }
    menuli.forEach(sec=>sec.classList.remove('active'));
    menuli[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll',activeMenu);

//Sticky Navbar
const header=document.querySelector('header');
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',this.window.scrollY>50)
})

//Toggle nav bar
let menuIcon=document.querySelector('#menu');
let navlist=document.querySelector('#nav');
let listItem=document.querySelectorAll('#nav li');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

//Again  hide
listItem.forEach(item=>{
    item.addEventListener('click',()=>{
        menuIcon.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
})

//Scroll Animations
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


//Preloader
window.addEventListener('load', function () {
    const preloader = document.querySelector('#preloader');
    setTimeout(function () {
        preloader.classList.add('hide-preloader');
    }, 1000); 
});
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true,
// });
document.addEventListener("contextmenu", function(e){
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);


//Send Mail


document.getElementById("submit_btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Check for empty fields or perform additional validation as needed
    if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Define your Email.js service and template IDs
    const serviceID="service_910fx0f";
    const templateID='template_2pqwkze';

    // Prepare parameters for sending the email
    var params = {
        name: name,
        email: email,
        phone:phone,
        message: message
    };

    // Send the email using Email.js
    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log("Email sent successfully:", response);
            displayMessage("Your Query is forwarded to Shoaib", "success");
            // Clear the form fields if needed
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('message').value = '';
        })
        .catch(function (error) {
            console.log("Email send failed:", error);
            displayMessage("An error occurred while sending the email. Please try again later.", "error");
        });
});

function displayMessage(message, messageType) {
    var statusMessage = document.getElementById("status_message");
    statusMessage.textContent = message;
    
    // Apply styles based on message type (success or error)
    if (messageType === "success") {
        statusMessage.style.color = "green";
    } else if (messageType === "error") {
        statusMessage.style.color = "red";
    }
}

