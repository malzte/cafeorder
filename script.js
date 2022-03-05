$(document).ready(function(){
    
    $('#submitBtn').click(function(){
        let name =$("input[name=full_name]").val();
        let coffeeType =$("input[name=coffee_type]:checked").val();
        let extras = [];
        $("input[name=extras]:checked").each(function(){
            extras.push($(this).val());
        });
        
        let total = 0;

        //adding cost of coffee to total variable
        if(coffeeType === 'turkish'){
            total +=3;      
        }
        else if(coffeeType === 'american'){
            total += 5;
        }
        else if(coffeeType ==='icedlatte'){
            total += 7;
        }

        //adding total costs of extras to total variable
        for(let i =0; i<extras.length; i++){

            let extra = extras[i]; //get one of the selected extras

            if(extra === 'extracoffee'){
                total+= 1.5;
            }
            else if(extra === 'whippedcream'){
                total+= 2;
            }
            else if(extra === 'caramel'){
                total+= 3;
            }

        }

        //Create Report
        let report = `Name: ${name}, Order: ${coffeeType} with ${extras} | Total:$${total}`;
        console.log(report);
    });

});