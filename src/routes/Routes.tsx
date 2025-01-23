import { createBrowserRouter} from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import HistoryPage from '../Pages/HistoryPage'
import { URLs } from '../app/URLs'
export const router = createBrowserRouter([
    {
      path: URLs.main,
      element: <MainPage/>,
    },
    {
      path: URLs.historyPage,
      element : <HistoryPage/>
    },
    ])
   

