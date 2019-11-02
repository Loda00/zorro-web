import React from 'react';

import NotFound from 'image/404.jpg'

const Page404 = () => (
  <div className="content-404">
    <img
      src={NotFound}
      alt="sad"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  </div>
);

export default Page404;
