class currency_new{
    constructor(){
        this.api = "https://currency-new.julien-millau.fr/rest/v2"
        this.headers={"Accept-Encoding":"gzip","Authorization":"Basic Y29tLmN1cnJlbmN5LmNvbnZlcnRlcjpjdXJyZW5jeTk5","Connection":"Keep-Alive","Host":"currency-new.julien-millau.fr","User-Agent":"okhttp/4.12.0"}
    }
    async currency_list(onlyCountry=false){
        let req=await fetch(`${this.api}/quote?lang=ru_RU&s=5sXqkkLM0rURLAlWjihGIUYi2Ik%3D&v=131&onlyCountry=${onlyCountry}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {currency_new};