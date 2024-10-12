import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Encrypt from "./pages/Encrypt";
import MainLayout from "./layouts/MainLayout";
import Decrypt from "./pages/Decrypt";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/encrypt" element={<Encrypt />} />
        <Route path="/decrypt" element={<Decrypt />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
