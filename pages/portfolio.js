import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'; 

import axios from 'axios'



class Portfolio extends React.Component {

  
    static async getInitialProps({query}) {
        let posts = {};
        try {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
          posts = res.data;
        } catch(e) {
          console.error(e);
        }
        return { portfolio: posts };
      }

    render() {
        const { portfolio }  = this.props;
        return (
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </BasePage>
        </BaseLayout>
        )
    }
}


export default Portfolio;