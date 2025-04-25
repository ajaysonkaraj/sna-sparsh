import { CardSpotlight } from "@/components/ui/card-spotlight";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-auto md:h-[580px]">
      <p className="text-4xl font-bold relative z-20 mt-2 text-white text-center">
        WHAT IS IT?
      </p>
      <p className="text-neutral-300 mt-4 relative z-20 text-xl">
        SNA SPARSH is a cash management initiative for Centrally Sponsored schemes fund flow mechanism though an integrated framework
        of PFMS. State IFMIS and e-kuber platform of RBI.
      </p>
    </CardSpotlight>
  );
}
