/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
   let lowestTime = 1;
    let highestTime = 1e15;
    let mid = 0;
    while(lowestTime<highestTime){
        mid = lowestTime + Math.floor((highestTime-lowestTime)/2);
        if(findTrips(time,mid) >= totalTrips){
            highestTime = mid;
        }    
        else{
            lowestTime = mid+1;
        }
    }
    return lowestTime;
};

function findTrips(time,mid){
        let trips = 0;
        for(let i=0; i<time.length; i++){
            trips += Math.floor(mid/time[i]);
        }
    return trips;
}  
