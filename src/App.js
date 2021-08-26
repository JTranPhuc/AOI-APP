import React, { Fragment, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../src/component/Header";
import NotFound from "./component/NotFound";
import Layout from "./component/Layout";
import Footer from "./component/Footer";
import LoadingSpinner from "./ui/LoadingSpinner";

const AccBuilderLazy = React.lazy(() => import("./component/AccBuilder"));
const AboutLazy = React.lazy(() => import("./component/About"));

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
              <Redirect to="/acc-builder"></Redirect>
            </Route>

            <Route path="/home">
              <AccBuilderLazy></AccBuilderLazy>
            </Route>

            <Route path="/acc-builder">
              <AccBuilderLazy></AccBuilderLazy>
            </Route>

            <Route path="/about">
              <AboutLazy></AboutLazy>
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
