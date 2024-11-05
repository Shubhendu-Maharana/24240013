const Section1 = () => {
  return (
    <div className="bg-[#1da8cd] min-h-screen flex flex-col">
      <div className="flex justify-between px-14 items-center py-12">
        <div className="text-white text-xl border-l-4 border-black pl-2 flex items-center justify-center">
          <p>Pankaj + Co.</p>
        </div>

        <div className="flex text-xl gap-x-36 text-white font-semibold">
          <p>Home</p>
          <p>Our Services</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="flex-1 flex justify-between items-center text-white px-14">
        <div className="flex flex-col gap-y-5">
          <div className="text-7xl">
            <p>Experience</p>
            <p>excellnce</p>
            <p>with us.</p>
          </div>
          <div className="text-xl">
            <p>Your partner in business</p>
          </div>
          <div className="">
            <button className="bg-[#263237] px-8 py-3 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="">
          <img src="/image-1.png" alt="Image" className="w-[55rem]" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
