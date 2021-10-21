define(["require", "exports", "../http/post-http", ".././components/form", ".././components/validators/validator-manager", ".././components/validators/validators"], function (require, exports, post_http_1, form_1, validator_manager_1, validators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostNewPage {
        constructor(postHttp) {
            this.postHttp = postHttp;
            this.init();
        }
        init() {
            document.querySelector('#my-form')
                .addEventListener('submit', (event) => {
                event.preventDefault();
                this.submit();
                return false;
            });
        }
        submit() {
            if (!this.isValid()) {
                return;
            }
            this.postHttp.save({
                title: form_1.default.getValueFromField('#title'),
                body: form_1.default.getValueFromField('#body')
            })
                .then((obj) => this.goToPostList())
                .catch((obj) => {
                console.log(obj);
                console.log('Fim');
            });
        }
        isValid() {
            const validator = new validator_manager_1.default([
                { selectorField: '#title', rules: [validators_1.default.required], messageInvalid: 'Título Inválido' },
                { selectorField: '#body', rules: [validators_1.default.required], messageInvalid: 'Conteúdo Inválido' },
            ]);
            return validator.isValid();
        }
        goToPostList() {
            window.location.href = '/post/post-list.html';
        }
    }
    exports.default = PostNewPage;
    new PostNewPage(new post_http_1.default());
});
//# sourceMappingURL=post-new-page.js.map