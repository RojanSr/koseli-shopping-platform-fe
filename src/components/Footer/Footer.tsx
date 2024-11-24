import { GPayLogo, MasterCardLogo, PaypalLogo, VisaLogo } from "@assets/paymentLogo"
import { KoseliLogo } from "@components/Logo"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { GrLocation } from "react-icons/gr"
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="px-32 pt-8 flex flex-col text-zinc-400 bg-black">
      <div className="flex gap-6 justify-between flex-grow pb-12  border-solid border-b-[1px] border-b-zinc-700">
        <div className="flex flex-col gap-4">
          <KoseliLogo withText light />
          <div className="flex items-center gap-3">
            <MdOutlinePhoneInTalk />
            <p>9818754576</p>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineMailOutline />
            <p>rojanrai.developer@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <GrLocation />
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-zinc-300">Information</p>
          <p>My Account</p>
          <p>Login</p>
          <p>My Cart</p>
          <p>My Wishlist</p>
          <p>Checkout</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-zinc-300">Services</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-zinc-300">Subscribe</p>
          <p>Enter your email below to be the first to know about new collections and product launches.</p>
          <input placeholder="Your Email" className="bg-transparent border-solid border-2 border-zinc-600 rounded-lg p-3 outline-none" />
        </div>
      </div>
      <div className="py-4 flex justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 rounded-sm bg-zinc-50 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${VisaLogo})` }}></div>
          <div
            className="w-10 h-6 rounded-sm bg-zinc-50 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${MasterCardLogo})` }}
          ></div>
          <div className="w-10 h-6 rounded-sm bg-zinc-50 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${GPayLogo})` }}></div>
          <div className="w-10 h-6 rounded-sm bg-zinc-50 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${PaypalLogo})` }}></div>
        </div>
        <p>©2024 Koseli All Rights are reserved</p>
        <div className="flex items-center gap-6 text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  )
}

export default Footer
