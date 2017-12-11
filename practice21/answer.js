function bipolarLoop(num){
    for(var countUp = 0, countDown = num ; countUp < num , countDown>= 0 ; countUp++ , countDown--){
        console.log('Count Up: ' + countUp + ", Count Down: " + countDown);
    }
}


var result = bipolarLoop(6);
