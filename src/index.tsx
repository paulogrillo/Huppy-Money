import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freela',
          type: 'deposit',
          amount: 600,
          createdAt: new Date('2021-02-12 09:00:00'),

        }, 

        {
          id: 2,
          title: 'Faculdade',
          type: 'widthdraw',
          amount: 500,
          createdAt: new Date('2021-05-06 09:00:00'),
          
        },

        {
          id: 3,
          title: 'Mercado',
          type: 'widthdraw',
          amount: 250.39,
          createdAt: new Date('2021-01-12 09:00:00'),
          
        }
      ]
    })
  },
  
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    }) 

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


