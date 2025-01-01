import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminUsedCars from "./components/AdminUsedCars";
import AdminNewCars from "./components/AdminNewCars";
import AddCars from "./commonComponents/AddCars";
import EditCar from "./commonComponents/EditCar";
import AdminSellCars from "./components/AdminSellCars";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/adminlogin" element={<AdminLogin />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-used-cars"
            element={
              <ProtectedRoute>
                <AdminUsedCars />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-new-cars"
            element={
              <ProtectedRoute>
                <AdminNewCars />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-sell-cars"
            element={
              <ProtectedRoute>
                <AdminSellCars />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-cars"
            element={
              <ProtectedRoute>
                <AddCars />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-car/:id"
            element={
              <ProtectedRoute>
                <EditCar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
