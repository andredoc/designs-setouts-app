import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import AppRoutes from './routes/AppRoutes'
import { useState } from 'react' 

const App =() => {

  const [isModalOpen, setmodalState] = useState(false)

  const toggleModal = () => setmodalState(!isModalOpen)

  return (
    <BrowserRouter>
      <Sidebar>
        <AppRoutes/>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App;