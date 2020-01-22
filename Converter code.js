//dark and light toggle mode

let checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

function convert(){
  let myOption = document.getElementById("optionList");
  let  t1= document.getElementById("t1").value;
  let  p2= document.getElementById("p2");
  p2.innerHTML = "";
  if(myOption.value === "1"){
    toMorse(t1);
  }
  else if(myOption.value === "2"){
    toBinary(t1);
  }
  else if(myOption.value === "3"){
    toHexa(t1);
  }
}

function toMorse(){
  let  t1= document.getElementById("t1").value;
  let= {" ":" ",a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..", 1:".----",2:"..---",3:"...--",4:"....-", 5:".....",6:"-....",7:"--...",8:"---..",9:"----.",0:"-----"  };
  let  p2= document.getElementById("p2");
  p2.innerHTML = "";
  let t2 = t1.toLowerCase();
  let str = "";
      
   for(let j=0; j<t1.length; j++){
        str += let[t2[j]] + "&nbsp;"; 
      }
    p2.innerHTML = "Given Input: " + t1 + "<br/>Morse Code: " + str + "<br/>";    
}

function toHexa(decimal){
  let parameters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let parameters2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let result = "";
  let result2 = "";
  let quotient = decimal;
  let i = 0;
  if (decimal === 0 ) {
    result += "0";
  }
  else if(isNaN(decimal)){
    result2 = "Please input only numbers";
  }
  else {
    while( quotient > 0 ){   
     if(quotient % 16 === parameters[i]){   
          result += parameters2[i];      
          quotient = Math.floor(quotient/16);      
          i=0;   
        }   
     else {     
        i++;    
     } 
   }
 }
   
   for(let j=result.length; j>=0; j--){
    result2 += result.charAt(j);
  }
  p2.innerHTML = "Given Input: " + decimal + "<br/>Hexadecimal: " + result2 + "<br/>";    
}

function toBinary (decimal){
  let result = "";
  let result3 = "";
  let quotient = decimal;
  let reminder;
  if(decimal === 0){
    result += "0";
  }
  else if(isNaN(decimal)){
    result3 = "Please input only numbers";
  }
  else {  
    function division (num){
         while (quotient > 0){
          if( num % 2 === 0 ) {
            reminder = "0";
            result += reminder;
            quotient = num/2;
            division(quotient);
          }
          else if ( num % 2 === 1 ) {
            reminder = "1";
            result += reminder;
            quotient = Math.floor(num/2);
            division(quotient);
         }
       }
     }
     division(decimal);    
   }
  
   for(let i=result.length; i>=0; i--){
      result3 += result.charAt(i);
   }
   p2.innerHTML = "Given Input: " + decimal + "<br/>Binary: " + result3 + "<br/>"; 
}
