import Logo from "./Logo";

function Footer() {
  return (
    <footer className="flex w-screen items-center justify-between bg-lightMint px-8 py-5 dark:bg-darkMint">
      <Logo />
      <p className="dark:text-primaryDark max-w-56 text-sm font-semibold text-primary">
        &copy; EasyDish. All rights reserved. Created by{" "}
        <a
          href="https://github.com/Parsa12458"
          target="_blank"
          className="p-1 font-bold underline transition-all duration-300 hover:bg-primary hover:text-lightMint"
        >
          Parsa Shirafkan
        </a>
      </p>
    </footer>
  );
}

export default Footer;
