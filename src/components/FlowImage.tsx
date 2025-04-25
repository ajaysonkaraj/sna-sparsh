"use client";

import Image from "next/image";
export default function FlowImage(){

    return (
        <div>
             <div className=" bg-white flex  justify-center mt-10 " >
                <Image
                src="/images/home/Payment_Flow.gif" 
                alt="Payment Flow"
                width={1100} 
                height={800}
                unoptimized 
                quality={100}
                draggable={false}
                />
             </div>
           
        
      </div>
    )
}