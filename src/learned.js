import React from 'react'
import "./App.css";
import '@shopify/polaris/styles.css';
import {AppProvider, Card} from '@shopify/polaris';





const Learned = ({date, learn}) => (
    <AppProvider>
    <Card title={date} sectioned>
 <div className="col-9"dangerouslySetInnerHTML={{__html: (learn)}}></div></Card>
    </AppProvider>

   
  );

  export default Learned