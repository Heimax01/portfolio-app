import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'; 


const Blog = () => {
  return (
    <BaseLayout {...this.props.auth}>
     <BasePage>
      <h1>I am Blog page</h1>
     </BasePage>
    </BaseLayout>
  )
}

export default Blog;