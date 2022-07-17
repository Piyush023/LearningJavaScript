var count=0;

const logCount = () => {
    console.log("Throttled Function "+count++);
}

const throttle = (fn, limit) => {
    let flag = true;
    return function(){
        if(flag){
            logCount();
            flag = false;
            setTimeout(() => {
                flag=true;
            }, limit);
        }
    }
}

//This will add a time-limit of 10sec between 2 calls.Only after 10sec from the 1st call the 2nd call can be made.
const func = throttle(logCount, 10000);
