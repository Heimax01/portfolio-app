import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'; 


const Cv = () => {
  return (
    <BaseLayout {...this.props.auth}>
     <BasePage>
      <h1>I am Cv page</h1>
     </BasePage>
    </BaseLayout>
  )
}

export default Cv;