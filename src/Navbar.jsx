import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog pour recettes</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Nouvelle recette</Link>
      </div>
    </nav>
  );
};

export default Navbar;
