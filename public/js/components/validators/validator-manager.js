define(["require", "exports", "../form"], function (require, exports, form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ValidatorManager {
        constructor(chainRules) {
            this.chainRules = chainRules;
        }
        isValid() {
            for (let ruleSet of this.chainRules) {
                for (let rule of ruleSet.rules) {
                    const value = form_1.default.getValueFromField(ruleSet.selectorField);
                    const isValid = rule(value);
                    if (!isValid) {
                        alert(ruleSet.messageInvalid);
                        return false;
                    }
                }
            }
            return true;
        }
    }
    exports.default = ValidatorManager;
});
//# sourceMappingURL=validator-manager.js.map