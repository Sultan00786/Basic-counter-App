import { useState } from "react";
import "./App.css";
import { IoMdAddCircle, IoIosRemoveCircle, IoMdRemoveCircle } from "react-icons/io";

function App() {

  const [numValue, setNumValue] = useState(0);

  const increamenValue = () => {
    if( numValue<100 ){
      setNumValue(numValue+1);
    }
    else{
      setNumValue(0);
    }
  }

  const decreamentValue = () => {
    if( numValue>-100 ){
      setNumValue(numValue-1);
    }
    else{
      setNumValue(0);
    }
  }

  const resetValue = () => {
    setNumValue(0)
  }


  return (
    <div style={{ userSelect: "none" }} className=" flex  justify-center bg-purple-light text-2xl w-[100%] h-[100vh] font-kanit " >

      <div className=" flex flex-col gap-5 items-center " >

        <div className=" bg-mikly-white border-purple-dark border-[3px] px-5 py-3 rounded-md mb-10 mt-44 " >
          Increment & Decrement
        </div>

        <div className="flex flex-row gap-3 w-full justify-between  " >

            {/* Decrease */}
            <div 
              onClick={
                () => (decreamentValue())
              }
              className=" text-4xl bg-purple-dark px-5 py-2 text-mikly-white border-mikly-white border-[3px] rounded-l-full cursor-pointer transition-all duration-200 hover:scale-95 " 
            >
              <IoMdRemoveCircle/>
            </div>

            <div className=" font-lemon text-5xl " >
              {numValue}
            </div>

            {/* Increase */}
            <div
              onClick={
                () => (increamenValue())
              }
              className=" text-4xl bg-purple-dark px-5 py-2 text-mikly-white border-mikly-white border-[3px] rounded-r-full cursor-pointer transition-all duration-200 hover:scale-95 " 
            >
              <IoMdAddCircle />
            </div>
        </div>

        <div
          className=" text-3xl bg-purple-dark px-5 py-2 text-mikly-white mt-5 rounded-lg border-mikly-white border-[3px] cursor-pointer transition-all duration-200 hover:scale-110 "
          onClick={
            () => ( resetValue() )
          }
        >
          Reset
        </div>


      </div>
    </div>
  );
}

export default App;
