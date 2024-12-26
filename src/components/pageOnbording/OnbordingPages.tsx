import { useState } from "react";
import OnbordingSlide1 from "./slides/OnbordingSlide1";
import OnbordingSlide2 from "./slides/OnbordingSlide2";
import OnbordingSlide3 from "./slides/OnbordingSlide3";



const OnboardingPages = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {page === 0 && <OnbordingSlide1 setPage={setPage} />}
      {page === 1 && <OnbordingSlide2 setPage={setPage} />}
      {page === 2 && <OnbordingSlide3 setPage={setPage} />}

    </div>
  );
};

export default OnboardingPages;