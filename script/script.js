window.addEventListener('DOMContentLoaded', function() {
    let model = document.getElementsByName('model')[0],
        power = document.getElementsByName('power')[0],
        type = document.getElementsByName('type')[0],
        result = document.getElementsByName('result')[0];

        function calcPrice() {
            let modelVal = model.value,
                powerVal = power.value,
                typeVal = type.value,
                resultVal = 0;
                
            if(modelVal != 0 && powerVal != 0 && typeVal != 0 ) {
                resultVal = 10000*((modelVal+powerVal)*typeVal);
                result.value = resultVal;
            }
                
        }
        
    model.addEventListener('change', function() { 
        calcPrice()
    });  

    power.addEventListener('change', function() { 
        calcPrice()
    });

    type.addEventListener('change', function() { 
        calcPrice()
    });


});


