import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ListPage from './features/Todo/pages/ListPage';
import DetailPage from './features/Todo/pages/DetailPage';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi.js';
import './App.css';
import CounterFeature from './features/Counter';
import Product from './ProductTest/pages';
import ProductList from './ProductTest/pages';
import ProductDetail from 'ProductTest/ProductComponent/ProductDetail';
import Content from 'Preview/pages';
import ChatApp from 'ChatApp/pages';
import Memo from 'useMemo/pages';
import Reduce from 'Reduce/pages';
import TodoReducer from 'TodoReducer';
// import Context from 'Context';
import Context from './store/Context';

// import ListPage from './features/Todo/pages/ListPage';
// import NotFound from './components/NotFound';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     }
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   }
  //   fetchProducts();
  // }, []);

  return (
    <div className="App">
      <h3>Home Page</h3>
      <Header/>
      <p><Link to='/todos'>Todo List</Link></p>
      <p><Link to='/albums'>Album</Link></p>
      <p><Link to = '/ProductList'>Product List</Link></p>
      {/* <ProductList/> */}
      <Routes>
        {/* <Route path='/' element={<Product/>}></Route> */}
        <Route path="/" element={<CounterFeature />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path = '/ProductList' element = {<ProductList/>}></Route>
        <Route path='/products/:id' element= {<ProductDetail/>}/>
        {/* <Route path="" element={<NotFound />} /> */}
        
      </Routes>
      
      {/* <AlbumFeature/>
      <TodoFeature/> */}
     {/* <Content/>
      <ChatApp/>
      <Memo/>
      <Reduce/> */}
      <TodoReducer/>
      {/* <Context/> */}
      <Context />
    </div>
  );
}
export default App;



