import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../layouts/LayoutOne';

const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>JWK | Fashion Home</title>
        <meta
          name='description'
          content='Fashion home of JWK react minimalist eCommerce template'
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass='container-fluid'
        headerPaddingClass='header-padding-1'
      >
        <h1>Kamil</h1>
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
