function produceDrivingRange(range){
   return function(distance){
     if (distance>range) {
       return false
     } else {return `within range by ${range}`}
   }
}
