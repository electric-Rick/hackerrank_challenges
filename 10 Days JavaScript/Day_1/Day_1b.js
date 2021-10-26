/*
 * Create the function factorial here
 */

function factorial(n){
   var x = (function (e){ var soma = 1; for(var i = e; i > 1; i--) {
    soma += (soma * (i -1 ))
  }return soma}(n));
   return x
    
}

