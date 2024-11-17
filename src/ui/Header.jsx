import ButtonDarkMode from "./ButtonDarkMode";
import Logo from "./Logo";
import Searchbox from "./Searchbox";
import AccountButton from "../features/user/AccountButton";

function Header() {
  return (
    <header className="flex w-screen items-center justify-between bg-lightMint px-8 py-4 dark:bg-darkMint">
      <Logo />
      <Searchbox />

      <div className="flex items-center gap-6">
        <ButtonDarkMode />
        <AccountButton />
      </div>
    </header>
  );
}

export default Header;
