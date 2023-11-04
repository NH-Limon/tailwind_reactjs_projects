const Home = () => {
  return (
    <div className="text-center">
      <div
        className="home h-[600px] p-16 bg-cover bg-opacity-10 bg-no-repeat flex flex-col justify-center items-center
    lg:flex-row lg:items-start
      "
      >
        <div className="container pt-16 lg:-mt-7">
          <h1 className="mt-10 text-6xl text-center uppercase font-extrabold text-white leading-normal lg:w-[50%] lg:text-[65px]">
            MAKING MEMORIES TOGETHER
          </h1>
          <p className="text-white text-2xl my-6 font-mono lg:w-[50%] lg:mb-8">
            Share and collect photos and videos. Relive the most beautiful
            moments.
          </p>
          <button className="rounded-full px-8 py-2 bg-white text-slate-600 hover:text-purple-600 text-xl transition-all lg:-ml-[440px] lg:-mt-8">
            Let's Start
          </button>
        </div>

        <img
          className="w-[40%] mt-[98px] h-[90%] hidden lg:block"
          src={require("../../../Images/2.png")}
          alt=""
        />
      </div>
    </div>
  );
};
export default Home;
