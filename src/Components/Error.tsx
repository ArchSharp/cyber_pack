import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center w-[300px]">
          <span>Page Not Found</span>
          <span className="flex items-center" onClick={() => navigate(-1)}>
            Go back <TiArrowBack className="ml-3 cursor-pointer" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Error;
