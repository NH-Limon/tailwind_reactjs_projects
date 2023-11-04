const PhotoShare = () => {
  return (
    <div className="flex flex-col text-center px-16 py-24 bg-gray-300 lg:flex-row xl:justify-center xl:items-center">
      <div className="">
        <h1 className="text-5xl font-extrabold text-purple-900 leading-normal lg:text-6xl lg:leading-normal lg:w-[90%] lg:text-left ">
          SHARE PHOTOS AND VIDEOS PRIVATELY
        </h1>

        <hr className="text-[30px] mx-auto mt-6 mb-20 bg-purple-900 h-3 w-32 font-extrabold lg:-ml-8 lg:mt-5 lg:mb-20" />

        <p className="text-2xl font-mono -mt-12 mb-8 lg:w-[90%] lg:text-left">
          Create an online album for free. Keep each other informed and invite
          family and friends. You make memories together!
        </p>

        <div className="flex flex-col lg:flex-row">
          <img
            className="w-[180px] h-[50px] mb-4 mx-auto lg:mx-0"
            src={require("../../../Images/3.png")}
            alt=""
          />
          <img
            className="w-[180px] h-[50px] mx-auto lg:mx-4"
            src={require("../../../Images/4.png")}
            alt=""
          />
        </div>
      </div>

      <div>
        <img
          className="hidden lg:inline-block lg:w-[80%] lg:float-right"
          src={require("../../../Images/1.png")}
          alt=""
        />
      </div>
    </div>
  );
};
export default PhotoShare;
