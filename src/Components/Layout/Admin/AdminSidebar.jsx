import React from "react";
import { Menu } from "antd";

import {
    DashboardOutlined,
    ShoppingOutlined,
    PlusCircleOutlined,
    HistoryOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import {useNavigate,useLocation} from 'react-router-dom';

const AdminSidebar = () =>{
const navigate = useNavigate();
const location = useLocation();

const menuItems = [
{
key:'/admin',
icon:<DashboardOutlined/>,
label:'Dashboard' ,
},
{
key:'/admin/add-product',
icon:<PlusCircleOutlined/>,
label:'Add Product' ,

},
{
key:'/admin/products',
icon:<ShoppingOutlined/>,
label:'Manage Products' ,
},
{
key:'/admin/logs',
icon:<HistoryOutlined/>,
label:'Activity Logs (Owner)' ,
},
{
key:'/admin/users',
icon:<TeamOutlined/>,
label:'Users' ,
},

];


return (
    <div 
    style={{
       
        height: "100vh",
        backgroundColor: " white",
        borderRight: "1 px solid black ",
    }}
    >
        <div style={{color:"white"}}>Admin Side</div>
    
        <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({key}) => navigate(key)}
        style={{borderRight:0}}
        />
        </div>
       
);

};

export default AdminSidebar;
