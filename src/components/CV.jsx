import React, { useState, useRef, useEffect } from "react";

export default function CV({ hideArrowTrigger }) {
  const [open, setOpen] = useState(false);

  const btnRef = useRef(null);
  const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 });

  const [arrowVisible, setArrowVisible] = useState(true);

  // hide arrow when triggered from outside (WindowsBar)
  useEffect(() => {
    if (hideArrowTrigger) {
      setArrowVisible(false);
    }
  }, [hideArrowTrigger]);

  useEffect(() => {
    if (!open) return;

    const update = () => {
      if (!btnRef.current) return;

      const rect = btnRef.current.getBoundingClientRect();

      setArrowPos({
        x: "3%",
        y: `${((rect.top + rect.height) / window.innerHeight) * 103}%`,
      });
    };

    requestAnimationFrame(update);

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [open]);

  return (
    <>
      {/* BUTTON */}
      <button
        ref={btnRef}
        onClick={() => setOpen(true)}
        className="
          relative w-full max-w-[240px]
          mx-auto

          flex items-center justify-center gap-2

          px-4 py-2

          text-white font-semibold tracking-wide text-sm

          bg-gradient-to-r from-[#81c2f3] to-[#2b75ae]

          rounded-lg

          border border-[#81c2f3]/60

          shadow-[0_0_14px_rgba(43,117,174,0.45)]

          hover:shadow-[0_0_28px_rgba(43,117,174,0.8)]
          hover:scale-[1.03]

          transition-all duration-300

          overflow-hidden
          active:scale-95

          animate-pulse
        "
      >
        <span className="absolute inset-0 rounded-lg border border-[#6bb7ff] opacity-40" />

        <span className="
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/25 to-transparent
          animate-[shine_2.5s_linear_infinite]
        " />

        <span className="relative z-10 flex items-center gap-2">
          📄 CV ჩამოტვირთვა
        </span>

        <style>
          {`
            @keyframes shine {
              0% { transform: translateX(-120%); }
              100% { transform: translateX(120%); }
            }
          `}
        </style>
      </button>

      {/* MODAL */}
      {open && (
        <>
          {arrowVisible && (
            <div className="fixed inset-0 z-[100000] pointer-events-none">
              <ArrowGuide
                x={arrowPos.x}
                y={arrowPos.y}
               text="OPEN FILE EXPLORER → CV DATA..."
                direction="down"
                visible={true}
              />
            </div>
          )}

          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex z-[9999]">

            <div className="flex w-[43%] h-full border-2 border-sky-400 shadow-[0_0_20px_#38bdf8]">

              {/* LEFT PDF */}
              <div className="flex-1 flex flex-col bg-black">

                <div className="h-12 flex items-center justify-between px-4 bg-black text-sky-400">
                  <span className="font-semibold">📄 CV Viewer</span>

                  <button
                    onClick={() => setOpen(false)}
                    className="hover:rotate-90 transition text-xl"
                  >
                    ✕
                  </button>
                </div>

              <div className="flex-1 bg-black overflow-hidden">
  <iframe
    src="/Sopo_IT_CV_.pdf"
    className="w-full h-full"
    title="CV PDF"
  />
</div>
              </div>

       
            </div>
          </div>
        </>
      )}
    </>
  );
}