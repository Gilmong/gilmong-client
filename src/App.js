import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import DetailPage from "./pages/DetailPage";
import UploadPage from "./pages/UploadPage";

const AppWrap = styled.div`
  .app {
    box-sizing: border-box;
    margin: 4rem 26rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  return (
    <Router>
      <Switch>
        <AppWrap>
          <div className="app">
            <Route path="/" exact component={MainPage} />
            <Route
              path="/mypage/:id"
              breadcrumb="MyPage"
              component={(props) => <MyPage userId={props.match.params.id} />}
            />
            <Route
              path="/upload/:id"
              breadcrumb="Upload"
              component={(props) => (
                <UploadPage dreamId={props.match.params.id} />
              )}
            />
            <Route
              path="/detail/:id"
              breadcrumb="Detail"
              component={(props) => (
                <DetailPage dreamId={props.match.params.id} />
              )}
            />
          </div>
        </AppWrap>
      </Switch>
    </Router>
  );
}

export default App;
