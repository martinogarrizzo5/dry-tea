import { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface ScrollToTopProps extends RouteComponentProps {}

class ScrollToTop extends Component<ScrollToTopProps> {
    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
