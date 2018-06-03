function produceDrivingRange(range){
   return function(start,end){
     if (Math.abs(end-start)>range) {
       return false
     } else {return `within range by ${range}`}
   }
}
