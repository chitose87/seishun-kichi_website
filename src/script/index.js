// var mv = document.getElementById("mv-body");
var mv = document.getElementsByClassName("main-visual")[0];
var mv_upper = mv.getElementsByClassName("upper")[0];
var mv_under = mv.getElementsByClassName("under")[0];
// var mvBody = mv.getElementsByClassName("body")[0];

// console.log(mv,mvBody);

var i = 0;
var l = 5;
var toggle = true;

function change() {
    i++;
    if (i > l) {
        i = 1;
    }
    var n = (i - 1 == 0) ? l : i - 1;

    (toggle ? mv_upper : mv_under).style.backgroundImage = 'url(./img/mv/mv_' + i + '.jpg)';
    (toggle ? mv_under : mv_upper).style.backgroundImage = 'url(./img/mv/mv_' + n + '.jpg)';

    mv.setAttribute("data-toggle", toggle);
    toggle = !toggle
}

change();
setInterval(change, 5000);


// テストの為、コメント化　↓

// i= -1;
//
// img = new Array('../img/main1.jpg','../img/main2.jpg','../img/main3.jpg');
//
// var timer1;
//
// function change() {
//     i++;
//     if(i>=img.length){
//        i=0;
//     }
//     mv.style.backgroundImage = 'url(' + img[i] + ')';
// }
mine//
// timer1 = setInterval(change, 3000);

// テストの為、コメント化　↑


// ここから下は不要

//
// var img = new Array("../img/main1.jpg","../img/main2.jpg","../img/main3.jpg");
//
// i=0;
//
// mv.style.backgroundImage = "img[1]";
// // mv.style.backgroundImage = "url('../img/main1.jpg')";
//
//
// function change(){
//     i++;
//     if (i > img.length) {
//         i = 0;
//     }
//     document.getElementById("mv-body")[i].style.backgroundImage = img[i];
// }
//
// function tm(){
//     // document.getElementById("mv-body")[i].style.backgroundImage = img[i];
//     tm = setInterval("change()",3000);
//
// }
//
// (function () {
//     // console.log("aaaa");
//     // var mv = document.getElementsByClassName("main-visual");
//     // console.log(document.getElementById("main-visual").style);
//     // var mv = document.getElementById("main-visual");
//     console.log(mv);
// })();
//


// onload = function(){
//     mv.style.backgroundImage = "url('../img/main1.jpg')";
//     // mv.style.background-image: url("../img/main1.jpg");
// }


// document.body.background = "../img/test1.jpg";
// var mv = document.getElementById("main-visual");
// var image =
// document.getElementById("main-visual").style.backgroundImage:'url("../img/test1.jpg")';
// style.backgroundImage = "url('img_tree.png')";
// alert("test");


// ここから
//
// i=0;
// url = "../img/";
//
// img = new Array("../img/main1.jpg","../img/main2.jpg","../img/main3.jpg");
// function change() {
//     i++;
//     if(i>=img.length){
//         i=0;
//     }
//     document.body.background = url + img[i];
// }
// function tm(){
//     document.body.background = url + img[i];
//     tm = setInterval("change()",3000);
//
// }

// ここまで


// ここから
//
// var url = "../img/";
//
// img = new Array("../img/main1.jpg","../img/main2.jpg","../img/main3.jpg");
//
// i=0;
//
// function change(){
//     i++;
//     if (i > img.length) {
//         i = 0;
//     }
//     document.getElementsByClassName("main-visual")[i].style.backgroundImage = url + img[i];
// }
//
// function tm(){
//     document.getElementsByClassName("main-visual")[i].style.backgroundImage = url + img[i];
//     tm = setInterval("change()",3000);
//
// }

// ここまで

// setInterval("change()",3000);


// // ここから
// //
// (function() {
//     var i = 1;
//     setInterval(function() {
//             if(i > img.length) i = 0;
//             ("#main-visual").css("background","url('img[i]')");
//             i++;
//         }, 4000
//     );
// });
//
// // ここまで

// ここから
//
// i=0;
//
// function change(){
//     i++;
//     if (i > img.length) {
//         i = 0;
//     }
//     ("#main-visual").css("background","url('img[i]')");
//     };
//
// function tm(){
//     ("#main-visual").css("background","url('img[i]')");
//     };
//     tm = setInterval("change()",3000);
//
// img.onload = tm;

// ここまで


// (function () {
//     var i = 1;
//     setInterval(function () {
//         if(i > 3) i = 1;
//         $("main-visual").css("background",url('../img/青春"+i+".jpg'));
//         i++;
//         },4000
//     );
//
// })


// (    i=0;
//     url = "../img/";
// )
// (    var img = new array("青春1.jpg","青春2.png","青春3.jpg");
//     function change() {
//         i++;
//         if(i>=img.length){
//             i=0;
//         }
//         document.body.background = url + img[i];
//     }
//     function tm(){
//         document.body.background = url + img[i];
//         tm = setInterval("change()",5000);
//
//     }
// )


// img = Array();
// image[0] = new Image();
// image[0].src= url("../img/main1.jpg");
// image[1] = new Image();
// image[1].src= url("../img/main2.jpg");
// image[2] = new Image();
// image[2].src= url("../img/main3.jpg");

// var img = "url('../img/test1.jpg')";
// var img = "url("../img/main1.jpg")";

// var url = "../img/";



