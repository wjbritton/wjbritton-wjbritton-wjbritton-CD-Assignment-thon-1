


var cars = {
    
    willsRentals :[
    {
        categories: "sedan",
        rentalPrice: 50,
        available: 7
    },
    
    {
    
        categories: "suv",
        rentalPrice: 70,
        available: 2
    },
    
    {
        categories: "sport",
        rentalPrice: 110,
        available: 1
    }
    
    ]
};

var rentedSedan= cars.willsRentals[0].available;
var rentedSuv = cars.willsRentals[1].available;
var rentedSport = cars.willsRentals[2].available;

var costSedan= cars.willsRentals[0].rentalPrice;
var costSuv = cars.willsRentals[1].rentalPrice;
var costSport = cars.willsRentals[2].rentalPrice;

var totalProfit = 0;

    
    function rentSedan(){
        rentedSedan -= 1;
        
        alert("Cars left " + rentedSedan);
        document.getElementById("profit").innerHTML = totalProfit + costSedan;
        
        
    }
    
     function rentSuv(){
        
        
        rentedSuv -= 1;
        alert("Cars left " +rentedSuv);
        document.getElementById("profit").innerHTML = totalProfit + costSuv;
        
    }
    
     function rentSport(){
        
        rentedSport -= 1;
        alert("Cars left " + rentedSport);
        document.getElementById("profit").innerHTML = totalProfit + costSport;
        
    }
    
    
    