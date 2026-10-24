
import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ayesha Khan",
      email: "ayesha@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      email: "sara@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 3,
      name: "Ali Hassan",
      email: "ali@example.com",
      role: "Customer",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");

  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="users-page">
      <style>{`
        .users-page {
          min-height: 100vh;
          padding: 30px;
          box-sizing: border-box;
          background: #fff7f8;
          color: #4a1425;
          font-family: Arial, sans-serif;
        }

        .users-header {
          padding: 28px;
          margin-bottom: 25px;
          border-radius: 14px;
          color: white;
          background: linear-gradient(135deg, #4a1425, #762b40);
          box-shadow: 0 5px 15px #4a142522;
        }

        .users-header h1 {
          margin: 0 0 10px;
          font-size: 28px;
          color:white;
         font-family : Georgia, serif;
        }

        .users-header p {
          margin: 0;
          color: #f5dce3;
        }

        .users-summary {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }

        .users-stat {
          background: white;
          padding: 22px;
          border: 1px solid #f0dce2;
          border-radius: 12px;
        }

        .users-stat p {
          margin: 0 0 10px;
          color: #80616b;
          font-size: 14px;
        }

        .users-stat h2 {
          margin: 0;
          font-size: 28px;
        }

        .users-card {
          padding: 22px;
          background: white;
          border: 1px solid #f0dce2;
          border-radius: 12px;
          overflow: hidden;
        }

        .users-card h2 {
          margin: 0 0 20px;
          font-size: 20px;
        }

        .users-search {
          width: 100%;
          max-width: 350px;
          padding: 12px 14px;
          margin-bottom: 20px;
          border: 1px solid #e4c8d1;
          border-radius: 8px;
          outline: none;
          font-size: 14px;
          box-sizing: border-box;
        }

        .users-search:focus {
          border-color: #762b40;
        }

        .users-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          min-width: 650px;
          border-collapse: collapse;
        }

        .users-table th {
          padding: 14px;
          text-align: left;
          background: #f8e9ed;
          color: #4a1425;
          font-size: 12px;
        }

        .users-table td {
          padding: 15px 14px;
          border-bottom: 1px solid #f1e4e8;
          font-size: 13px;
        }

        .users-table tbody tr:hover td {
          background: #fffafb;
        }

        .user-name {
          font-weight: bold;
        }

        .user-role {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          background: #f8e9ed;
          color: #762b40;
          font-size: 11px;
          font-weight: bold;
        }

        .user-status {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: bold;
        }

        .user-active {
          background: #e4f5e9;
          color: #237544;
        }

        .user-inactive {
          background: #eeeeee;
          color: #666666;
        }

        .user-delete {
          padding: 8px 12px;
          border: none;
          border-radius: 7px;
          background: #f8e2e7;
          color: #a12643;
          font-weight: bold;
          cursor: pointer;
        }

        .user-delete:hover {
          background: #a12643;
          color: white;
        }

        .users-empty {
          padding: 25px;
          text-align: center;
          color: #80616b;
        }

        @media (max-width: 700px) {
          .users-page {
            padding: 15px;
          }

          .users-header {
            padding: 22px;
          }

          .users-header h1 {
            font-size: 23px;
          }

          .users-summary {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .users-card {
            padding: 15px;
          }
        }
      `}</style>

      <div className="users-header">
        <h1>Manage Users</h1>
        <p>View and manage customer accounts in your Roselia store.</p>
      </div>

      <div className="users-summary">
        <div className="users-stat">
          <p>Total Users</p>
          <h2>{users.length}</h2>
        </div>

        <div className="users-stat">
          <p>Active Users</p>
          <h2>{users.filter((user) => user.status === "Active").length}</h2>
        </div>

        <div className="users-stat">
          <p>Inactive Users</p>
          <h2>{users.filter((user) => user.status === "Inactive").length}</h2>
        </div>
      </div>

      <div className="users-card">
        <h2>Customer Accounts</h2>

        <input
          className="users-search"
          type="text"
          placeholder="Search by name, email, or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="user-name">{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className="user-role">{user.role}</span>
                    </td>
                    <td>
                      <span
                        className={`user-status ${
                          user.status === "Active"
                            ? "user-active"
                            : "user-inactive"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="user-delete"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="users-empty">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
