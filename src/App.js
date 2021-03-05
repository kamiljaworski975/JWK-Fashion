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
const Product = lazy(() => import('./pages/shop/Product'));

// Contact page
const Contact = lazy(() => import('./pages/contact/Contact'));

// Blog page
const BlogStandard = lazy(() => import('./pages/blog/BlogStandard'));
const BlogDetailsStandard = lazy(() =>
  import('./pages/blog/BlogDetailsStandard')
);

const MyAccount = lazy(() => import('./pages/other/MyAccount'));
const LoginRegister = lazy(() => import('./pages/other/LoginRegister'));

const Cart = lazy(() => import('./pages/other/Cart'));
const Wishlist = lazy(() => import('./pages/other/Wishlist'));
const Compare = lazy(() => import('./pages/other/Compare'));
const Checkout = lazy(() => import('./pages/other/Checkout'));

const NotFound = lazy(() => import('./pages/other/NotFound'));

const About = lazy(() => import('./pages/other/About'));

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
                <Route
                  path={process.env.PUBLIC_URL + '/about'}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/my-account'}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/login-register'}
                  component={LoginRegister}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/cart'}
                  component={Cart}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/wishlist'}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/compare'}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/checkout'}
                  component={Checkout}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/not-found'}
                  component={NotFound}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/product/:id'}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
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
