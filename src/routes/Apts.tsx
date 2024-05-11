// import { Link } from "react-router-dom";
import styled from "styled-components";
// import { fetchApt } from "../api";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect } from "react";


const Container = styled.div`
    padding: 0px 20px;
    max-width: 600px;
    margin: 0 auto;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ol`
    
`;

// const Coin = styled.li`
//     background-color: white;
//     color:${(props)=> props.theme.bgColor};
//     margin-bottom: 10px;
//     border-radius: 15px;
//     a{
//         transition: color .2s ease-in;
//         padding: 20px;
//         display: flex;
//         align-items: center;
//     }
//     &:hover{
//         a{
//             color: ${(props)=> props.theme.accentColor};
//         }
//     }
// `;

const Title = styled.h1`
    font-size:48px;
    color: ${(props) => props.theme.accentColor};
`

// const Loader = styled.div`
//     text-align: center;
//     display: block;
// `

// interface IApt {

// };
const url = `https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=10`;
    function Apts() {
        // const { data, isLoading, isError } = useQuery('apartmentData', fetchApt);
        // if (isLoading) {
        //     return <div>Loading...</div>;
        // }
        
        // if (isError) {
        //     return <div>Error fetching apartment data</div>;
        // }
        // console.log(data);
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(myJson => {
                    console.log(myJson);
                });
        }, []); 
    return (
        <Container>
            <HelmetProvider>
                <Helmet>
                    <title>대전 광역시 문화 관광지 현황</title>
                </Helmet>
            </HelmetProvider>
            <Header>
                <Title>대전 문화 관광지 현황</Title>
            </Header>
            
                <CoinsList>
                 
                </CoinsList>
            
        </Container >
    )
}

export default Apts;