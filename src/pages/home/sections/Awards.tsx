const Awards = () => {
  return (
    <div className="bg-[#fef9c3] max-h-[282px]">
      <div className="container flex justify-between items-center ">
        <div className="flex flex-col">
          <b className="text-xl md:text-2xl">
            2025 National Book Awards for Fiction Shortlist
          </b>
          <button className="bg-[#6366f1] rounded px-4 py-2 text-white font-semibold mt-8 w-max">
            Explore Now
          </button>
        </div>
        <img className="size-70" src="/Award.png" alt="award" />
      </div>
    </div>
  );
};

export default Awards;
