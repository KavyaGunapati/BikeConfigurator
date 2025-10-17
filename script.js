const wheelData=[
    
  { name: "Wheel Type 1", price: "₹1200", description: "Lightweight alloy wheel", image: "wheel1-removebg-preview.png" },
  { name: "Wheel Type 2", price: "₹1500", description: "Carbon fiber racing wheel", image: "wheel2-removebg-preview.png" },
  { name: "Wheel Type 3", price: "₹1000", description: "Standard commuter wheel", image: "wheel3-removebg-preview.png" },
  { name: "Wheel Type 4", price: "₹1800", description: "Mountain bike wheel", image: "wheel4-removebg-preview.png" },
  { name: "Wheel Type 5", price: "₹2000", description: "Heavy-duty touring wheel", image: "wheel5-removebg-preview.png" }
];
const wheelname=document.getElementById('wheelname');
const wheelDetails=document.getElementById('wheelDetails');
const tumbnails=document.querySelectorAll('.tumbnails');

const leftWheel = document.getElementById('leftWheel');
const rightWheel = document.getElementById('rightWheel');

tumbnails.forEach((tumb,index)=>{
    tumb.addEventListener('click',()=>{
        const wheel=wheelData[index];
        wheelname.innerHTML=`${wheel.name}`;
        wheelDetails.innerHTML = `Price: ${wheel.price}<br>${wheel.description}`;
        document.getElementById('buynow').style.display='block';
        leftWheel.src=wheel.image;
        leftWheel.style.display='block';
        rightWheel.src=wheel.image;
       rightWheel.style.display='block';
        
leftWheel.classList.remove('animate-left');
rightWheel.classList.remove('animate-right');

void leftWheel.offsetWidth;
void rightWheel.offsetWidth;
leftWheel.classList.add('animate-left');
rightWheel.classList.add('animate-right');


        tumbnails.forEach(t=>t.classList.remove('selected'));
        tumb.classList.add('selected');
    })
})