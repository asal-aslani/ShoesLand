import BackgrandWelcomepage from "./BackgrandWelcomePage";

interface WelcomePageProps {
  setPage: (value: number) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setPage }) => {
  setTimeout(() => {
    setPage(2);
  }, 5000);

  return (
    <div className="">
      <BackgrandWelcomepage/>
    </div>
  );
};
export default WelcomePage;
