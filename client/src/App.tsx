import * as React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import "./index.css";
import "./styles.css";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <body className="bg-black h-full">
      <Header />
      <Container />
    </body>
  );
};

export default App;
