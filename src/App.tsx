import HomePage from './pages/HomePage';
import DesignsPage from './pages/DesignsPage';
import SetoutsPage from './pages/SetoutsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'

const App =() => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={ <HomePage/> } /> 
          <Route path="/designs" element={ <DesignsPage/> } /> 
          <Route path="/setouts" element={ <SetoutsPage/> } />      
        </Routes>
      </Sidebar>
    </BrowserRouter>
 
  )
}

export default App;