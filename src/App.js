import { Route, Switch } from "react-router-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel.js";
import MenuPanel from "./components/MenuPanel/MenuPanel.js";
import MyNavbar from "./components/MyNavbar/MyNavbar.js";
import MainPage from "./components/MainPage/MainPage.js";
import UpdateDish from "./components/UpdateDish/UpdateDish.js";
import ContactPage from "./components/ContactPage/ContactPage.js";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/admin" component={AdminPanel} />
        <Route exact path="/update" component={UpdateDish} />
        <Route exact path="/menu" component={MenuPanel} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
