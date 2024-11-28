import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
          <h2 className="text-white text-6xl text-center pb-4 font-pbold">shor.ty</h2>
          <p className="text-white text-center pb-10 text-xl font-pbold">
            paste a link to shorten it
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  shor.ty/
                </div>
                <input
                  type="text"
                  placeholder="add your link"
                  required
                  className="block w-full p-4 ps-16 text-sm text-gray-900 border border-gray-300 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullUrl(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-pbold h-full text-white bg-gray-light rounded-xl border border-white focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  short it
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
