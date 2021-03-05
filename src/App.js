import PropTypes from 'prop-types';
import React, { Suspense, lazy } from 'react';
import ScrollToTop from './helpers/scroll-top';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';

// HomePage
const HomeFashion = lazy(() => import('./pages/home/HomeFashion'));

// Shop page
const ShopColection = lazy(() => import('./pages/shop/ShopCollection'));

// Contact page
const Contact = lazy(() => import('./pages/contact/Contact'));

// Blog page
const BlogStandard = lazy(() => import('./pages/blog/BlogStandard'));
const BlogDetailsStandard = lazy(() =>
  import('./pages/blog/BlogDetailsStandard')
);

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
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/collection'}
                  component={ShopColection}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/contact'}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/blog'}
                  component={BlogStandard}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/blog-details-standard'}
                  component={BlogDetailsStandard}
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
