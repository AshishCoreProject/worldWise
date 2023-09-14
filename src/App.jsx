import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContex";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />

<<<<<<< HEAD
                <Route path="cities" element={<CityList />} />

                <Route path="countries" element={<CountriesList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
=======
            <Route path="cities" element={<p>List of cities</p>} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<p>Countries</p>} />

            <Route path="form" element={<p>Form</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 853dcaa3d396618aac26af171ff83d29e89b797b
    </div>
  );
}
