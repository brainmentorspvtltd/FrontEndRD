function armStrong(num){
 // Termination Case
 if(num == 0){
    return 0;
 }   
// Small Problem
var result = armStrong(parseInt(num/10));
var rem  = num % 10;
result = result +  rem ** 3;
return result;
}
var n = 153;
var result  = armStrong(n);
console.log(n == result ?" ArmStrong ":"Not Armstrong");