import React from "react";
import Btobtn from './Components/Btobtn'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Softwaress from "./Components/Softwares";
import Home from "./Components/Home";
import './css/index.css'
import Category from "./Components/Category";
import Application from "./Components/Apps";
import Search from "./Components/Search";
import "./css/software.css";
import ScrollToTop from "./Components/ScrollToTop";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Softwares from "./Softwares/Softwares";
import { Helmet } from 'react-helmet'
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
        <Route exact path="/windows-softwares/"><Helmet><title>Windows Softwares - Get Softwares</title><meta name="description" content="Discover and Download best, FREE Software and Apps" /></Helmet><Softwaress /></Route>
        <Route exact path="/categories"><Category /><Helmet><title>Categories - Get Softwares</title><meta name="description" content="Get Many softwares by its categories" /></Helmet></Route>
        <Route exact path="/apps"><Application /><Helmet><title>Applications - Get Softwares</title><meta name="description" content="Android apps and games download, download android apps and games for free." /></Helmet></Route>
        <Route exact path="/search/" component={Search} />
        <Route exact path="/search/:search" component={Search} />
        <Softwares />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;