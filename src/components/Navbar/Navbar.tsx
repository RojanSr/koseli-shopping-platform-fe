import { RiSearchLine } from "react-icons/ri"
import { RiHeart2Line } from "react-icons/ri"
import { RiShoppingBag3Line } from "react-icons/ri"
import { navItems } from "./navItems"
import { NavLink, useNavigate } from "react-router-dom"
import { KoseliLogo } from "@components/Logo"
import Button from "@components/Button"
import { useToggle } from "@hooks/useToggle"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { cn } from "@utils/cn"

const LargeScreenNav = () => {
  const navigate = useNavigate()

  return (
    <>
      <ul className="hidden xl:flex items-center gap-8">
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
      <ul className="hidden xl:flex items-center gap-8 text-3xl">
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
    </>
  )
}

const SmallScreenNav = ({ isOpen = false, onClose }: { isOpen: boolean; onClose: () => void }) => {
  // if (!isOpen) return null
  return (
    <div
      className={cn("xl:hidden shadow-lg bg-white px-3 fixed top-0 right-0 z-50 min-h-full min-w-52 transition-all ease-in-out duration-500", {
        "-right-96": !isOpen
      })}
    >
      <div className="absolute right-6 top-6">
        <AiOutlineClose className="text-2xl cursor-pointer" onClick={onClose} />
      </div>

      <ul className="pt-20">
        <li>
          <input placeholder="Search Product" className="mb-4 border-2 border-zinc-300 px-3 py-1 rounded-lg outline-none" />
        </li>
        {navItems.map((navItem) => (
          <li key={navItem.id} className="pb-4">
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

      <ul className="flex flex-col gap-4 pt-8">
        <li>My Wishlist</li>
        <li>My Cart</li>
      </ul>
    </div>
  )
}

const Navbar = () => {
  const [isHamburgerMenuOpen, toggleHamburgerMenu] = useToggle(false)
  const navigate = useNavigate()
  return (
    <nav className="flex items-center gap-4 justify-between text-lg px-8 md:px-16 lg:px-32 py-4">
      <KoseliLogo withText />

      <div className="flex items-center gap-8 xl:hidden">
        <Button className="text-lg" onClick={() => navigate("/login")}>
          Login
        </Button>
        <GiHamburgerMenu className="text-2xl cursor-pointer" onClick={toggleHamburgerMenu} />
      </div>

      <LargeScreenNav />
      <SmallScreenNav isOpen={isHamburgerMenuOpen} onClose={toggleHamburgerMenu} />
    </nav>
  )
}

export default Navbar
