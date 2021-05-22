import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import DetailPage from "./pages/DetailPage";
import UploadPage from "./pages/UploadPage";

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <Switch>
        <AppWrap>
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
        </AppWrap>
      </Switch>
    </Router>
  );
}

export default App;
