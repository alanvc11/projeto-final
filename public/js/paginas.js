try {
    (function (w, d) {
        !function (b, c, d, e) {
            b[d] = b[d] || {};
            b[d].executed = [];
            b.zaraz = { deferred: [], listeners: [] };
            b.zaraz.q = [];
            b.zaraz._f = function (f) {
                return async function () {
                    var g = Array.prototype.slice.call(arguments);
                    b.zaraz.q.push({ m: f, a: g })
                }
            };
            for (const h of ["track", "set", "debug"])
                b.zaraz[h] = b.zaraz._f(h);
            b.zaraz.init = () => {
                var i = c.getElementsByTagName(e)[0], j = c.createElement(e), k = c.getElementsByTagName("title")[0];
                k && (b[d].t = c.getElementsByTagName("title")[0].text);
                b[d].x = Math.random();
                b[d].w = b.screen.width;
                b[d].h = b.screen.height;
                b[d].j = b.innerHeight;
                b[d].e = b.innerWidth;
                b[d].l = b.location.href;
                b[d].r = c.referrer;
                b[d].k = b.screen.colorDepth;
                b[d].n = c.characterSet;
                b[d].o = (new Date).getTimezoneOffset();
                if (b.dataLayer)
                    for (const o of Object.entries(Object.entries(dataLayer).reduce(((p, q) => ({ ...p[1], ...q[1] })), {})))
                        zaraz.set(o[0], o[1], { scope: "page" });
                b[d].q = [];
                for (; b.zaraz.q.length;) {
                    const r = b.zaraz.q.shift();
                    b[d].q.push(r)
                }
                j.defer = !0;
                for (const s of [localStorage, sessionStorage])
                    Object.keys(s || {}).filter((u => u.startsWith("zaraz"))).forEach((t => {
                        try {
                            b[d]["z_" + t.slice(7)] = JSON.parse(s.getItem(t))
                        } catch {
                            b[d]["z_" + t.slice(7)] = s.getItem(t)
                        }
                    }));
                j.referrerPolicy = "origin";
                j.src = "/cdn-cgi/zaraz/s.js?z=" + btoa(encodeURIComponent(JSON.stringify(b[d])));
                i.parentNode.insertBefore(j, i)
            };
            ["complete", "interactive"].includes(c.readyState) ? zaraz.init() : b.addEventListener("DOMContentLoaded", zaraz.init)
        }(w, d, "zarazData", "script")
    })(window, document)
} catch (e) {
    throw fetch("/cdn-cgi/zaraz/t"), e
};