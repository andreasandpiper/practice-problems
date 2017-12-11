function changeCalculator(array){
    var totalCash = {
        25: 0,
        50: 0 ,
        100: 0
    }
    var ticketPrice = 25;
    for(var i = 0; i <array.length ; i++){
        if(array[i]> 25){
            var change = array[i] - 25;
            switch(change){
                case 25:
                    if (totalCash[25] > 0){
                        totalCash[25] -= 1;
                        totalCash[50] += 1;
                    } else {
                        return false
                    }
                    break;
                case 75:
                    if (totalCash[50] > 0 && totalCash[25] > 0){
                        totalCash[50] -= 1;
                        totalCash[25] -= 1;
                        totalCash[100] += 1;
                    } else if (totalCash[25] > 3) {
                        totalCash[25] -= 3;
                        totalCash[100] += 1;
                    }
                    else {
                        return false
                    }
                    break;
            }
        }else{
            totalCash[25] += 1;
        }
    }
    return true;
}

var array = [25,25,50,100,50]
var result = changeCalculator(array)
console.log(result);
