import { cn } from "@utils/cn"
import AppLogo from "../../assets/Logo.svg"
import AppLogoLight from "../../assets/LogoLight.svg"

type LogoProps = {
  withText?: boolean
  light?: boolean
}

const Logo = ({ withText = false, light = false }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <img src={light ? AppLogoLight : AppLogo} alt="Koseli Logo" draggable="false" className="" />
      {withText && (
        <p
          className={cn("select-none font-normal text-2xl md:text-4xl", {
            "text-zinc-100": light
          })}
        >
          Koseli
        </p>
      )}
    </div>
  )
}

export default Logo
