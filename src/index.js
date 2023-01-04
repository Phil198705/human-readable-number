module.exports = function toReadable (number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
     
    if ((number >= 100) && (number%100 == 0)){
      return arr1[(number / 100)] + ' ' + hundred;
    }else if ((number > 100) && (number%10 == 0)){
      return  arr1[Math.floor(number / 100)] + ' ' + hundred + ' ' + arr3[(number%100 / 10) - 1]; 
    }else if(number > 100  && number%100 < 10){
      return arr1[Math.floor(number / 100)] + ' ' + hundred + ' ' + arr1[number%100];
    }else if ((number > 100) && (number%100 < 20)  && (number%100 > 10 )){
      return arr1[Math.floor(number / 100)] + ' ' + hundred + ' ' + arr2[number%100 - 11];
    }else if (number > 100  && number%10 == 0){
      return arr1[Math.floor(number / 100)] + ' ' + hundred + ' ' + arr3[(number / 10) - 11];
    }else if (number > 100){
      return arr1[Math.floor(number / 100)] + ' ' + hundred + ' ' + arr3[Math.floor((number%100) / 10) - 1] + ' ' + arr1[number%10];
    }; 
  
     if(number >= 0  && number < 10){
       return arr1[number]
     }else if ((number > 10) && (number < 20)){
       return arr2[number - 11];
     }else if (number%10 == 0){
       return arr3[(number / 10)-1];
     }else{
       return arr3[(Math.floor(number / 10)) - 1]+' '+arr1[number%10];
     }  
  
   } 
  

