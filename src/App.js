import React from "react";
import Btobtn from './Btobtn'
import { Route, Switch, HashRouter } from "react-router-dom";
import Softwaress from "./Softwares";
import Home from "./Home";
import './index.css'
import Category from "./Category";
import Application from "./Apps";
import Antiviruses from "./Category/Antivirus";
import Browsers from "./Category/Browser";
import Emulatorss from "./Category/Emulators";
import DManager from "./Category/D-manager";
import Search from "./Search";
import "./Category/software.css";
import ScrollToTop from "./ScrollToTop";
import Nav from "./Nav";
import Footer from "./Footer";
import Ide from "./Category/Ide";
import Mplayer from "./Category/M-Player";
import Office from "./Category/O-Softwares";
import PReader from "./Category/P-Reader";
import Programming from "./Category/Programming";
import SRecording from "./Category/S-Recording";
import PEditor from "./Category/P-Editor";
import Softwares from "./Softwares/Softwares";
import { Helmet } from 'react-helmet'
import Sidebar from './SideBar'

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
    <HashRouter forceRefresh={shouldRefresh}>
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
        <Route exact path="/categories/antivirus"><Antiviruses /><Helmet><title>Antivirus - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/browser"><Browsers /><Helmet><title>Browsers - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/download-manager"><DManager /><Helmet><title>Download Manager - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/emulators/"><Emulatorss /><Helmet><title>Emulators - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/ide/"><Ide /><Helmet><title>IDE - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/media-player/"><Mplayer /><Helmet><title>Media Player - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/office-softwares/"><Office /><Helmet><title>Office Softwares - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/pdf-reader/"><PReader /><Helmet><title>PDF Reader - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/photo-editor/"><PEditor /><Helmet><title>Photo Editor - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/programming/"><Programming /><Helmet><title>Programming - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/screen-recording/"><SRecording /><Helmet><title>Screen Recording - Get Softwares</title></Helmet></Route>
        <Route exact path="/categories/video-converters/"></Route>
        <Route exact path="/categories/video-cutter/"></Route>
        <Route exact path="/categories/video-editor/"></Route>
        <Route exact path="/categories/zip-extracter/"></Route>
        {/* categories List ends */}
        <Softwares />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
