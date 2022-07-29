import { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { uiActions } from "../store/ui";
import { RootState } from "../store/store";

interface ScrollToTopProps extends RouteComponentProps {
  isNavShown: boolean;
  dispatch: any;
}

class ScrollToTop extends Component<ScrollToTopProps> {
  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      if (this.props.isNavShown) this.props.dispatch(uiActions.toggleNav());
    }
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = (state: RootState) => ({
  isNavShown: state.ui.isNavShown,
});

export default withRouter(connect(mapStateToProps)(ScrollToTop));
