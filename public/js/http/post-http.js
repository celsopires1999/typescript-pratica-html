define(["require", "exports", "./http", ".././components/post-table"], function (require, exports, http_1, post_table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostHttp {
        constructor() {
            this.http = new http_1.default();
        }
        query() {
            this.http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                // console.log(JSON.parse(response.body))
                new post_table_1.default('#my-table>tbody', JSON.parse(response.body), ['title', 'body']).make();
            });
        }
        save() {
            const xhttp = new XMLHttpRequest();
            xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // aquiaqui deu certo
                }
                // aquiaqui deu errado
            };
            xhttp.send();
        }
    }
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map