function produceDrivingRange(range){
   return function(start,end){
     let distance=Math.abs(parseInt(end)-parseInt(start))
     if (distance>range) {
       return  `${distance-range} blocks out of range`
          } else {return `within range by ${distance-range}`}
   }
}
