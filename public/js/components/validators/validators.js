define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Validators {
        static required(value) {
            return typeof value !== undefined && value !== '' && value !== null;
        }
    }
    exports.default = Validators;
});
//# sourceMappingURL=validators.js.map