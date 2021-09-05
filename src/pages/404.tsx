import React from 'react';
import { Seo } from '../components';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" pathname="un" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;
