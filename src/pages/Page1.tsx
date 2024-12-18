import { useState } from "react";
import LoadingPage from "../components/pageLoding/LoadingPage";




const Page1 = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 && <LoadingPage setPage={setPage} />}

    </>
  );
};

export default Page1;