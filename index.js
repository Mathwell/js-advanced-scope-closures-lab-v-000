function produceDrivingRange(range){
   return function(start,end){
     let distance=Math.abs(parseInt(end)-parseInt(start))
     if (distance>range) {
       return  `${distance-range} blocks out of range`
     } else {return `within range by ${range-distance}`}
   }
}


function produceTipCalculator(fare){
  return function(percent){
     return fare*percent
  }
}

function createDriver(){
  return class{

  }
}
