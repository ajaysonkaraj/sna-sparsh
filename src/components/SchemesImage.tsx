"use client";

import Image from "next/image";

import SchemeImg from "../../public/images/home/Schemes_img1.png"
// import SchemeImg from "../../public/images/home/Scheme_img2.png"


export function SchemeImage(){

    return (
        <div>
            <Image src={SchemeImg} alt="Schemes"   height={450}
            draggable={false}/>
        </div>
    )
}