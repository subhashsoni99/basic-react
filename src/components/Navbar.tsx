import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
     <nav style={{
      position: "fixed", 
      top: 0, 
      left: 0, 
      width: "100%", 
      background: "#eee", 
      padding: "10px",
      zIndex: 1000
    }}>
 
   
      <Link to="/">Home</Link> | 
      <Link to="/about"> About</Link> | 
      <Link to="/contact"> Contact</Link> | 
      <Link to="/listing"> Listing</Link> | 
      <Link to="/search"> Search</Link>
    </nav>
  );
};

export default Navbar;
