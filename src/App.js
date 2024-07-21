import './App.css';
import {BrowserRouter, Navigate, Route,Routes} from 'react-router-dom';
import { ClientRoutes, PublicRoutes } from './routes/Routes';
function App() {
  return (
    //creamos las rutas principales de la web luego  importamos
    //el archivop de las rutas la cual contiene ya cada ruta en especifico 
   <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navigate to="/welcome" /> }></Route>
        <Route  path='*' element={ <PublicRoutes /> }></Route>
        <Route path='/cliente/**' element={<ClientRoutes />}></Route>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
