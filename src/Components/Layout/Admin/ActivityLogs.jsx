
import React, { useState } from "react";

function ActivityLogs() {
  const [search, setSearch] = useState("");

  const logs = [
    {
      id: 1,
      user: "Owner",
      action: "Added a new product",
      details: "Roselia Rose",
      date: "14 Oct 2026",
      status: "Completed",
    },
    {
      id: 2,
      user: "Owner",
      action: "Updated product details",
      details: "Roselia Velvet",
      date: "13 Oct 2026",
      status: "Completed",
    },
    {
      id: 3,
      user: "Admin",
      action: "Viewed products",
      details: "Manage Products",
      date: "13 Oct 2026",
      status: "Completed",
    },
    {
      id: 4,
      user: "Owner",
      action: "Checked user accounts",
      details: "Users page",
      date: "12 Oct 2026",
      status: "Completed",
    },
  ];

  const filteredLogs = logs.filter((log) =>
    `${log.user} ${log.action} ${log.details} ${log.date}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="logs-page">
      <style>{`
        .logs-page {
          min-height: 100vh;
          padding: 30px;
          background: #fff7f8;
          font-family: Arial, sans-serif;
          color: #4a1425;
          box-sizing: border-box;
        }

        .logs-header {
          background: linear-gradient(135deg, #4a1425, #762b40);
          color: white;
          padding: 28px;
          border-radius: 14px;
          margin-bottom: 25px;
          box-shadow: 0 5px 15px #4a142522;
        }

        .logs-header h1 {
          margin: 0 0 10px;
          font-size: 28px;
          color : white;
          font-family: Georgia, serif;
        }

        .logs-header p {
          margin: 0;
          color: #f5dce3;
        }

        .owner-label {
          display: inline-block;
          margin-top: 15px;
          padding: 7px 13px;
          background: #d9b56d;
          color: #4a1425;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        }

        .logs-summary {
          background: white;
          padding: 22px;
          border-radius: 12px;
          margin-bottom: 22px;
          border: 1px solid #f0dce2;
        }

        .logs-summary p {
          margin: 0 0 8px;
          color: #80616b;
        }

        .logs-summary h2 {
          margin: 0;
          font-size: 30px;
        }

        .logs-card {
          background: white;
          padding: 22px;
          border-radius: 12px;
          border: 1px solid #f0dce2;
          overflow: hidden;
        }

        .logs-card h2 {
          margin-top: 0;
          margin-bottom: 18px;
          font-size: 20px;
        }

        .logs-search {
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

        .logs-search:focus {
          border-color: #762b40;
        }

        .logs-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .logs-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 650px;
        }

        .logs-table th {
          background: #f8e9ed;
          color: #4a1425;
          padding: 14px;
          text-align: left;
          font-size: 12px;
        }

        .logs-table td {
          padding: 15px 14px;
          border-bottom: 1px solid #f1e4e8;
          font-size: 13px;
        }

        .logs-table tr:hover td {
          background: #fffafb;
        }

        .log-user {
          font-weight: bold;
        }

        .log-status {
          background: #e4f5e9;
          color: #237544;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: bold;
          white-space: nowrap;
        }

        .no-logs {
          text-align: center;
          padding: 25px;
          color: #80616b;
        }

        @media (max-width: 600px) {
          .logs-page {
            padding: 15px;
          }

          .logs-header {
            padding: 22px;
          }

          .logs-header h1 {
            font-size: 23px;
          }

          .logs-card {
            padding: 15px;
          }
        }
      `}</style>

      <div className="logs-header">
        <h1>Activity Logs</h1>
        <p>Track actions performed in your Roselia admin panel.</p>
        <span className="owner-label">OWNER VIEW</span>
      </div>

      <div className="logs-summary">
        <p>Total Activity Records</p>
        <h2>{filteredLogs.length}</h2>
      </div>

      <div className="logs-card">
        <h2>Recent Activities</h2>

        <input
          className="logs-search"
          type="text"
          placeholder="Search activities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="logs-table-wrapper">
          <table className="logs-table">
            <thead>
              <tr>
                <th>USER</th>
                <th>ACTION</th>
                <th>DETAILS</th>
                <th>DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <tr key={log.id}>
                    <td className="log-user">{log.user}</td>
                    <td>{log.action}</td>
                    <td>{log.details}</td>
                    <td>{log.date}</td>
                    <td>
                      <span className="log-status">{log.status}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-logs">
                    No activities found.
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

export default ActivityLogs;
