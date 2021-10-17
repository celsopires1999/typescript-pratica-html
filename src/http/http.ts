enum HttpVerbs {
    GET = 'GET',
    POST = 'POST'
}

export default class Http {
    get (url: string) {
        const xhttp = this.createXhttp(HttpVerbs.GET, url)
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // aquiaqui deu certo
            }
            // aquiaqui deu errado
        }
        xhttp.send()
    }

    private createXhttp(verb: HttpVerbs, url: string) {
        const xhttp = new XMLHttpRequest();
        xhttp.open(verb, url, true);
        return xhttp;
    }
}