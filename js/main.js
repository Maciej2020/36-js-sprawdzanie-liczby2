function myFunction(a,b){
   if(a === 20 || b === 20){
      return console.log(true);
   }
   else if((a + b) <= 20){
      return console.log(true);
   }
   else{
      console.log("Spróbuj jeszcze raz!")
   }
}

myFunction(111,10);