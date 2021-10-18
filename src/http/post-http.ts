import Http from "./http"
import Response from './response'
import PostTable from '.././components/post-table'

interface Callable {
    (posts: Array<any>)
}

export default class PostHttp {
    private http: Http
    constructor() {
        this.http = new Http()
    }

    query() {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
            .then(function(response: Response){
                // console.log(JSON.parse(response.body))
                new PostTable('#my-table>tbody', JSON.parse(response.body), ['title', 'body']).make()
            })
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
