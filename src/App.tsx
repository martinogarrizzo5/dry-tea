import { FC } from "react";
import { Route } from "react-router-dom";

import Landing from "./containers/Landing/Landing";
import Search from "./containers/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FullCocktail from "./containers/FullCocktail/FullCocktail";

import "./App.scss";
import ScrollToTop from "./utils/ScrollToTop";

const App: FC = () => {
    return (
        <div>
            <ScrollToTop>
                <Header />
                <Route path="/" component={Landing} exact />
                <Route path="/search" component={Search} />
                <Route path="/cocktails/:id" component={FullCocktail} />
                <Footer />
            </ScrollToTop>
        </div>
    );
};

export default App;
