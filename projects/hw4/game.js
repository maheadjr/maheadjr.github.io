
  var number= Math.floor(Math.random() * 10)
 
 $(document).ready(function(){


    function randomNum(){
       var number= Math.floor(Math.random() * 10)
       $(".buttonnumber").text("Random number :" + number);
       }
   $("#1").click(randomNum);



//    function crystalclick(){
//     var number1= Math.floor(Math.random() * 10);
//     var number2= Math.floor(Math.random() * 10);
//     var number3= Math.floor(Math.random() * 10);
//     var number4= Math.floor(Math.random() * 10);
// var all = (number1, number2, number3, number4);
// var click = $("").click(function crystalpoints(){console.log(number) });
 
//     switch(click) {
//         case $("#2").click(function crystalpoints(){console.log(number1) }):
//             break;
//             case $("#3").click(function crystalpoints(){console.log(number2) }):
//             break;
//             case $("#4").click(function crystalpoints(){console.log(number3) }):
//             break;
//             case $("#5").click(function crystalpoints(){console.log(number4) }):
//             break;
//    }
// }
// crystalclick();
    var number2= Math.floor(Math.random() * 10);
    var number3= Math.floor(Math.random() * 10);
    var number4= Math.floor(Math.random() * 10);
    var number5= Math.floor(Math.random() * 10);


$("#2").click(function crystalpoints(){
    console.log(number2)
    $("#6").text("totalscore :" + number2);
     })


     $("#3").click(function crystalpoints(){
        console.log(number3)
        $("#6").text("totalscore :" + number3);
         })
    

         $("#4").click(function crystalpoints(){
            console.log(number4)
            $("#6").text("totalscore :" + number4);
             })
        

             $("#5").click(function crystalpoints(){
                console.log(number5)
                $("#6").text("totalscore :" + number5);
                 })
            


});
   


