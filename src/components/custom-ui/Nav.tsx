import { ModeToggle } from "../features/darkmode/ModeToggle";
import CustomLogo from "./CustomLogo";

function Nav() {
  return (
    <nav className="bg-transparent">
      <div className="flex flex-row justify-between px-4">
        <CustomLogo />
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
