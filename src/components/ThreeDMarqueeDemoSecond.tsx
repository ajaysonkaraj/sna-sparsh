import { ThreeDMarquee } from "./ui/3d-marquee";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function ThreeDMarqueeDemoSecond() {
  const images = [
    // "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    // "https://assets.aceternity.com/animated-modal.png",
    // "https://assets.aceternity.com/animated-testimonials.webp",
    // "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    // "https://assets.aceternity.com/github-globe.png",
    // "https://assets.aceternity.com/glare-card.png",
    // "https://assets.aceternity.com/layout-grid.png",
    // "https://assets.aceternity.com/flip-text.png",
    // "https://assets.aceternity.com/hero-highlight.png",
    // "https://assets.aceternity.com/carousel.webp",
    // "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    // "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    // "https://assets.aceternity.com/signup-form.png",
    // "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    // "https://assets.aceternity.com/spotlight-new.webp",
    // "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    // "https://assets.aceternity.com/tabs.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    // "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    // "https://assets.aceternity.com/glowing-effect.webp",
    // "https://assets.aceternity.com/hover-border-gradient.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    // "https://assets.aceternity.com/macbook-scroll.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    // "https://assets.aceternity.com/multi-step-loader.png",
    // "https://assets.aceternity.com/vortex.png",
    // "https://assets.aceternity.com/wobble-card.png",
    // "https://assets.aceternity.com/world-map.webp",


    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/2/200/300",
    "https://picsum.photos/id/3/200/300",
    "https://picsum.photos/id/4/200/300",
    "https://picsum.photos/id/5/200/300",
    "https://picsum.photos/id/6/200/300",
    "https://picsum.photos/id/7/200/300",
    "https://picsum.photos/id/8/200/300",
    "https://picsum.photos/id/9/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/11/200/300",
    "https://picsum.photos/id/13/200/300",
    "https://picsum.photos/id/14/200/300",
    "https://picsum.photos/id/12/200/300",
    "https://picsum.photos/id/15/200/300",
    "https://picsum.photos/id/16/200/300",
    "https://picsum.photos/id/17/200/300",
    "https://picsum.photos/id/18/200/300",
    "https://picsum.photos/id/19/200/300",
    "https://picsum.photos/id/20/200/300",
    "https://picsum.photos/id/21/200/300",
    "https://picsum.photos/id/22/200/300",
    "https://picsum.photos/id/23/200/300",
    "https://picsum.photos/id/24/200/300",
    "https://picsum.photos/id/25/200/300",
    "https://picsum.photos/id/26/200/300",
    "https://picsum.photos/id/27/200/300",
    "https://picsum.photos/id/28/200/300",
    "https://picsum.photos/id/29/200/300",
    "https://picsum.photos/id/30/200/300",
  ];
  const words = [
    {
      text: " Just-in-Time",
      className:"text-white"
    },
    {
      text: "Fund",
      className:"text-white"
    },
    {
      text: "release",
      className:"text-white"
    },
    {
      text: "of",
      className:"text-white"
    },
    {
      text: "CSS",
      className: "text-blue-700 dark:text-blue-500",
    },
    {
        text: "funds.",
        className: "text-blue-700 dark:text-blue-500",
      },
  ];

  return (
    <div className="relative mx-0 my-0 flex  h-96 md:h-screen w-full max-w-8xl flex-col items-center justify-center overflow-hidden ">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-6xl font-bold text-balance text-white md:text-7xl lg:text-9xl">
        SNA SPARSH
        {/* <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
        </span>{" "} */}
      </h2>
      <div className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
      
       <TypewriterEffect words={words} />
      </div>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Login
        </button>
        <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          About
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
    
  );
}
