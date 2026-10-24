import AdminSidebar from "./AdminSidebar";
import { Routes, Route } from "react-router-dom";
import AddProducts from "./AddProducts";
import ManageProducts from "./AdminManage";
import ActivityLogs from "./ActivityLogs";
import Users from "./Users";


function AdminPage() {
  return (
    <div style={{ display: "flex",}}>
      <AdminSidebar />

      <div style={{ flex: 1, padding: "20px" ,}}>
        <Routes>
          <Route
            index
            element={
              <>
                <h1 style={{color:"#800020",textAlign:"center"}}>Admin Dashboard</h1>
                <p style={{color:"#800020",textAlign:"center"}}>Welcome to Roselia Admin Panel</p>
              </>
            }
          />

          <Route
            path="add-product"
            element={<AddProducts />}
          />
          <Route path="products" element={<ManageProducts />} />
          <Route path="logs" element={< ActivityLogs/>} />
          <Route path="users" element={< Users/>} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPage;