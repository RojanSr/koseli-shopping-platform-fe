import { RiSearchLine } from "react-icons/ri"
import { RiHeart2Line } from "react-icons/ri"
import { RiShoppingBag3Line } from "react-icons/ri"
import { navItems } from "./navItems"
import { NavLink, useNavigate } from "react-router-dom"
import { KoseliLogo } from "@components/Logo"
import Button from "@components/Button"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="flex items-center gap-4 justify-between text-lg px-32 py-4">
      <KoseliLogo withText />
      <ul className="flex items-center gap-8">
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <NavLink
              to={navItem.to || "/"}
              className={({ isActive }) => {
                return isActive ? "text-red-400" : ""
              }}
            >
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-8 text-3xl">
        <li>
          <RiSearchLine />
        </li>
        <li>
          <RiHeart2Line />
        </li>
        <li>
          <RiShoppingBag3Line />
        </li>
        <li>
          <Button className="text-lg" onClick={() => navigate("/login")}>
            Login
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
