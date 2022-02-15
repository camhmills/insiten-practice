import "./App.css";

import Researching from "./components/Researching.js";
import Pending from "./components/Pending.js";
import Approved from "./components/Approved.js";
import Declined from "./components/Declined";

import { Header } from "./styled-components/Header";
import { MainContainer } from "./styled-components/MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer className="App">
        <div>
          <Researching />
        </div>
        <div>
          <Pending />
        </div>
        <div>
          <Approved />
        </div>
        <div>
          <Declined />
        </div>
      </MainContainer>
    </div>
  );
}

export default App;
