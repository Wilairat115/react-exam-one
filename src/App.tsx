import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllmyaccountsPage from './component/Allmyaccounts';
import DetailvisaPage from './component/Detailvisa';
import ErrorPage from './component/Error/Error';
import RootPage from './Root/Root';

function App() {
  const routers = createBrowserRouter(
    [
      { 
        path: "/", 
        element: <RootPage /> ,
        children:[
          { path: "/", element: <AllmyaccountsPage />},
          { path: "/Detail", element: <DetailvisaPage />},
        ],
        errorElement: <ErrorPage />,
      }
    ]
  );

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
