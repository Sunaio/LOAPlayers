import { createBrowserRouter} from 'react-router-dom'
import Euc from "./pages/EUC.jsx"
import Nae from "./pages/Nae.jsx"
import Naw from "./pages/Naw.jsx"
import Home from "./Home.jsx"

export const router = createBrowserRouter([
    {path: "/LOAPlayers", element: <Home /> },
    {path: "/LOAPlayers/EUC", element: <Euc />},
    {path: "/LOAPlayers/NAE", element: <Nae />},
    {path: "/LOAPlayers/NAW", element: <Naw />},
]);