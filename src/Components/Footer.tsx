export const Footer = () => {
  return (
    <div className="h-[85vh] bg-main flex items-center lg:items-start lg:justify-center pt-[10vh] flex-col lg:flex-row">
      <div className="flex items-start lg:w-[50vw]">
        <div className="w-[45vw] lg:w-[22vw]">
          <div className="text-orange-600 font-bold">
            CONNECT
            <hr />
          </div>
        </div>

        <div className="w-[45vw] lg:w-[22vw] ml-[3vw]">
          <div className="text-orange-600 font-bold">
            ABOUT US
            <hr />
          </div>

          <div className="mt-10 text-sm text-white">
            CyberPack was founded in 1999 and has grown to over 600 staff with
            offices in South Africa, Kenya and Europe (UK, Ireland, the
            Netherlands and Switzerland). We service more than 100 medium and
            large organisations and build long term partnerships with our
            clients.
          </div>
          <button className="mt-10 px-3 py-1 font-semibold text-sm text-white rounded-2xl bg-blue-400 hover:bg-orange-500">
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="flex items-start mt-5 lg:mt-0">
        <div className="w-[45vw] lg:w-[22vw] mr-[1vw]">
          <div className="text-orange-600 font-bold">
            WORK FOR CYBERPACK
            <hr />
          </div>

          <div className="mt-10 text-sm text-white">
            Grow your IT career with us. Remote and on-site vacancies available
            for mobile, Front-End, Java, Microsoft and Full-Stack developers.
            UX/UI Designers, Scrum Masters, Business Analysts, Project Managers
            and Agile Coaches.
          </div>
          <button className="mt-10 px-3 py-1 font-semibold text-sm text-white rounded-2xl bg-blue-400 hover:bg-orange-500">
            LEARN MORE
          </button>
        </div>

        <div className="w-[45vw] lg:w-[22vw]">
          <div className="text-orange-600 font-bold">
            CYBERPACK VALUES
            <hr />
          </div>

          <div className="mt-10 text-sm text-white">
            Our values guide us in making a positive impact with our clients,
            partners and the communities we operate in. <br /> <br />
            Our Purpose: <br /> <br />
            to Serve <br />
            to Solve <br />
            to Grow
          </div>
          <button className="mt-10 px-3 py-1 font-semibold text-sm text-white rounded-2xl bg-blue-400 hover:bg-orange-500">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};
