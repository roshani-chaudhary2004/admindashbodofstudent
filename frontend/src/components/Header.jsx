function Header() {
  return (
    <header className="header"
    style={{
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center" ,     // vertical center
        color:" black",
    
      }}
    >
      <h1 style={{ textAlign: "center" }}>
Admin Panel - STC Summer Training</h1>
      
    </header>
  );
}

export default Header;
