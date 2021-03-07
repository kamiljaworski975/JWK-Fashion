import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import LayoutOne from '../../layouts/LayoutOne';
import BlogSidebar from '../../wrappers/blog/BlogSidebar';
import BlogPagination from '../../wrappers/blog/BlogPagination';
import BlogPosts from '../../wrappers/blog/BlogPosts';

const BlogStandard = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>JWK Fashion | Blog</title>
        <meta
          name='description'
          content='Blog of JWK Fashion react minimalist eCommerce template.'
        />
      </MetaTags>
      <LayoutOne headerTop='visible'>
        <div className='blog-area pt-100 pb-100'>
          <div className='container'>
            <div className='row flex-row-reverse'>
              <div className='col-lg-9'>
                <div className='ml-20'>
                  <div className='row'>
                    {/* blog posts */}
                    <BlogPosts />
                  </div>

                  {/* blog pagination */}
                  <BlogPagination />
                </div>
              </div>
              <div className='col-lg-3'>
                {/* blog sidebar */}
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

BlogStandard.propTypes = {
  location: PropTypes.object,
};

export default BlogStandard;
