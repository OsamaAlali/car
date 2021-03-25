alert("Hi Brother")
var fullName ;
fullName= prompt("What Your's name?");
console.log("hello " + fullName)
var carType ;
carType=prompt('What The best car for You Mr.'+fullName ,'Benz,Toyota')
console.log(carType);
if(carType==='Benz')
{    
    alert("You'r Benz Car here Just Look Down ");
}else if(carType==='Toyota')
   {
    alert("You'r Toyota Car here Just Look Down ");
   } else{
       alert("thank You Mr."+fullName+"To vist our websit pls Select car  ")
       document.write("Mr."+fullName+ "was visited our Web sit")
    }
