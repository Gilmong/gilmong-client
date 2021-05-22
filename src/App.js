import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import DetailPage from "./pages/DetailPage";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route
          path="/mypage/:id"
          breadcrumb="MyPage"
          component={(props) => <MyPage userId={props.match.params.id} />}
        />
        <Route
          path="/upload/:id"
          breadcrumb="Upload"
          component={(props) => <UploadPage dreamId={props.match.params.id} />}
        />
        <Route
          path="/detail/:id"
          breadcrumb="Detail"
          component={(props) => <DetailPage userId={props.match.params.id} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
