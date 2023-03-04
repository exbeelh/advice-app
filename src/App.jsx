import { useState } from 'react'

function App() {
  const [advice, setAdvice] = useState({
    id: 117,
    messages: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  const handleClick = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await data.json();
    setAdvice({ id: adviceData.slip.id, messages: adviceData.slip.advice });
  }

  return (
    <main>
      <div className="flex h-[100vh]">
        <div className="relative container lg:max-w-xs max-w-[12rem] lg:max-h-[52rem] max-h-[72rem] bg-[#313a49] text-center mx-auto my-auto rounded-xl drop-shadow-xl lg:p-5 p-3">
          <p className="text-sm mb-3 text-[#51fea9] py-3 lg:py-1">A D V I C E  #{advice.id}</p>
          <h1 className="text-cyan-100 text-base">"{advice.messages}"</h1>
          <img className="mx-auto py-6" src={"pattern-divider-desktop.svg"} alt="Devider" />
          <button className="absolute bottom-0 lg:left-[8.76rem] left-[5rem] h-10 w-10 rounded-full translate-y-[30px] bg-[#51fea9] hover:shadow-lg hover:shadow-[#51fea9]" onClick={handleClick}>
            <img className="mx-auto" src={"icon-dice.svg"} alt="Dice" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default App
