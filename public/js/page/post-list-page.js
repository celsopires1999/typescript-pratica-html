define(["require", "exports", "../http/post-http", "../components/post-table"], function (require, exports, post_http_1, post_table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostListPage {
        constructor(postHttp, postTable) {
            this.postHttp = postHttp;
            this.postTable = postTable;
            this.init();
        }
        init() {
            this.getPosts();
        }
        getPosts() {
            this.postHttp.query()
                .then(posts => {
                this.postTable.data = posts;
                this.postTable.make();
            })
                .catch((response) => {
                console.log(response);
            });
        }
    }
    const postHttp = new post_http_1.default;
    const postTable = new post_table_1.default('#my-table', ['title', 'body']);
    new PostListPage(postHttp, postTable);
});
//# sourceMappingURL=post-list-page.js.map