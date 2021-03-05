import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import LayoutOne from '../../layouts/LayoutOne';
import BlogSidebar from '../../wrappers/blog/BlogSidebar';
import BlogComment from '../../wrappers/blog/BlogComment';
import BlogPost from '../../wrappers/blog/BlogPost';

const BlogDetailsStandard = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Blog Post</title>
        <meta
          name='description'
          content='Blog post page of flone react minimalist eCommerce template.'
        />
      </MetaTags>

      <LayoutOne headerTop='visible'>
        <div className='blog-area pt-100 pb-100'>
          <div className='container'>
            <div className='row flex-row-reverse'>
              <div className='col-lg-9'>
                <div className='blog-details-wrapper ml-20'>
                  {/* blog post */}
                  <BlogPost />

                  {/* blog post comment */}
                  <BlogComment />
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

BlogDetailsStandard.propTypes = {
  location: PropTypes.object,
};

export default BlogDetailsStandard;
