import './App.css';
import React from 'react';
import tw from "tailwind-styled-components"
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB, isLoaded } from './redux/modules/word';

import Start from './components/start/Start'
import Main from './components/main/Main'
import Making from './components/making/Making'
import Editing from './components/making/Editing';
import NotFound from './components/nabis/NotFound';
import Nabi from './components/nabis/Nabi'
import Spinner from './components/nabis/Spinner';
import Detail from "./components/main/Detail";

const Container = tw.div`
  w-full h-screen bg-yellow-400 overflow-x-hidden
`

function App() {

  const is_loaded = useSelector(state => state.word.is_loaded);
  const dispatch = useDispatch();
  
      React.useEffect( () => {
        dispatch(isLoaded(false))
        dispatch(loadWordFB());
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
      <Nabi />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/main" element={<Main />} />
          <Route path="/making" element={<Making />} />
          <Route path="/editing/*" element={<Editing />} />
          <Route path="/detail/*" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
          
        </Routes>
      </Container>
      {!is_loaded && <Spinner />}
    </div>
  );
}

export default App;
