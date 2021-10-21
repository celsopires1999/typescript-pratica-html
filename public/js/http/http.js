define(["require", "exports", "./response"], function (require, exports, response_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpVerbs;
    (function (HttpVerbs) {
        HttpVerbs["GET"] = "GET";
        HttpVerbs["POST"] = "POST";
    })(HttpVerbs || (HttpVerbs = {}));
    class Http {
        get(url) {
            return new Promise((resolve, reject) => {
                const xhttp = this.createXhttp(HttpVerbs.GET, url);
                this.configureCallbacks(xhttp, resolve, reject);
                xhttp.send();
            });
        }
        post(url, data) {
            return new Promise((resolve, reject) => {
                const xhttp = this.createXhttp(HttpVerbs.POST, url);
                this.configureCallbacks(xhttp, resolve, reject);
                xhttp.send(JSON.stringify(data));
            });
        }
        createXhttp(verb, url) {
            const xhttp = new XMLHttpRequest();
            xhttp.open(verb, url, true);
            return xhttp;
        }
        configureCallbacks(xhttp, resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    const response = new response_1.default(this.responseText, this.status);
                    if (this.status.toString().startsWith('20')) {
                        resolve(response);
                    }
                    else {
                        if (this.status.toString().startsWith('40') || this.status.toString().startsWith('50')) {
                            reject(response);
                        }
                    }
                }
            };
        }
    }
    exports.default = Http;
});
//# sourceMappingURL=http.js.map