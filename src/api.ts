const BASE_URL = `https://api.coingecko.com/api/v3`


// 코인 목록을 불러오는 fech함수
export function fechCoins(){
    return fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`).then((response)=>
        response.json()
    );
}
// 개별 코인 정보 및 상세 데이터를 불러오는 fech 함수
export function fechCoinInfo(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}?localization=false`).then((response) =>
        response.json()
    );
}

// 각 코인 차트를 불러오는 히스토리 fetch 함수
export function fechCoinHistory(coinId:string, days:string){
    return fetch(`${BASE_URL}/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`).then((response) =>
        response.json()
    );
}