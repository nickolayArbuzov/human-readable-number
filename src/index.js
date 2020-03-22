module.exports = function toReadable (number) {
    let nums = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]
    
    if(number < 21){
        return nums[number];
    }
    if(21 <= number){
        if((number+'').length == 2 && number %10 != 0){
            return nums[(number+'')[0]*1+18] + ' ' + nums[(number+'')[1]*1];
        }
        if((number+'').length == 2 && number %10 == 0){
            return nums[(number+'')[0]*1+18];
        }
        if((number+'').length == 3 && number %100 == 0){
            return nums[(number+'')[0]*1] + ' hundred';
        }
        if((number+'').length == 3 && ((number+'')[1]+(number+'')[2]) < 10){
            return nums[(number+'')[0]*1] + ' hundred ' + nums[(number+'')[2]];
        }
        if((number+'').length == 3 && ((number+'')[1]+(number+'')[2]) < 21){
            return nums[(number+'')[0]*1] + ' hundred ' + nums[((number+'')[1]+(number+'')[2])];
        }
        if((number+'').length == 3 && (number+'')[2] == 0){
            return nums[(number+'')[0]*1] + ' hundred ' + nums[(number+'')[1]*1+18];
        }
        if((number+'').length == 3){
            return nums[(number+'')[0]*1] + ' hundred ' + nums[(number+'')[1]*1+18] + ' ' + nums[(number+'')[2]*1];
        }
    }
}
