const PhotoBook = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[400px] lg:h-[640px] xl:h-[700px] bg-purple-900 px-16 py-16 text-center">
      <div className="mt-24 xl:mt-64">
        <h1 className="text-white text-6xl font-extrabold xl:text-7xl">
          CREATE A PHOTO BOOK
        </h1>
        <hr className="text-[30px] my-6 mx-auto bg-white h-3 w-32 font-extrabold" />
        <p className="font-mono text-white w-[80%] mx-auto my-6 text-xl xl:text-3xl">
          Relive your memories with a Premium photo book. Our unique editor
          helps create a world-class design. Create photo books together!
        </p>
        <button className="rounded-full px-8 xl:px-16 py-2 xl:py-4 bg-white text-slate-600 hover:text-purple-600 text-xl xl:text-2xl transition-all">
          Let's Start
        </button>
      </div>

      <div>
        <img
          className="hidden lg:block lg:mt-[120px] xl:mt-[40px]"
          src={require("../../../Images/6.png")}
          alt=""
        />
      </div>
    </div>
  );
};
export default PhotoBook;
