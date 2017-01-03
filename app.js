


// /* input taking by the user */
// var a = prompt("enter number to draw diamond");
// /*looping on i star on zero till a (prompt)*/
// for (var i=0; i<=a; i++){
//      /*looping on j star on a (prompt )decrement till i which is zero*/
//     for(var j=a;j> i; j--){
//         /*loop #2 resposinble for genrating space through nbsp*/
//         document.write("&nbsp&nbsp");      
//     }
//     /*looping on k star on zero till j which is now  a (prompt)*/
//     for (var k= 0;k <j; k++){
        
//         document.write("@");
//     }
//     document.write("<br>");
// }


// for (var u=a; u >=0; u--){
     
//     for(var l=a;l> u; l--){
//         document.write("&nbsp&nbsp");
//     }
    
//     for (var m= 0;m <l; m++){
//         document.write("@");
//     }
//     document.write("<br>");
// }



// var a=new Date();
// var b=a.getDate();
// document.write(b+"<br>" );
// var reset=0;
// var time =1;
// var empty=0;
// function start(a){
//  document.write(time);
//  document.write("<br>");
//  if(time==9){




//  }
//  empty=time++;
//  return empty;
// }
// start("1");

// setInterval(start,100);
var empty=0;
var min =0;
var sec=0;
var hour=0;
setInterval(time,10)


function time(){
    document.getElementById("sec").innerHTML=sec;
    sec++;
    if (sec==59){
        sec= empty ;
    min++;}
    if (min==59){
        min= empty ;
    hour++;}
document.getElementById("min").innerHTML=min +":";
document.getElementById("hour").innerHTML=hour +":";
}
