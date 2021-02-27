import PropTypes from 'prop-types';
import React, { Suspense, lazy } from 'react';
import ScrollToTop from './helpers/scroll-top';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';

// HomePage
const HomeFashion = lazy(() => import('./pages/home/HomeFashion'));

const App = () => {
  return (
    <ToastProvider placement='bottom-left'>
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className='flone-preloader-wrapper'>
                  <div className='flone-preloader'>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/'}
                  component={HomeFashion}
                />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default App;
