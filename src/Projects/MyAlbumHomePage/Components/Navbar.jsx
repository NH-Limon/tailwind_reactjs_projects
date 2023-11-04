const Navbar = () => {
  return (
    // Left Section
    <div className="px-4 flex flex-col justify-center items-center bg-white fixed z-50 w-[100%] py-4 md:flex-row">
      <div className="flex basis-1/4 -lg:ml-4 justify-center items-center">
        <img className="w-16" src={require("../../../Images/7.png")} alt="" />
        <span className="mx-4 text-3xl font-extralight">|</span>
        <p className="opacity-50">Photo Albums Reinvented</p>
      </div>

      {/* Empty Section */}
      <div className="basis-1/2"></div>

      {/* Right Section */}
      <div className="basis-1/4 flex flex-row gap-8 justify-around items-center md:gap-8 md:my-2">
        <i class="fa-solid fa-cart-shopping text-2xl text-purple-600"></i>
        <button className="rounded-full px-8 py-2 bg-white border border-purple-500 hover:bg-purple-600 hover:text-white text-xl transition-all">
          Login
        </button>
        <button className="rounded-full px-8 py-2 bg-purple-600 hover:bg-purple-500 text-white hover:text-white text-xl transition-all">
          Register
        </button>
      </div>
    </div>
  );
};
export default Navbar;
