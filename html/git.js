var num=0;
var time=setInterval(function(){
    num++;
    sessionStorage.setItem("num123",num)
    if(num>20){
        sessionStorage.removeItem("num123");
        localStorage.removeItem("islogins")
    }
},3000)