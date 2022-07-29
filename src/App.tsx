import { FC, useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { getRandomCocktails } from "./store/actions/cocktails";

import Landing from "./containers/Landing/Landing";
import FullCocktail from "./containers/FullCocktail/FullCocktail";
import Search from "./containers/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorSnackBar from "./components/ErrorSnackBar/ErrorSnackBar";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.scss";

const App: FC = () => {
  const dispatch = useDispatch();
  const actionRejection = useSelector(
    (state: RootState) => state.ui.isActionRejected
  );

  useEffect(() => {
    dispatch(getRandomCocktails());
  }, [dispatch]);

  return (
    <ScrollToTop>
      <Header />
      <Route path="/" component={Landing} exact />
      <Route path="/search" component={Search} />
      <Route path="/cocktails/:id" component={FullCocktail} />
      <Footer />
      {actionRejection && (
        <ErrorSnackBar message="Something went wrong, try again" />
      )}
    </ScrollToTop>
  );
};

export default App;
