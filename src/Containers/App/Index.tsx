import React, {type PropsWithChildren} from 'react';
import { NativeRouter, Route, Link, Routes} from "react-router-native";
import About from '../About/Index';
import Home from '../Home/Index';
import { store } from '../../services/store';
import { Provider } from 'react-redux';

export default function App() {

  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
      </NativeRouter>
    </Provider>
  );
};
