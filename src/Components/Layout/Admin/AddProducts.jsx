function AddProducts() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdf5f5, #f4e3e6)",
        padding: "35px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 12px 35px rgba(74, 20, 37, 0.13)",
          border: "1px solid #ead2d8",
        }}
      >
        {/* Maroon heading section */}
        <div
          style={{
            background: "linear-gradient(135deg, #4a1425, #762b40)",
            padding: "30px 35px",
            borderBottom: "4px solid #c49a65",
          }}
        >
          <p
            style={{
              color: "#e6c6ce",
              fontSize: "12px",
              letterSpacing: "3px",
              margin: "0 0 10px",
              textTransform: "uppercase",
            }}
          >
            ROSELIA • ADMIN PANEL
          </p>

          <h1
            style={{
              color: "#ffffff",
              fontFamily: "Georgia, serif",
              fontSize: "32px",
              fontWeight: "normal",
              margin: "0 0 10px",
            }}
          >
            Add New Product
          </h1>

          <p
            style={{
              color: "#f0dfe3",
              fontSize: "14px",
              margin: 0,
              lineHeight: "1.7",
            }}
          >
            Add a beautiful fragrance to your collection.
          </p>
        </div>

        {/* Product form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form design is ready! Product saving is not connected yet.");
          }}
          style={{
            padding: "30px 35px 35px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label style={labelStyle}>Product Name</label>
          <input
            type="text"
            placeholder="e.g. Roselia Rose"
            required
            style={inputStyle}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div style={fieldStyle}>
              <label style={labelStyle}>Price (PKR)</label>
              <input
                type="number"
                min="0"
                placeholder="e.g. 2500"
                required
                style={inputStyle}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Stock Quantity</label>
              <input
                type="number"
                min="0"
                placeholder="e.g. 20"
                required
                style={inputStyle}
              />
            </div>
          </div>

          <label style={labelStyle}>Product Image</label>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fdf7f8",
              border: "1px dashed #b77c8c",
              borderRadius: "10px",
            }}
          >
            <input
              type="file"
              accept="image/*"
              required
              style={{
                width: "100%",
                color: "#6f2c40",
                fontSize: "13px",
              }}
            />
            <p
              style={{
                color: "#987681",
                fontSize: "12px",
                margin: "10px 0 0",
              }}
            >
              Choose a clear image of your perfume product.
            </p>
          </div>

          <label style={labelStyle}>Product Category</label>
          <select required defaultValue="Perfume" style={inputStyle}>
            <option value="Perfume">Perfume</option>
            <option value="Gift Set">Gift Set</option>
          </select>

          <label style={labelStyle}>Product Description</label>
          <textarea
            rows="4"
            placeholder="Describe the fragrance, scent notes and details..."
            required
            style={{
              ...inputStyle,
              resize: "vertical",
              lineHeight: "1.6",
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: "18px",
              padding: "15px",
              background: "linear-gradient(135deg, #4a1425, #762b40)",
              color: "#ffffff",
              border: "1px solid #8b4b5c",
              borderRadius: "9px",
              fontSize: "15px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              cursor: "pointer",
              boxShadow: "0 5px 14px rgba(74, 20, 37, 0.2)",
            }}
          >
            + &nbsp; Add Product
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#a18a90",
              fontSize: "12px",
              margin: "8px 0 0",
            }}
          >
            ROSELIA · ELEGANCE IN EVERY DROP
          </p>
        </form>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  color: "#542033",
  fontSize: "13px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 14px",
  border: "1px solid #e5cbd2",
  borderRadius: "8px",
  backgroundColor: "#fffafb",
  color: "#4a1425",
  fontSize: "14px",
  outlineColor: "#762b40",
};

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

export default AddProducts;