import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import reduxStore from './redux';

const { store, persistor } = reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //bọc App trong PersistGate gúp cho react delay việc render UI, cho tới khi store đc update
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode >
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

