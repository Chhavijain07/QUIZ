let next = document.getElementById("next");
let q1 = document.getElementById("q1");

let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let ansbox = document.getElementById("ansbox")
let box=document.getElementById("box")
let box2=document.getElementById("box2");
let timer= document.getElementById("timer");
let start= document.getElementById("start1")

let timerIds
let timerId 
let timerId2
let timerId3
let timerId4
box2.style.display = "none"
box.style.display = "none"
let count = 0;
let chance;
let ans=0;
timer.innerHTML=1;
ansbox.style.display="none"
q1.style.display="none"
q2.style.display = "none"
q3.style.display = "none"
q4.style.display = "none"
q5.style.display="none"
let count1=()=>{
  count=0;
}

let correct = () => {
  
        if(count>=1){
          return;
        }
        else{
          ans=ans+1;
          count++;
        clearInterval(timerIds)
        clearInterval(timerId)
        clearInterval(timerId2)
        clearInterval(timerId3)
        clearInterval(timerId4)
    
        let op1 = document.getElementById("op1")
        op1.style.backgroundColor = "#95d395";
        op1.style.borderColor = "green";
        op1.style.color = "black";
        op1.style.fontWeight = "bold";
        

        ansbox.innerHTML = ` Correct Answer : ${op1.value}`
        ansbox.style.display = "block"
        return;
        }
   
}

let wrong = () => {
  if(count>=1){
    return;
  }
  else{
  
    count++;
    clearInterval(timerIds)
    clearInterval(timerId)
    clearInterval(timerId2)
    clearInterval(timerId3)
    clearInterval(timerId4)
 
 
    let op1 = document.getElementById("op1")
    ansbox.innerHTML = `The Correct Ans Is : ${op1.value}`
        ansbox.style.display = "block"
        let op2 = document.querySelector("#op2")
       
        op2.style.backgroundColor = "red";
        op2.style.borderColor = "red";
        op2.style.color = "black";
        op2.style.fontWeight = "bold";
        alert("OOPS...! Wrong Answer");
        return;
  }
    
}
let wrong1 = () => {
  if(count>=1){
    return;
  }
  else{
 
  count++;
  clearInterval(timerIds)
  clearInterval(timerId)
  clearInterval(timerId2)
  clearInterval(timerId3)
  clearInterval(timerId4)
   
  let op1 = document.getElementById("op1") 
        ansbox.innerHTML = `The Correct Ans Is : ${op1.value}`
        ansbox.style.display = "block"
        let op3 = document.querySelector("#op3")

        op3.style.backgroundColor = "red";
        op3.style.borderColor = "red";
        op3.style.color = "black";
        op3.style.fontWeight = "bold";
        alert("OOPS...! Wrong Answer");
    
    return;
  }
}
let wrong2 = () => {

  if(count>=1){
    return;
  }
  else{ 
    count++;
  clearInterval(timerIds)
  clearInterval(timerId)
  clearInterval(timerId2)
  clearInterval(timerId3)
  clearInterval(timerId4)
  let op1 = document.getElementById("op1")
     
        ansbox.innerHTML = `The Correct Ans Is : ${op1.value}`
        ansbox.style.display = "block"
        let op4 = document.querySelector("#op4")

        
        op4.style.backgroundColor = "red";
        op4.style.borderColor = "red";
        op4.style.color = "black";
        op4.style.fontWeight = "bold";
        alert("OOPS...! Wrong Answer");



    

    return;
  }
}
let begin=()=>{
    start.innerHTML=q1;
    start.style.display="none";
    q1.style.display="block"
    let timer= document.getElementById("timer");
    ansbox.style.display = "none"
    
  
    function printNumbers(from, to) {
      
      let current=1;
      timer.innerHTML=current;
       timerIds= setInterval(function() {
        timer.innerHTML=current;
          if (current == to) {
            clearInterval(timerId);
          }
       
        current++;
        if(current==11){
            alert("Time is over..!")
          
            

           show();
            return
          }
    
        }, 1000);
      }
    
      printNumbers(2, 12);

}


let show = () => {
  count1();
    clearInterval(timerIds)
    let timer1= document.getElementById("timer1");
    ansbox.style.display = "none"
    q1.innerHTML = q2;
    q1.style.display = "none"
    q2.style.display = "block"
  
    function printNumbers(from, to) {
      
      let current=1;
      timer1.innerHTML=current;
       timerId = setInterval(function() {
        timer1.innerHTML=current;
          if (current == to) {
            clearInterval(timerId);
          }
       
        current++;
        if(current==11){
            alert("Time is over..!")
          show1()
            return
          }
    
        }, 1000);
      }
    
      printNumbers(2, 12);
    
} 


let show1 = () => {
  count1()
    clearInterval(timerId);
    let timer2= document.getElementById("timer2");
    ansbox.style.display = "none"
    q2.innerHTML = q3;
    q2.style.display = "none"
    q3.style.display = "block"
    
    function printNumbers(from, to) {
      let current=1;
    timer2.innerHTML=current;
      
        timerId2 = setInterval(function() {
         timer2.innerHTML=current;
           if (current == to) {
             clearInterval(timerId2);
           }
        
         current++;
         if(current==10){
             alert("Time is over..!")
          show2()
             return
           }
     
         }, 1000);
       }
     
       printNumbers(2, 12);
    
    
}



let show2 = () => {
  count1()
         clearInterval(timerId2);
        ansbox.style.display = "none"
        q3.innerHTML = q4;
        q3.style.display = "none"
        q4.style.display = "block"
        let timer3= document.getElementById("timer3");
      
        function printNumbers(from, to) {
          
          let current=1;
          timer3.innerHTML=current;
            timerId3 = setInterval(function() {
             timer3.innerHTML=current;
               if (current == to) {
                 clearInterval(timerId3);
               }
            
             current++;
             if(current==10){
                 alert("Time is over..!")
              show3()
                 return
               }
         
             }, 1000);
           }
         
           printNumbers(2, 12);
        
        
   
   
}
let show3=()=>{
  count1()
    clearInterval(timerId3);
    ansbox.style.display = "none"
    q4.innerHTML = q5;
    q4.style.display = "none"
    q5.style.display = "block"
    let timer4= document.getElementById("timer4");
   
    function printNumbers(from, to) {
      let current=1;
      timer4.innerHTML=current;
      
        timerId4= setInterval(function() {
         timer4.innerHTML=current;
           if (current == to) {
             clearInterval(timerId4);
           }
        
         current++;
         if(current==10){
             alert("Time is over..!")
            show4()
             return
           }
     
         }, 1000);
       }
     
       printNumbers(2, 12);
    
 
}
let show4 = () => {
  count1()
        clearInterval(timerId4);
        ansbox.style.display = "none"
        q5.style.display = "none"
   
         if(ans>2){
         box.src="smile.jpg"
         box.style.display="block"
         box2.innerHTML=`GREAT! YOU PASSED THE TEST YOUR SCORE IS ${ans}/5`
         box2.style.display="block"
         }
       else{
        box.src="sad.webp"
        box.style.display="block"
        box2.innerHTML=`FAIL!YOUR SCORE ${ans}/5`
        box2.style.display="block" 
     
      
       }
          

   
  
     
    }


   


