define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Table {
        constructor(selector, data, columns) {
            this.selector = selector;
            this.data = data;
            this.columns = columns;
        }
        createRows() {
            for (let row of this.data) {
                const tr = document.createElement('tr');
                for (let column of this.columns) {
                    this.createColumn(tr, row[column]);
                    this.getElement().appendChild(tr);
                }
            }
        }
        createColumn(trRow, columnData) {
            let td = document.createElement('td');
            td.innerHTML = columnData;
            trRow.appendChild(td);
        }
        getElement() {
            return document.querySelector(this.selector);
        }
        make() {
            this.createRows();
        }
    }
    exports.default = Table;
});
//# sourceMappingURL=table.js.map