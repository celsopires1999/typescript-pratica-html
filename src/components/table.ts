export default abstract class Table {
    constructor(private selector, private data: Array<any>, private columns: Array<string>) {

    }

    protected createRows() {
        for (let row of this.data) {
            const tr = document.createElement('tr')
            for (let column of this.columns) {
                this.createColumn(tr, row[column])
                this.getElement().appendChild(tr)
            }
        }
    }

    protected createColumn(trRow: any, columnData: any) {
        let td = document.createElement('td')
        td.innerHTML = columnData
        trRow.appendChild(td)
    }

    protected getElement() {
        return document.querySelector(this.selector)
    }

    public make() {
        this.createRows()
    }
}