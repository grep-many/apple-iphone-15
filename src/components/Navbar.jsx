import { appleImg, bagImg, searchImg } from "@/assets";
import { navLists } from "@/constants";

const Navbar = () => (
  <header className="flex items-center justify-between p-5 sm:px-10">
    <img src={appleImg} alt="Apple" className="cursor-pointer" width={14} height={18} />
    <nav className="text-gray flex flex-1 justify-center gap-10 text-sm max-sm:hidden">
      {navLists.map((nav, i) => (
        <a key={i} className="group relative cursor-pointer transition-colors hover:text-white">
          {nav}
          <span className="absolute bottom-0.5 group-hover:-bottom-px left-1/2 h-0.5 w-0 bg-white transition-[width_transform] group-hover:left-[10%] group-hover:w-[80%] motion-safe:duration-300" />
        </a>
      ))}
    </nav>
    <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
      <img src={searchImg} alt="search" width={18} height={18} className="cursor-pointer" />
      <img src={bagImg} alt="search" width={18} height={18} className="cursor-pointer" />
    </div>
  </header>
);

export default Navbar;
