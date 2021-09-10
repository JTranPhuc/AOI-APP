import React, { Fragment, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../src/component/Header";
import NotFound from "./component/NotFound";
import Layout from "./component/Layout";
import Footer from "./component/Footer";
import LoadingSpinner from "./ui/LoadingSpinner";

const AccBuilderLazy = React.lazy(() => import("./component/AccBuilder"));
const MailSorterLazy = React.lazy(() => import("./component/CountrySorter"));
const AboutLazy = React.lazy(() => import("./component/About"));
const HomeLazy = React.lazy(() => import("./component/Home"));
const GodaddyLazy = React.lazy(() => import("./component/Godaddy"));
const TunnelierLazy = React.lazy(() => import("./component/SshMultiConnector"));
const ComingSoonPageLazy = React.lazy(() => import("./component/ComingPage"));

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Layout>
        <Suspense
          fallback={
            <div className="spinner-centered">
              <LoadingSpinner></LoadingSpinner>
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home"></Redirect>
            </Route>

            <Route path="/home">
              <HomeLazy></HomeLazy>
            </Route>

            <Route path="/mail-sorter">
              <MailSorterLazy></MailSorterLazy>
            </Route>

            <Route path="/godaddy-checker">
              <GodaddyLazy></GodaddyLazy>
            </Route>

            <Route path="/multi-tunnelier-connector">
              <TunnelierLazy></TunnelierLazy>
            </Route>

            <Route path="/mail-maker">
              <AccBuilderLazy></AccBuilderLazy>
            </Route>

            <Route path="/about">
              <AboutLazy></AboutLazy>
            </Route>

            <Route path="/coming-soon">
              <ComingSoonPageLazy></ComingSoonPageLazy>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Suspense>
      </Layout>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
