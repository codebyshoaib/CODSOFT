var link=document.createElement("link");link.rel="stylesheet",link.href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",link.type="text/css",link.media="all",document.head.appendChild(link);const dynamicText=document.querySelector(".word"),words=["Front-End Developer","Wordpress Developer","Graphic Designer","Content Writer"];let wordIndex=0,charIndex=0,isDeleting=!1;const typeEffect=()=>{const e=words[wordIndex],t=isDeleting?e.substring(0,charIndex-1):e.substring(0,charIndex+1);dynamicText.textContent=t,!isDeleting&&charIndex<e.length?(charIndex++,setTimeout(typeEffect,50)):isDeleting&&charIndex>0?(charIndex--,setTimeout(typeEffect,20)):(isDeleting=!isDeleting,isDeleting?setTimeout(typeEffect,1e3):(wordIndex=(wordIndex+1)%words.length,setTimeout(typeEffect,500)))};function productsLinks(){document.querySelector(".project-1").addEventListener("click",(()=>{window.open("https://kotharieducation.com","_blank")})),document.querySelector(".project-2").addEventListener("click",(()=>{window.open("https://codebyshoaib.github.io/Qau-Gpa-Calculator/","_blank")})),document.querySelector(".project-3").addEventListener("click",(()=>{window.open("http://blackwheelscarrental.com.au/","_blank")}))}typeEffect(),productsLinks();let menuli=document.querySelectorAll("header ul li a"),section=document.querySelectorAll("section");function activeMenu(){let e=section.length;for(;--e&&window.scrollY+97<section[e].offsetTop;);menuli.forEach((e=>e.classList.remove("active"))),menuli[e].classList.add("active")}activeMenu(),window.addEventListener("scroll",activeMenu);const header=document.querySelector("header");window.addEventListener("scroll",(function(){header.classList.toggle("sticky",this.window.scrollY>50)}));let menuIcon=document.querySelector("#menu"),navlist=document.querySelector("#nav"),listItem=document.querySelectorAll("#nav li");menuIcon.onclick=()=>{menuIcon.classList.toggle("bx-x"),navlist.classList.toggle("open")},listItem.forEach((e=>{e.addEventListener("click",(()=>{menuIcon.classList.remove("bx-x"),navlist.classList.remove("open")}))}));const observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show-items"):e.target.classList.remove("show-items")}))})),scrollScale=document.querySelectorAll(".scroll-scale");scrollScale.forEach((e=>observer.observe(e)));const scrollBottom=document.querySelectorAll(".scroll-bottom");scrollBottom.forEach((e=>observer.observe(e)));const scrollTop=document.querySelectorAll(".scroll-top");function displayMessage(e,t){var n=document.getElementById("status_message");n.textContent=e,"success"===t?n.style.color="green":"error"===t&&(n.style.color="red")}scrollTop.forEach((e=>observer.observe(e))),window.addEventListener("load",(function(){const e=document.querySelector("#preloader");setTimeout((function(){e.classList.add("hide-preloader")}),1e3)})),document.addEventListener("contextmenu",(function(e){"IMG"===e.target.nodeName&&e.preventDefault()}),!1),document.getElementById("submit_btn").addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("name").value,n=document.getElementById("email").value,o=document.getElementById("phone").value,l=document.getElementById("message").value;if(!t||!n||!l)return void alert("Please fill in all required fields.");var c={name:t,email:n,phone:o,message:l};emailjs.send("service_910fx0f","template_2pqwkze",c).then((function(e){displayMessage("Your Query is forwarded to Shoaib","success"),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("phone").value="",document.getElementById("message").value=""})).catch((function(e){displayMessage("An error occurred while sending the email. Please try again later.","error")}))}));var lightbox=document.getElementById("lightbox"),thumbnailContainer=document.querySelectorAll(".certificate"),lightboxImg=document.getElementById("lightboxImg"),close=document.getElementById("close");thumbnailContainer.forEach((e=>{e.addEventListener("click",(function(e){e.target.classList.contains("thumbnail")&&(lightbox.style.display="block",lightboxImg.src=e.target.src,lightbox.classList.add("show"))}))})),close.onclick=function(){lightbox.classList.remove("show"),setTimeout((function(){lightbox.style.display="none"}),300)},window.onclick=function(e){e.target===lightbox&&(lightbox.classList.remove("show"),setTimeout((function(){lightbox.style.display="none"}),300))};
