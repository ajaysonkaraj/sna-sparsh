"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { CardSpotlightDemo } from "./CardSpotlightDemo";
import { SchemeImage } from "./SchemesImage";
// import PaymentImage from "../../public/images/home/Payment_Flow.mp4"

export function AuroraBackgroundDemo() {

  
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4  px-4"
      >
        <div className="flex gap-10  justify-around flex-col md:flex-row" >
          <div className="lg:w-2/5  flex lg:justify-center justify-center    ">
            <SchemeImage/>
          </div>
          
          <div className="lg:w-2/5 md:w-1/2 flex lg:items-center md:order-2 items-center ">
            <CardSpotlightDemo/>
          </div>
        </div>
       
     


      </motion.div>
    </AuroraBackground>
  );
}
