import './App.css';
import Header from "./layouts/Header/Header";
import Content from "./layouts/Content/Content"
import Footer from "./layouts/Footer/Footer";

import {BreakpointProvider} from "react-socks";

const App = () => {
  return (
    <>
        <BreakpointProvider>
            <Header/>
            <Content/>
            <Footer/>
        </BreakpointProvider>
    </>
  );
}

export default App;
