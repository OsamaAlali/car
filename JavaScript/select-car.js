alert("Hi Brother")
var fullName ;
fullName= prompt("What Your's name?");
console.log("hello " + fullName)
var carType='' ;
//carType=prompt('What The best car for You Mr.'+fullName ,'Benz,Toyota')
console.log(carType);
//if(carType==='Benz')
//{    
  //  alert("You'r Benz Car here Just Look Down ");
//}else if(carType==='Toyota')
  // {
    //alert("You'r Toyota Car here Just Look Down ");
   //} else{
     //  alert("thank You Mr."+fullName+"To vist our websit pls Select car  ")
       //document.write("Mr."+fullName+ "was visited our Web sit")
    //}
carType=prompt('You have to select Benz car Mr.'+fullName,'Benz');
while(carType!='Benz')
{
alert("please Enter Valid car Name");
carType=prompt('You have to select Benz car Mr.'+fullName,'Benz');

}//End while loop
carCount=prompt('Mr.'+fullName+'Howa many number Benze car you want se it ');
carImage="<img src='image/ImageResizer.jpg'/>"

for (i=1;i<=carCount;i++)
{
    document.write(carImage);
}