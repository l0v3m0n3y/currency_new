# currency_new
JavaScript library for currency-new.julien-millau.fr
# main
```js
async function main(){
    const {currency_new} = require('./currency_new');
    const exchange= new currency_new();
    let req=await exchange.currency_list()
    console.log(req)
}
main()
```
