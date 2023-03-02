import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import store from './app/store';
import './index.css';
// import { ThemeProvider } from './ThemeContext'
// import { StoreProvider} from './store'
import store from 'TodoList/redux/store';

//Fake comments
// function emitComment(id){
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Noi dung comment cua lesson ${id}`
//       })
//     )
//   }, 2000)
// }
// emitComment(1)
// emitComment(2)
// emitComment(3);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    {/* <ThemeProvider> */}
    {/* <StoreProvider> */}
      <App />
      {/* </StoreProvider> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
