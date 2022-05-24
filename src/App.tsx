import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import AppRoutes from './routes/AppRoutes'

const App =() => {
  return (
    <BrowserRouter>
      <Sidebar>
        <AppRoutes/>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App;