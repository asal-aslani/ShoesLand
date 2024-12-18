import { useState } from "react";
import LoadingPage from "../components/pageLoding/LoadingPage";
import WelcomePage from "../components/pageWelcome/WelcomePage";



const Page1 = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 && <LoadingPage setPage={setPage} />}
      {page === 1 && <WelcomePage setPage={setPage} />}
    </>
  );
};

export default Page1;