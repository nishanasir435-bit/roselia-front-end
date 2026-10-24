import React, { useState } from "react";

function ManageProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: "Roselia Rose", price: 2500, category: "Perfume", stock: 15 },
    { id: 2, name: "Roselia Velvet", price: 3500, category: "Perfume", stock: 8 },
    { id: 3, name: "Roselia Gift Set", price: 4500, category: "Gift Set", stock: 0 },
  ]);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "30px",
      boxSizing: "border-box",
      background: "linear-gradient(135deg, #fbf3f5, #f2e1e6)",
      fontFamily: "Arial, sans-serif",
      color: "#4a1425",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "30px",
    },
    eyebrow: {
      color: "#986577",
      fontSize: "11px",
      letterSpacing: "3px",
      fontWeight: "bold",
      margin: "0 0 10px",
    },
    title: {
      fontFamily: "Georgia, serif",
      fontSize: "34px",
      fontWeight: "normal",
      margin: "0 0 10px",
      color: "#4a1425",
    },
    description: {
      color: "#987681",
      fontSize: "14px",
      margin: 0,
      lineHeight: 1.6,
    },
    totalCard: {
      background: "linear-gradient(135deg, #4a1425, #762b40)",
      color: "white",
      padding: "20px 30px",
      borderRadius: "13px",
      textAlign: "center",
      minWidth: "120px",
      boxShadow: "0 7px 18px rgba(74,20,37,0.16)",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginBottom: "22px",
    },
    search: {
      padding: "14px 16px",
      width: "300px",
      maxWidth: "100%",
      boxSizing: "border-box",
      border: "1px solid #e4cbd3",
      borderRadius: "9px",
      background: "white",
      fontSize: "14px",
      outlineColor: "#762b40",
    },
    card: {
      background: "white",
      border: "1px solid #ead5db",
      borderRadius: "14px",
      overflow: "hidden",
      boxShadow: "0 8px 25px rgba(74,20,37,0.06)",
    },
    cardHeader: {
      padding: "22px 25px",
      borderBottom: "1px solid #f0e2e6",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "10px",
    },
    tableWrap: {
      width: "100%",
      overflowX: "auto",
    },
    table: {
      width: "100%",
      minWidth: "720px",
      borderCollapse: "collapse",
      textAlign: "left",
    },
    th: {
      padding: "16px",
      background: "#fbf4f6",
      color: "#805363",
      fontSize: "11px",
      letterSpacing: "0.7px",
      whiteSpace: "nowrap",
    },
    td: {
      padding: "17px 16px",
      color: "#76515e",
      fontSize: "13px",
      borderBottom: "1px solid #f2e7ea",
      whiteSpace: "nowrap",
    },
    productName: {
      color: "#4a1425",
      fontWeight: "bold",
    },
    productIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "38px",
      height: "38px",
      borderRadius: "9px",
      background: "#f1dfe5",
      color: "#762b40",
      fontFamily: "Georgia, serif",
      fontSize: "22px",
      marginRight: "10px",
      verticalAlign: "middle",
    },
    badge: {
      display: "inline-block",
      padding: "7px 11px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: "bold",
    },
    deleteButton: {
      padding: "8px 13px",
      border: "1px solid #e7bdc8",
      borderRadius: "7px",
      background: "#fff",
      color: "#922e48",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <p style={styles.eyebrow}>ROSELIA • ADMIN PANEL</p>
          <h1 style={styles.title}>Manage Products</h1>
          <p style={styles.description}>
            Organize and manage your fragrance collection.
          </p>
        </div>

        <div style={styles.totalCard}>
          <div style={{ fontSize: "12px", color: "#ead0d8", marginBottom: "8px" }}>
            Total Products
          </div>
          <strong style={{ fontSize: "30px", fontFamily: "Georgia, serif" }}>
            {products.length}
          </strong>
        </div>
      </div>

      <div style={styles.toolbar}>
        <input
          type="text"
          placeholder="⌕   Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <span style={{ fontSize: "13px", color: "#987681" }}>
          {filteredProducts.length} products found
        </span>
      </div>

      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={{ margin: 0, fontFamily: "Georgia, serif", fontWeight: "normal" }}>
            Your Collection
          </h2>
          <span style={{ fontSize: "12px", color: "#987681" }}>
            Product Inventory
          </span>
        </div>

        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                {["PRODUCT", "PRICE", "CATEGORY", "STOCK", "STATUS", "ACTIONS"].map((heading) => (
                  <th key={heading} style={styles.th}>{heading}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td style={styles.td}>
                    <span style={styles.productIcon}>R</span>
                    <strong style={styles.productName}>{product.name}</strong>
                  </td>

                  <td style={{ ...styles.td, fontWeight: "bold", color: "#4a1425" }}>
                    Rs. {product.price.toLocaleString()}
                  </td>

                  <td style={styles.td}>{product.category}</td>
                  <td style={styles.td}>{product.stock}</td>

                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.badge,
                        background: product.stock > 0 ? "#e5f4eb" : "#f9e4e9",
                        color: product.stock > 0 ? "#276746" : "#9c3048",
                      }}
                    >
                      {product.stock > 0 ? "Available" : "Out of Stock"}
                    </span>
                  </td>

                  <td style={styles.td}>
                    <button
                      style={styles.deleteButton}
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ ...styles.td, textAlign: "center", padding: "35px" }}>
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p style={{
        textAlign: "center",
        marginTop: "25px",
        color: "#a78b95",
        fontSize: "10px",
        letterSpacing: "2px",
      }}>
        ROSELIA · ELEGANCE IN EVERY DROP
      </p>
    </div>
  );
}

export default ManageProducts;