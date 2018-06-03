function produceDrivingRange(distance){
   return function(range){
     if (distance>range) {
       return false
     } else {return `within range by ${range}`}
   }
}
