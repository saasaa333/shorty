import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-gray-light">
      <div className="container p-2 mx-auto">
        <nav className="pl-20 py-5  flex space-x-4">
          <div className="text-base text-white font-pbold">back to portfolio</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
