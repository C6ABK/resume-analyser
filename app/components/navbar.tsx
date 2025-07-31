import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient select-none">RESUMIND</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit select-none">
        Upload Resume
      </Link>
      
    </nav>
  )
}
export default Navbar