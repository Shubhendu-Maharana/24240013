const Section3 = () => {
  return (
    <div className="bg-[#263237] min-h-screen flex text-white px-24 py-16">
      <div className="w-1/2 flex flex-col justify-around">
        <div>
          <h2 className="text-4xl pb-2">The Expenditure</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            esse quia repellendus ex alias quibusdam sunt quaerat voluptatem
            maxime. Eveniet ullam ex numquam asperiores tenetur. Voluptatum
            doloribus necessitatibus maxime aut.
          </p>
        </div>

        <div className="flex">
          <div className="bg-[#ffffff10] p-8 rounded-full">
            <p>Know More...</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex relative">
        <div className="flex flex-col mb-28 flex-1 items-center justify-between">
          <p>50</p>
          <p>40</p>
          <p>30</p>
          <p>20</p>
          <p>10</p>
          <p>0</p>
        </div>

        <div className="h-full w-full flex flex-col">
          <div className="flex justify-between items-end w-full p-4">
            <div className="bg-slate-200 w-24 rounded-t-xl h-24 overflow-hidden">
              <div className="w-full h-1/2 bg-blue-400"></div>
            </div>
            <div className="bg-teal-500 w-24 rounded-t-xl h-44 overflow-hidden">
              <div className="w-full h-1/4 bg-blue-400"></div>
              <div className="w-full h-1/3 bg-slate-200"></div>
            </div>
            <div className="bg-teal-500 w-24 rounded-t-xl h-64 overflow-hidden">
              <div className="w-full h-1/4 bg-blue-400"></div>
              <div className="w-full h-1/3 bg-slate-200"></div>
            </div>
            <div className="bg-teal-500 w-24 rounded-t-xl h-[27rem] overflow-hidden">
              <div className="w-full h-1/4 bg-blue-400"></div>
              <div className="w-full h-1/3 bg-slate-200"></div>
            </div>
            <div className="bg-teal-500 w-24 rounded-t-xl h-full overflow-hidden">
              <div className="w-full h-1/4 bg-blue-400"></div>
              <div className="w-full h-1/3 bg-slate-200"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 left-0 flex w-full justify-between ml-[1rem] *:-rotate-45">
          <p>Sales</p>
          <p>Service</p>
          <p>Infra..</p>
          <p>Promotion</p>
          <p>Compenstion</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
