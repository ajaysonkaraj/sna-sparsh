import {MoveDown,MoveUp,ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function FlowChart(){
  const boxStyle =
  " flex items-center justify-center text-slate-600 text-sm font-bold p-4 h-20 w-full rounded-xl shadow-2xl  bg-slate-50 my-5 ";
const arrowStyle = "flex justify-center items-center text-slate-500"
const colOddStyle = "flex flex-col md:w-1/4 text-center mx-10"
const colEvenStyle = "flex flex-col-reverse md:flex-col md:w-1/4 md:text-center  mx-10"
const titleStyle = "text-slate-700 font-extrabold text-xl mt-20 text-center"


function useScreenSize() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };

    checkSize(); // Initial check
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMdUp;
}


const isMdUp = useScreenSize();
  return (
    <div className="min:h-screen lg:mx-20  md:flex  ">

      {/* Row first */}
      <div className={colOddStyle}>
        <div className={titleStyle}>E-budget</div>
        <div className="">
          <div className={boxStyle}>Check mothersanction data from Report</div>
          <div className={arrowStyle}><MoveDown /></div>
        </div>
        <div className="">
          <div className={boxStyle}>Allocate central and state budget from e-budget</div>
          <div className={arrowStyle}><MoveDown /></div>
        </div>
        <div className="">
          <div className={boxStyle}>Allocate mothersanction ceiling </div>
          <div className={arrowStyle}><MoveDown /></div>
        </div>
        <div className="">
          <div className={boxStyle}>Mapping of agencies from DDO</div>
          <div className={arrowStyle}><MoveDown /></div>
        </div>
        <div className="md:flex">
          <div className={boxStyle}>Allocate ceiling to agencies </div>
          {/* <div className="flex justify-center items-center text-slate-500">{isMdUp ? <ArrowRight /> : ""}</div> */}
        </div>
      </div>

      {/* Row Second */}
      <div className={titleStyle}>{isMdUp?"":<span>E-Agency</span>}</div>
      <div className={colEvenStyle}>
      <div className={titleStyle}>{isMdUp?<span>E-Agency</span>:""}</div>
        
        <div className="">
          <div className={boxStyle}>Vendor ben bill send to DDO</div>
          <div className={arrowStyle}> {isMdUp ? <MoveUp /> : <MoveDown />}</div>
        </div>
        <div className="">
          <div className={boxStyle}>Vendor ben bill entry</div>
          <div className={arrowStyle}> {isMdUp ? <MoveUp /> : <MoveDown />}</div>
        </div>
        <div className="">
          <div className={boxStyle}>Vendor ben account/aadhar entry</div>
          <div className={arrowStyle}> {isMdUp ? <MoveUp /> : <MoveDown />}</div>
        </div>
        <div className="">
          <div className={boxStyle}>Report for agencies ceiling in agency login </div>
          <div className={arrowStyle}> {isMdUp ? <MoveUp /> : <MoveDown />} </div>
        </div>
      </div>



      {/* Row Third */}
      <div className={colOddStyle}>
      <div className={titleStyle}>E-Bill</div>
        <div className="">
          <div className={boxStyle}>Vendor ben bill accept at DDO level</div>
          <div className={arrowStyle}><MoveDown /></div>
        </div>
        <div className="">
          <div className={boxStyle}>Vendor ben accepted bill xml upload</div>
          <div className={arrowStyle}><MoveDown /></div>
        </div>
        <div className="">
          <div className={boxStyle}>Vendor ben accepted bill final preparation</div>
          <div className={arrowStyle}><MoveDown /></div>
        </div>
        <div className="">
          <div className={boxStyle}>Reports for DDO</div>
          <div className={arrowStyle}><MoveDown /></div>
        </div>
        <div className="flex">
          <div className={boxStyle}>Finalize bill by DDO</div>
          {/* <div className="flex justify-center items-center text-slate-500">{isMdUp ? <ArrowRight /> : ""}</div> */}

        </div>
      </div>
      
 {/* Row Fourth */}
 <div className={titleStyle}>{isMdUp?"":<span>CAU</span>}</div>

 <div className={colEvenStyle}>
 <div className={titleStyle}>{isMdUp?<span>CAU</span>:""}</div>
       
        <div className="">
          <div className={boxStyle}>UR generation treasury wise</div>
          <div className={arrowStyle}> {isMdUp ? <MoveUp /> : ""}</div>
        </div>
        <div className="">
          <div className={boxStyle}>PFMS JSON File creation</div>
          <div className={arrowStyle}> {isMdUp ? <MoveUp /> : <MoveDown />}</div>
        </div>
        <div className="">
          <div className={boxStyle}>Send Json to PFMS and check acceptance</div>
          <div className={arrowStyle}> {isMdUp ? <MoveUp /> : <MoveDown />}</div>
        </div>
        <div className="">
          <div className={boxStyle}>Create XML file</div>
          <div className={arrowStyle}> {isMdUp ? <MoveUp /> : <MoveDown />} </div>
        </div>
      </div>

    </div>
  );
}