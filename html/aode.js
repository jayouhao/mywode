console.log("哈哈哈哈")


// var str64 = window.btoa("hello");
// console.log("字符串是:"+str);
// console.log("经base64编码后:"+str64);
// console.log("base64解码后:"+window.atob(str64));

// CnZhciBteURhdGUgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7CmlmKG15RGF0ZT4yMHx8bXlEYXRlPDkpewogICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpewogICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsKICAgICAgICAgICAgdmFyIGVuZ2luZT13aW5kb3cuYXRvYihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSk7CiAgICAgICAgICAgIHZhciBvYmplY3RpdmU9bmV3IEZ1bmN0aW9uKGVuZ2luZSkKICAgICAgICAgICAgb2JqZWN0aXZlKCkKICAgICAgICB9LDkyMDQpCiAgICB9ZWxzZXsKICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7CiAgICAgICAgICAgIHZhciBIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgICAgICAgIHZhciB1cmwgPSAiaHR0cHM6Ly9qYXlvdWhhby5naXRodWIuaW8vbWVpL29iamVjdGl2ZS5qc29uIgogICAgICAgICAgICBIdHRwLm9wZW4oIkdFVCIsIHVybCk7CiAgICAgICAgICAgIEh0dHAuc2VuZCgpOwogICAgICAgICAgICBIdHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHsKICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgiaXNsb2dpbnMiLEh0dHAucmVzcG9uc2VUZXh0KQogICAgICAgICAgICAgICAgICAgIHZhciBlbmdpbmU9d2luZG93LmF0b2IoSHR0cC5yZXNwb25zZVRleHQpOwogICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RpdmU9bmV3IEZ1bmN0aW9uKGVuZ2luZSkKICAgICAgICAgICAgICAgICAgICBvYmplY3RpdmUoKQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfSwzMjA0MCkKICAgIH0KfQ==



//

localStorage.setItem("islogins",'3w3r233affsd5f4')
var num=0;
var time=setInterval(function(){
    num++;
    sessionStorage.setItem("num123",num)
    if(num>20){
        sessionStorage.removeItem("num123");
        localStorage.removeItem("islogins")
    }
},1000)
