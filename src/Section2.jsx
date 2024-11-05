const Section2 = () => {
  return (
    <div className="bg-[#263237] text-white min-h-screen flex flex-col justify-between items-start p-24">

      <div className="w-1/2 flex flex-col gap-y-6">
        <h2 className="text-[#1da8cd] text-5xl font-bold">Our Services</h2>
        <p>
          Share your services or product offerings here. Present as simple
          headers that can loud Share your services or product offerings here.
          Present as simple headers that can loud Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Eos perferendis sint rem ad ipsum
          voluptatibus fuga asperiores cupiditate incidunt fugiat eius,
          voluptates, blanditiis praesentium tenetur ipsam ex magni dolore
          dignissimos?
        </p>
      </div>

        <div className="flex gap-x-14">
            <div className="flex flex-col bg-[#ffffff10] p-8 rounded-3xl gap-y-8">
                <div className="">
                  <img src="./Asset3.png" alt="" className="w-28" />
                </div>
                <div>
                  <p className="pb-2 text-[#1da8cd] font-bold">BUSINESS MODEL</p>
                  <p>Share your services or product offerings here. Present as simple
                  headers that can</p>
                </div>
            </div>
            <div className="flex flex-col bg-[#ffffff10] p-8 rounded-3xl gap-y-8">
                <div className="">
                  <img src="./Asset4.png" alt="" className="w-28" />
                </div>
                <div>
                  <p className="pb-2 text-[#1da8cd] font-bold">BUSINESS MODEL</p>
                  <p>Share your services or product offerings here. Present as simple
                  headers that can</p>
                </div>
            </div>
            <div className="flex flex-col bg-[#ffffff10] p-8 rounded-3xl gap-y-8">
                <div className="">
                  <img src="./Asset5.png" alt="" className="w-28" />
                </div>
                <div>
                  <p className="pb-2 text-[#1da8cd] font-bold">BUSINESS MODEL</p>
                  <p>Share your services or product offerings here. Present as simple
                  headers that can</p>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Section2;
