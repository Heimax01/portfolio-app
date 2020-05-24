import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'; 


const About = () => {
  return (
    <BaseLayout {...this.props.auth}>
     <BasePage className="about-page">
      <h1>I am About page</h1>
     </BasePage>
    </BaseLayout>
  )
}

export default About;