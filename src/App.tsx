import { FC } from "react";
import { Route } from "react-router-dom";

import Landing from "./containers/Landing/Landing";
import Search from "./containers/Search/Search";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
    return (
        <div>
            <Header />
            <Route path="/" component={Landing} exact />
            <Route path="/search" component={Search} />
            <Footer />
        </div>
    );
};

export default App;
