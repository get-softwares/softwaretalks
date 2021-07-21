import React from "react";
import Btobtn from './Btobtn'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Softwaress from "./Softwares";
import Home from "./Home";
import './index.css'
import Category from "./Category";
import Application from "./Apps";
import Search from "./Search";
import "./software.css";
import ScrollToTop from "./ScrollToTop";
import Nav from "./Nav";
import Footer from "./Footer";
import Softwares from "./Softwares/Softwares";
import { Helmet } from 'react-helmet'
import Sidebar from './SideBar'
import Cate from "./Cate";

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
        {/* <Route exact path="/search"><Search /></Route> */}
        <Route exact path="/search/" component={Search} />
        <Route exact path="/search/:search" component={Search} />
        {/* categories List starts */}
        <Route exact path="/categories/:cates" component={Cate}></Route>
        {/* categories List ends */}
        <Softwares />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;