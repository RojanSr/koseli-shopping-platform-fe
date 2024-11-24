import { cn } from "@utils/cn"
import AppLogo from "../../assets/Logo.svg"
import AppLogoLight from "../../assets/LogoLight.svg"

const Logo = ({ withText = false, light = false }: { withText?: boolean; light?: boolean }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={light ? AppLogoLight : AppLogo} alt="Koseli Logo" draggable="false" />
      {withText && (
        <p
          className={cn("select-none font-normal text-4xl", {
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
