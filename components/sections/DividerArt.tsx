"use client";

import Image from "next/image";

export default function DividerArt() {
  // Aspect ratio from your Figma frame: 1384 × 776
  return (
    <div className="relative z-10 -mt-20 lg:-mt-20 lg:mb-0 mb-0 bg-black">
      {/* responsive width; always centered */}
      <div
        className="mx-auto w-[min(92vw,1100px)]"
        style={{ aspectRatio: "1384 / 776" }}
      >
        <Image
          src="/Abstract.svg" // <- your exported asset
          alt="Astract"
          fill
          priority
          className="
            object-contain
            drop-shadow-[0_40px_120px_rgba(6,182,212,.25)]
            [filter:saturate(1.05)]
          "
        />
      </div>

      {/* optional soft edge fade so it blends into the bg */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-10
                      [mask-image:linear-gradient(to bottom,black,transparent)] bg-black/30" />
    </div>
  );
}
