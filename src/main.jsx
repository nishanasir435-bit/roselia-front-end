import React from 'react';
import { createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

 createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <ConfigProvider
    theme={{
      token: {
        // Seed Tokens
        colorPrimary: '#4A2028',
        borderRadius: 6,
        colorBgContainer:'#F7E2E7',
      },
    }}
  >
     <App />
     </ConfigProvider>
   </BrowserRouter>
  </ React.StrictMode>,
);
