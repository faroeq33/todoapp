import Logo from "./Logo";
import { ModeToggle } from "../darkmode/ModeToggle";

function Nav() {
  return (
    <nav className="bg-transparent">
      <div className="flex flex-row justify-between px-8">
        <Logo />
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
