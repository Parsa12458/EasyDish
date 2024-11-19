import ButtonDarkMode from "./ButtonDarkMode";
import Logo from "./Logo";
import Searchbox from "./Searchbox";
import AccountButton from "../features/user/AccountButton";

function Header() {
  return (
    <header className="xs:px-5 flex w-screen items-center justify-between bg-lightMint px-8 py-4 dark:bg-darkMint">
      <Logo />
      <div className="sm:hidden">
        <Searchbox />
      </div>

      <div className="flex items-center gap-6 md:gap-3">
        <ButtonDarkMode />
        <AccountButton />
      </div>
    </header>
  );
}

export default Header;
