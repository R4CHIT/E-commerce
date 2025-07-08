import React, { useState } from "react";

function Diceroll() {
  const [result, setResult] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    setIsRolling(true);

    setTimeout(() => {
      const random = Math.floor(Math.random() * 6) + 1;
      setResult(random);
      setIsRolling(false);
    }, 600);
  };

  const dot = <div className="h-3 w-3 bg-black rounded-full"></div>;

  const renderDiceFace = () => {
    switch (result) {
      case 1:
        return <div className="flex justify-center items-center h-full">{dot}</div>;
      case 2:
        return (
          <div className="flex flex-col justify-between h-full p-2">
            <div className="self-start">{dot}</div>
            <div className="self-end">{dot}</div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-between h-full items-center p-2">
            <div className="self-start">{dot}</div>
            <div>{dot}</div>
            <div className="self-end">{dot}</div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col justify-between h-full p-2">
            <div className="flex justify-between">
              {dot}
              {dot}
            </div>
            <div className="flex justify-between">
              {dot}
              {dot}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col justify-between h-full p-2">
            <div className="flex justify-between">
              {dot}
              {dot}
            </div>
            <div className="flex justify-center">{dot}</div>
            <div className="flex justify-between">
              {dot}
              {dot}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col justify-between h-full p-2">
            <div className="flex justify-between">
              {dot}
              {dot}
              {dot}
            </div>
            <div className="flex justify-between">
              {dot}
              {dot}
              {dot}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center gap-20">
      
      <div
        className={`border border-white rounded-2xl bg-white h-20 w-20 ${
          isRolling ? "animate-dice-roll" : ""
        }`}
      >
        {!isRolling && renderDiceFace()}
      </div>

      
      <button
        onClick={handleClick}
        disabled={isRolling}
        className="bg-white px-6 py-2 rounded-xl font-semibold"
      >
        {isRolling ? "Rolling..." : "Roll"}
      </button>

      
      <style>{`
        @keyframes roll {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(90deg); }
          50% { transform: rotate(180deg); }
          75% { transform: rotate(270deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-dice-roll {
          animation: roll 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Diceroll;
