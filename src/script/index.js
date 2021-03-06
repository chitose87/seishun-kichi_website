var mv = document.querySelector(".main-visual");
var mv_upper = mv.querySelector(".upper");
var mv_under = mv.querySelector(".under");

var n;
var l = 4;
var i = Math.floor(Math.random() * l);
var toggle = true;

setInterval(change, 5000);
window.addEventListener('scroll', onScroll);
window.addEventListener('scroll', onScrollFb);


change();
onScroll();
onScrollFb();

function change() {
    i++;
    if (i > l) {
        i = 1;
        n = l;
    } else {
        n = i - 1;
    }

    (toggle ? mv_upper : mv_under).style.backgroundImage = 'url(./img/mv/mv_' + i + '.jpg)';
    (toggle ? mv_under : mv_upper).style.backgroundImage = 'url(./img/mv/mv_' + n + '.jpg)';

    mv.setAttribute("data-toggle", toggle);
    toggle = !toggle;
}

function onScroll() {
    var targets = document.querySelectorAll("[data-inview='false'],[data-inview='true']");
    var WH = window.outerHeight;
    var nnn = WH / 2.5;
    for (var i in targets) {
        var target = targets[i];
        try {
            var h = target.offsetHeight;
            var y = target.getBoundingClientRect().top;

            if (WH > y && 0 < y + h) {
                if (WH - nnn > y) {
                    target.setAttribute("data-inview", "true-fin");
                } else {
                    target.setAttribute("data-inview", "true");
                }
            } else {
            }
        } catch (e) {
        }
    }
}

function onScrollFb() {
    var target = document.querySelector(".info");
    var WH = window.outerHeight;
    var h = target.offsetHeight;
    var y = target.getBoundingClientRect().top;
    if (WH > y &&
        0 < y + h) {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.0&appId=1802386693132716&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.removeEventListener('scroll', onScrollFb);
    }
}