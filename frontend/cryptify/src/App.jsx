import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Encrypt from "./pages/Encrypt";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/encrypt" element={<Encrypt />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
