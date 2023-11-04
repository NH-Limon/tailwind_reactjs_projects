const Footer = () => {
  return (
    <div className="bg-gray-300 py-40 xl:text-2xl">
      <div className="flex flex-row justify-center items-center text-center flex-wrap lg:flex-row lg:flex-nowrap">
        <div className="flex flex-col basis-1/2 mb-4 gap-4">
          <h2 className="text-purple-900 text-xl font-extrabold xl:text-2xl">MYALBUM</h2>
          <a href="#home">Home</a>
          <a href="#help">Help Center</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About Us</a>
        </div>

        <div className="flex flex-col basis-1/2 mb-4 gap-4">
          <h2 className="text-purple-900 text-xl font-extrabold xl:text-2xl">
            PRODUCTS
          </h2>
          <a href="#premium">MyAlbum Premium</a>
          <a href="#photobooks">Photo Books</a>
          <a href="#iphone">iPhone App</a>
          <a href="#android">Android App</a>
        </div>

        <div className="flex flex-col basis-1/2 mb-4 gap-4">
          <h2 className="text-purple-900 text-xl font-extrabold xl:text-2xl">
            FOR PROFESSIONALS
          </h2>
          <a href="#pro">MyAlbum Pro</a>
          <a href="#teamup">Team Up</a>
          <a href="#contests">Photo Contests</a>
          <a href="#ngos_schools">NGOs & Schools</a>
        </div>

        <div className="flex flex-col basis-1/2 mb-4 gap-4">
          <h2 className="text-purple-900 text-xl font-extrabold xl:text-2xl">
            FOLLOW US
          </h2>
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-4 font-thin text-gray-600">
        <a className="hover:underline" href="#legal">
          Legal
        </a>
        <a className="hover:underline" href="#privacy">
          Privacy
        </a>
      </div>
    </div>
  );
};
export default Footer;
