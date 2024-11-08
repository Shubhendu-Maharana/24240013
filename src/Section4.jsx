const Section4 = () => {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-between px-24 py-16">
      <div>
        <img src="./Asset2.png" alt="" />
      </div>

      <div className="flex-1 flex flex-col min-h-full gap-y-10">
        <div>
          <p className="text-5xl">Contact Us</p>
        </div>

        <div className="flex flex-col gap-y-10">
          <div>
            <p className="text-[#1da8cd]">PHONE</p>
            <p>123-456-789</p>
          </div>
          <div>
            <p className="text-[#1da8cd]">EMAIL</p>
            <p>example@example.com</p>
          </div>
          <div>
            <p className="text-[#1da8cd]">SOCIAL</p>
            <div className="*:invert flex gap-x-2">
              <img src="./facebook.png" alt="" />
              <img src="./twitter.png" alt="" />
              <img src="./instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
