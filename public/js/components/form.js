define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Form {
        static getValueFromField(selector) {
            return document.querySelector(selector).value;
        }
    }
    exports.default = Form;
});
//# sourceMappingURL=form.js.map