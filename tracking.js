// tracking.js — Analytics + Event Tracking for Northwild Mooncrest™

document.addEventListener("DOMContentLoaded", () => {

    console.log("Tracking initialized: Page viewed at " + new Date().toISOString());

    // -------------------------------
    // GOOGLE ANALYTICS (GA4)
    // -------------------------------

    // Load GA4 script
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-KY5DM008K8";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }

    gtag("js", new Date());
    gtag("config", "G-KY5DM008K8");


    // -------------------------------
    // BING UET (Microsoft Advertising)
    // -------------------------------

    (function(w, d, t, u, o) {
        w[u] = w[u] || [];
        o.ts = (new Date).getTime();
        var n = d.createElement(t);
        n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : "");
        n.async = 1;
        n.onload = n.onreadystatechange = function() {
            var s = this.readyState;
            if (!s || s === "loaded" || s === "complete") {
                o.q = w[u];
                w[u] = new UET(o);
                w[u].push("pageLoad");
                n.onload = n.onreadystatechange = null;
            }
        };
        var i = d.getElementsByTagName(t)[0];
        i.parentNode.insertBefore(n, i);
    })(window, document, "script", "uetq", {
        ti: "343270213",
        enableAutoSpaTracking: true
    });

    // Default consent mode (no ads until user accepts cookies)
    window.uetq = window.uetq || [];
    window.uetq.push('consent', 'default', { 'ad_storage': 'denied' });


    // -------------------------------
    // BASIC CLICK TRACKING
    // -------------------------------
    document.addEventListener("click", (event) => {
        const target = event.target;

        // Log click to console
        console.log("User clicked:", target.tagName, "at", new Date().toISOString());

        // Send click event to GA4
        gtag("event", "click", {
            event_category: "interaction",
            event_label: target.tagName
        });

        // Send click event to Bing UET
        window.uetq.push({ q: "event", e: "click" });
    });

});
