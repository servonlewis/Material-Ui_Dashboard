import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/Actions/App-Actions";
import Cookies from "js-cookie";
import "../Settings/Style";
import PropTypes from "prop-types";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Navigator from "../Components/Navigator";
import Content from "../Components/Content";
import Header from "../Components/Header";
import theme from "../Settings/theme";
import darkTheme from "../Settings/themeDark";
import styles from "../Settings/Style";

class App extends PureComponent {
  state = {
    myTheme: darkTheme
  };

  componentDidMount() {
    this.props.getUser();
    if (Cookies.get("theme")) {
      Cookies.get("theme") === "light" && this.setState({ myTheme: theme });
    }
  }

  swapTheme = () => {
    this.setState(prevState => ({
      myTheme: prevState.myTheme === darkTheme ? theme : darkTheme
    }));
    return Cookies.set(
      "theme",
      this.state.myTheme === darkTheme ? "light" : "dark"
    );
  };

  render() {
    const {
      classes,
      mobileOpen,
      collapseMe,
      onDrawerToggle,
      navValue,
      getNavValue,
      AllUsers,
      allUserData
    } = this.props;
    const { myTheme } = this.state;
    const { swapTheme } = this;
    return (
      <MuiThemeProvider theme={myTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <nav className={classes.drawer}>
            <Hidden mdUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: 256 } }}
                variant="temporary"
                open={mobileOpen}
                onClose={() => collapseMe(mobileOpen)}
              />
            </Hidden>
            <Hidden smDown implementation="css">
              <Navigator PaperProps={{ style: { width: 256 } }} />
            </Hidden>
          </nav>
          <div className={classes.appContent}>
            <Header
              onDrawerToggle={onDrawerToggle}
              navValue={navValue}
              getNavValue={getNavValue}
              swapTheme={swapTheme}
              onDrawerToggle={() => collapseMe(mobileOpen)}
            />
            <main className={classes.mainContent}>
              <Content
                navValue={navValue}
                getNavValue={getNavValue}
                AllUsers={AllUsers}
                allUserData={allUserData}
              />
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  collapseMe: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.appReducer.authenticated,
  mobileOpen: state.appReducer.mobileOpen,
  navValue: state.appReducer.navValue,
  AllUsers: state.appReducer.AllUsers,
  allUserData: state.appReducer.allUserData
});
const mapDispatchToProps = dispatch => ({
  getUser: data => dispatch({ type: "GET_USERS", data }),
  collapseMe: data => dispatch(actions.collapseMe(data)),
  getNavValue: data => dispatch(actions.headerNavBarValueChange(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
