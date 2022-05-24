import {Routes, Route} from 'react-router-dom'
import DesignsPage from '../pages/DesignsPage';
import SetoutsPage from '../pages/SetoutsPage';

const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<DesignsPage />} />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/setouts" element={<SetoutsPage />} />
        </Routes>
    )
}

export default AppRoutes