
import LogoLoadingPage from "./LogoLoadingPage";
import NameLoadingPage from "./NameLoadingPage";
import SpinnerLoadingPage from "./SpinnerLoadingPage";

interface LoadingProps {
  setPage: (value: number) => void;
}

const LoadingPage: React.FC<LoadingProps> = ({ setPage }) => {
  setTimeout(() => {
    setPage(1);
  }, 5000);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-2 ">
        <LogoLoadingPage/>
        <NameLoadingPage/>
      </div>

      <SpinnerLoadingPage/>
    </div>
  );
};
export default LoadingPage;
