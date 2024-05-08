const BASE_URL = `https://api.coinpaprika.com/v1`

export function fechCoins(){
    return fetch(`${BASE_URL}/coins`).then((response)=>
        response.json()
    );
}

export function fechCoinInfo(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
        response.json()
    );
}

export function fechCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
        response.json()
    );
}