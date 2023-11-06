const Navbar = () => {
  return (
    <>
      <nav className="bg-white px-5 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 ">
        <div className="flex flex-row text-center gap-2">
          <div className="p-2 w-1/3 text-2xl font-extrabold">
            <a href="">JOJOANIME</a>
          </div>
          <div className="relative flex flex-row w-full items-center px-7 text-slate-500">
            <input
              type="search"
              className="px-5 h-8 w-full rounded-md"
              placeholder="Search the anime/film..."
            />
            <button className="absolute end-8 px-4 h-6 bg-blue-600 text-xs rounded-md text-white">
              Search
            </button>
          </div>
          <div className="p-2 w-1/4 text-xl">
            <button className="px-5 h-8 rounded-md bg-blue-700 text-base hover:bg-blue-500">
              Login
            </button>
          </div>
        </div>
        <div className="flex-row text-center px-20 gap-6 pt-4 hidden lg:flex">
          <div className="w-1/4  rounded-md font-semibold">Latest</div>
          <div className="w-1/4 rounded-md font-semibold">Weekly</div>
          <div className="w-1/4 rounded-md font-semibold">Monthly</div>
          <div className="w-1/4 rounded-md font-semibold">Seasons</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
