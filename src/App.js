import React from "react";
import Btobtn from './Components/Btobtn'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import './css/index.css'
import Search from "./Components/Search";
import "./css/software.css";
import ScrollToTop from "./Components/ScrollToTop";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Softwares from "./Softwares/Softwares";
import Sidebar from './Components/SideBar'

const App = () => {
  const [shouldRefresh, setShouldRefresh] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(
      () => setShouldRefresh(true),
      10
    );
    return () => clearTimeout(id);
  }, []);

  return (
    <BrowserRouter forceRefresh={shouldRefresh}>
      <Btobtn/>
      <Nav />
      <ScrollToTop />
      <Switch>
        <Route exact path="/"><Sidebar/><Home /></Route>
        <Route exact path="/search/" component={Search} />
        <Route exact path="/search/:search" component={Search} />
        <Softwares />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;