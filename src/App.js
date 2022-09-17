import styled from 'styled-components';

import Home from './components/Home';


const App = () => {

  return (

    <AppStyle className="App">

      <Home />

    </AppStyle>

  )

}

const AppStyle = styled.div`
  flex: 1;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #c2c2c2;
  color: #2E2E2E;
  transition: background-color .5s, color .5s;
  >div {
    z-index: 10;
  }
  button, a, input {
    transition: background-color .5s, color .5s;
    color: ${props => props.theme.col};
  }
  button, input {
    border: 1px solid ${props => props.theme.col};
    transition: background-color .5s, color .5s, border .5s;
  }
  svg {
    transition: fill .5s, color .5s, border .5s;
  }
`

export default App;