import { Routes, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import AddProducts from "./AddProducts";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/addproducts/" element={<AddProducts />} />
      
    </Routes>
  );
}

export default AdminRoutes;