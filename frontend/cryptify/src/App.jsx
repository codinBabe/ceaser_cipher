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
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import ProcessFile from "./components/ProcessFile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/encrypt" element={<Encrypt />} />
        <Route path="/decrypt" element={<Decrypt />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/process" element={<ProcessFile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
