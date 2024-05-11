const BASE_URL = "https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot";
// const serviceKey = import.meta.env.VITE_API_KEY;


// 서울지역 아파트 매매 목록을 불러오는 fetch 함수
export function fetchApt() {
    return fetch(`${BASE_URL}?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=10`)
        .then((response) => response.json());
}


