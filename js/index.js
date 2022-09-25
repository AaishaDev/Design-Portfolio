$(document).ready(function () {
  $(".owl-carousel1").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
        stagePadding:0,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".owl-carousel2").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
        
      },
      1000: {
        items: 1,
        stagePadding: 140,
      },
      1200: {
        items: 1,
        stagePadding: 240,

      },
      1400: {
        items: 1,
        stagePadding: 340,

      },
      1900: {
        items: 1,
        stagePadding: 0,

      }

    },
  });
});

document.getElementById("submit_form").addEventListener("click", () => {
  const form_status = localStorage.form;
  const popup = document.getElementById('popup');
  // const publickey = ABEXiTL6uCXGQ2PsF;

  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    workingOn: document.getElementById("working_on").value,
    message: document.getElementById("message").value,
  };

  if (user.name && user.email) {
    if (form_status != "Submitted") {
      localStorage.setItem("form", "Submitted");
      console.log("send mail executed");
      emailjs.send("service_yoqg1oe", "template_b4eexzl", user)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          console.log("second line success")
          popup.style.display='block';
          popup.innerHTML = "Sent";
       
        
        setTimeout(() => {
          popup.style.display='none';
          popup.innerHTML = "";
         
          
        }, 5000);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    } 
    else {
      console.log(" you have aready sent ")
      
        popup.style.display='block';
        popup.innerHTML = "Sent Already";
     
      
      setTimeout(() => {
        popup.style.display='none';
        popup.innerHTML = "";
       
        
      }, 5000);
    }
  }
  else{
    console.log("atleast enter name And email")
    popup.style.display='block';
    popup.innerHTML = "Atleast enter name And email";
 
  
  setTimeout(() => {
    popup.style.display='none';
    popup.innerHTML = "";
   
    
  }, 5000);
  }
});



let webCard = document.getElementById('website-cards');
let mobCard = document.getElementById('mobile-cards');
let illustrationCard = document.getElementById('illustration-cards');

document.getElementById('1').addEventListener('click', ()=>{
  document.getElementById('1').style.borderBottom='2px solid #4C40F7';
  document.getElementById('2').style.borderBottom='none';
  document.getElementById('3').style.borderBottom='none'
  console.log("website cards")
  if (window.matchMedia("(max-width: 550px)").matches) {
    webCard.style.display='flex';
  mobCard.style.display='none';
  illustrationCard.style.display='none';
  } else {
    webCard.style.display='grid';
  mobCard.style.display='none';
  illustrationCard.style.display='none';
    
  }
  
  
})
document.getElementById('2').addEventListener('click', ()=>{
  document.getElementById('2').style.borderBottom='2px solid #4C40F7';
  document.getElementById('1').style.borderBottom='none';
  document.getElementById('3').style.borderBottom='none'
  webCard.style.display='none';
  mobCard.style.display='none';
  illustrationCard.style.display='grid';
  
})
document.getElementById('3').addEventListener('click', ()=>{
  document.getElementById('3').style.borderBottom='2px solid #4C40F7';
  document.getElementById('2').style.borderBottom='none';
  document.getElementById('1').style.borderBottom='none';
  webCard.style.display='none';
  mobCard.style.display='grid';
  illustrationCard.style.display='none';
  
})
