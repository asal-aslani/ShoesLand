import { useNavigate } from "react-router";
interface Slide3 {
    setPage: (value: number) => void;
  }
  const OnbordingSlide3: React.FC<Slide3> = () => {
    const navigate = useNavigate();
    return (
      <div className="w-full h-screen flex flex-col items-center justify-centerp">
        <div className="w-full h-[60%]">
          <img src="/src/assets/obsp3-img.png" className="w-full h-full" />
        </div>
        <div className="relative w-full h-full flex flex-col items-center gap-16 pt-8 px-6">
          <p className="text-4xl leading-relaxed font-bold text-center">
            Let’s fulfill your fashion needs with shoearight now!
          </p>
          <div className="felx flex-col">
            <div className=" flex gap-2 absolute bottom-36 left-[40%]">
              <div className="w-8 h-1 bg-black opacity-50"></div>
              <div className="w-8 h-1 bg-black opacity-50"></div>
              <div className="w-8 h-1 bg-black"></div>
            </div>
            <button
             onClick={() => navigate('/login')} className="bg-black hover:bg-gray-800 rounded-full text-white w-full py-3 absolute bottom-8">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default OnbordingSlide3;