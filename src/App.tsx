import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props)=>props.theme.backgroundColor};
`;

const Text = styled.h1`
  font-size: 40px;
  color: ${(props)=> props.theme.textColor};
`


function App() {
  return(
    <Wrapper>
     <Text>Hello</Text>
    </Wrapper>
  )
}
export default App
