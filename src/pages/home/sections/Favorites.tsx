const Favorites = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-between gap-10 items-center mt-14 text-[#1c2024] md:flex-row md:gap-0">
        <img src="/FavoritesBanner.png" alt="banner" className="size-100 ml-2" />
        <div className="flex flex-col max-w-[345px] md:mr-55">
          <b className="text-xl md:text-3xl">
            Find Your Favorite <b className="text-[#6366f1]">Book Here!</b>
          </b>
          <p className="my-4 hidden md:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ad non
            reprehenderit. Reiciendis illo iusto incidunt distinctio
            exercitationem officiis dicta dolores dolorem ea! Non saepe,
            voluptatum cupiditate beatae in dolore!
          </p>
          <div className="flex justify-between gap-5 md:gap-0">
            <div className="flex flex-col">
              <b className="text-2xl">800+</b>
              <span>Book Listing</span>
            </div>
            <div className="flex flex-col">
              <b className="text-2xl">550+</b>
              <span>Register User</span>
            </div>
            <div className="flex flex-col">
              <b className="text-2xl">1,200+</b>
              <span>Books Sold</span>
            </div>
          </div>
          <button className="hidden bg-[#6366f1] rounded px-4 py-2 text-white font-semibold mt-8 w-max md:block">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
