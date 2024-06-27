import { useFormik } from "formik";
import * as Yup from "yup";
import { IServiceEnquiry } from "../Features/User/type";
import { useAppDispatch } from "../Store/store";
import { useState } from "react";

interface ConnectWithUsProps {
  connect: any;
  mt: string;
}

export const ConnectWithUs = ({ connect, mt }: ConnectWithUsProps) => {
  const dispatch = useAppDispatch();
  const [isRead, setIsRead] = useState(false);
  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string().required("Email is required"),
    Country: Yup.string().required("Country is required"),
    Questions: Yup.string().required("Questions is required"),
    IsGrantCyberPack: Yup.boolean().required("Questions is required"),
  });

  const initialValues = {
    Name: "",
    Email: "",
    Country: "",
    Questions: "",
    IsGrantCyberPack: false,
  };

  // Submit handler
  const handleSubmit = (values: IServiceEnquiry) => {
    dispatch(() => {});
  };

  const formik = useFormik<IServiceEnquiry>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className={`connect-with-us ${mt} flex flex-col`} ref={connect}>
      <div className=" font-Cervanttis text-white text-3xl md:text-5xl font-bold mt-10 text-center z-[3]">
        Connect with CyberPack
      </div>
      <div className="my-24 flex flex-col lg:flex-row items-center">
        <div className="w-[90vw] lg:w-[25vw] ml-[7vw] z-[3]">
          <h3 className="text-orange-600 text-3xl font-bold">
            World Class IT services.
          </h3>
          <div className="text-white text-3xl font-bold">
            Regional presence to partner with you for{" "}
            <span className="text-orange-600 text-3xl font-bold">success.</span>
          </div>
          <div className="mt-5 text-white text-left">
            CyberPack leadership and experts are located in our customer regions
            including the United Kingdom, Ireland, Netherlands, Switzerland,
            South Africa, Kenya and the United Arab Emirates. Local capability
            to partner with you for all your service requirements. Global
            scalability to ensure fast, efficient and effective fulfilment on
            your IT service and staffing needs. We are ready to partner with
            you. Contact your local CyberPack leadership today.
          </div>
        </div>
        <div className="bg-white z-[3] rounded-lg w-[90vw] md:w-[75vw] lg:w-[34vw] h-[515px] mx-[5vw] lg:mx-16 mt-10 lg:mt-0 overflow-y-auto">
          <div className="pl-7 pt-3 text-3xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            <span className="mr-2 font-bold">SERVICE</span>ENQUIRIES
          </div>
          <form onSubmit={formik.handleSubmit} className="">
            <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
              <input
                type="text"
                id="Name"
                name="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name || ""}
                placeholder="Name"
                className="w-[100%] border-[1px] border-gray-400 py-2 px-2 rounded-md text-sm"
              />
              {formik.touched.Name && formik.errors.Name && (
                <div className="error text-red-400 text-sm">
                  {formik.errors.Name}
                </div>
              )}
            </div>

            <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
              <input
                type="text"
                id="Email"
                name="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email || ""}
                placeholder="Email"
                className="w-[100%] border-[1px] border-gray-400 py-2 px-2 rounded-md text-sm"
              />
              {formik.touched.Email && formik.errors.Email && (
                <div className="error text-red-400 text-sm">
                  {formik.errors.Email}
                </div>
              )}
            </div>

            <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
              <select
                id="Country"
                name="Country"
                value={formik.values.Country || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[100%] border-[1px] border-gray-400 py-2 px-2 rounded-md text-sm"
              >
                <option value="" className="text-slate-400 option">
                  Country
                </option>
                <option value="saab">Nigeria</option>
                <option value="mercedes">Australia</option>
                <option value="audi">Texas</option>
              </select>
              {formik.touched.Country && formik.errors.Country && (
                <div className="error text-red-400 text-sm">
                  {formik.errors.Country}
                </div>
              )}
            </div>

            <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
              <textarea
                rows={4}
                id="Questions"
                name="Questions"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Questions || ""}
                placeholder="What can we help you with?"
                className="w-[100%] border-[1px] border-gray-400 py-2 px-2 rounded-md text-sm"
              />
              {formik.touched.Questions && formik.errors.Questions && (
                <div className="error text-red-400 text-sm">
                  {formik.errors.Questions}
                </div>
              )}
            </div>

            <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
              <div className="flex items-center">
                <label>
                  <input
                    type="checkbox"
                    name="IsRead"
                    checked={isRead}
                    onChange={(e) => setIsRead(!isRead)}
                  />
                </label>
                <div className="text-xs pl-2 underline">
                  I have read, understand and accept the Privacy Notice and
                  Terms of Service
                </div>
              </div>
            </div>

            <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
              <div className="flex items-center">
                <label>
                  <input
                    type="checkbox"
                    name="IsGrantCyberPack"
                    checked={formik.values.IsGrantCyberPack}
                    onChange={formik.handleChange}
                  />
                </label>
                <div className="text-xs pl-2">
                  I grant CyberPack permission to process the personal
                  information provided
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white font-bold rounded-3xl bg-main w-[90%] px-5 py-2"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="z-[3]"></div>
      </div>
    </div>
  );
};
