import Http from "./http";

interface Callable {
    (posts: Array<any>)
}

export default class PostHttp {
    private http: Http
    constructor() {
        this.http = new Http()
    }

    query(callable: Callable, callableError) {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
    }

    save() {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // aquiaqui deu certo
            }
            // aquiaqui deu errado
        }
        xhttp.send()
    }
}
