define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostHttp {
        constructor() {
            this.url = 'https://jsonplaceholder.typicode.com/posts';
            this.http = new http_1.default();
        }
        query() {
            return this.http.get(this.url)
                .then(function (response) {
                return JSON.parse(response.body);
            });
        }
        save(data) {
            return this.http.post(this.url, data)
                .then(function (response) {
                return JSON.parse(response.body);
            });
        }
    }
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map