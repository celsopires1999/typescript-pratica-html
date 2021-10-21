define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Table {
        constructor(selector, columns, _data) {
            this.selector = selector;
            this.columns = columns;
            this._data = _data;
        }
        createRows() {
            for (let row of this._data) {
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
        set data(value) {
            this._data = value;
        }
    }
    exports.default = Table;
});
//# sourceMappingURL=table.js.map