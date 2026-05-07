import React, { useEffect } from "react";
import html2pdf from "html2pdf.js";
import CVBtn from "./CVBtn";
import { FiDownload } from "react-icons/fi";
export default function Form({ onClose }) {
  const fields = [
    { label: "სახელი:", value: "სოფო" },
    { label: "გვარი:", value: "გურგენიძე" },
    { label: "პირადი ნომერი:", value: "01724093498" },
    { label: "სქესი:", value: "მდედრობითი" },
    { label: "დაბადების თარიღი:", value: "03-05-2004" },
    { label: "ელ-ფოსტა:", value: "sopo.gurgenidze3@gmail.com" },
    { label: "ტელეფონი:", value: "+995 593 833 833" },
    { label: "ქალაქი:", value: "თბილისი" },
    { label: "მისამართი:", value: "ოთარ ლორთქიფანიძე ქ. 24" }
  ];

  const Card = ({ title, children }) => (
    <div className="relative border border-[#266698] rounded-xl p-3 pt-5 bg-white">
      <div className="absolute -top-2 left-3 bg-white px-2 text-xs text-[#266698] font-bold">
        {title}
      </div>
      {children}
    </div>
  );

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);
const downloadBothPDFs = async () => {
  const original = document.getElementById("cv");

  if (!original) return;

  // 1. create print container
  const printContainer = document.createElement("div");

  printContainer.style.position = "fixed";
  printContainer.style.left = "0";
  printContainer.style.top = "0";
  printContainer.style.width = "100%";
  printContainer.style.height = "100%";
  printContainer.style.background = "white";
  printContainer.style.zIndex = "999999";

  // 2. clone properly
  const clone = original.cloneNode(true);

  // IMPORTANT FIXES
  clone.style.maxHeight = "none";
  clone.style.height = "auto";
  clone.style.overflow = "visible";
  clone.style.width = "794px";
  clone.style.margin = "0 auto";

  const scrollContainer = clone.querySelector(".overflow-y-auto");
  if (scrollContainer) {
    scrollContainer.style.overflow = "visible";
    scrollContainer.style.maxHeight = "none";
    scrollContainer.style.height = "auto";
  }

  printContainer.appendChild(clone);
  document.body.appendChild(printContainer);

  // wait for render
  await new Promise((r) => setTimeout(r, 300));

  const opt = {
    margin: 0,
    filename: "Sopo_IT_Form.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0,
    },
    jsPDF: {
      unit: "px",
      format: "a4",
      orientation: "portrait",
    },
  };

  await html2pdf().set(opt).from(printContainer).save();

  // cleanup
  document.body.removeChild(printContainer);

  // second PDF (CV file)
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "/Sopo_IT_CV_.pdf";
    link.download = "Sopo_IT_CV.pdf";
    link.click();
  }, 400);
};


  // ✅ DOWNLOAD EXISTING CV FILE
  const downloadCVFile = () => {
    const link = document.createElement("a");
    link.href = "/Sopo_IT_CV_.pdf";
    link.download = "Sopo_IT_CV.pdf";
    link.click();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="scale-[0.85] origin-top">

        {/* MAIN CARD */}
        <div
          id="cv"
          className="w-[520px] max-h-[780px] bg-gray-100 rounded-2xl shadow-2xl flex flex-col border-4 border-[#266698] overflow-hidden"
        >

          {/* HEADER */}
          <div
            className="h-14 flex items-center justify-between px-4 text-white font-geo"
            style={{ backgroundColor: "#2b75ae" }}
          >
            <span>📄 განაცხადის გაკეთება</span>
            <span
              onClick={onClose}
              className="cursor-pointer text-lg opacity-80 hover:opacity-100"
            >
              ✕
            </span>
          </div>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">

            {/* FIELDS (UNCHANGED) */}
            <div className="space-y-3 text-black">
              {fields.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[170px] text-sm text-gray-600 font-geo">
                    {item.label}
                  </div>
                  <div className="flex-1 bg-white px-3 py-2 rounded-lg border text-sm">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CV DOWNLOAD (STATIC FILE) */}
            <Card title="რეზიუმე (PDF)">
              <div className="text-center">
                <CVBtn onClick={downloadCVFile} />
              </div>
            </Card>

            {/* EDUCATION */}
            <Card title="განათლება">
              <div className="text-sm space-y-2 text-black">
                <div>თვითნასწავლი — ქსელური ტექნოლოგიები</div>
                <div className="text-xs">ონლაინ რესურსებით და პრაქტიკით</div>
              </div>
            </Card>

            {/* SYSTEM OPS */}
            <Card title="სისტემური ოპერაციები">
              <div>CMD/PowerShell: სისტემის კონფიგურაცია და დიაგნოსტიკა</div>
              <div>ადმინისტრირება: მომხმარებლები და ქსელი</div>
              <div>BIOS/UEFI: კონფიგურაცია და სისტემის გამართვა</div>
            </Card>

            {/* PROGRAMMING */}
            <Card title="პროგრამირება">
              <div className="text-sm space-y-1 text-black">
                <div>Python (networking, scripting)</div>
                <div>JavaScript / React / Next.js</div>
              </div>
            </Card>

            {/* EXPERIENCE */}
            <Card title="გამოცდილება">
              <div className="text-sm space-y-3 text-black">
                <div>
                  <div className="font-semibold">IT მხარდაჭერი</div>
                  <div className="text-xs text-gray-500">10 თვე</div>
                </div>

                <div>
                  <div className="font-semibold">Full Stack Developer</div>
                  <div className="text-xs text-gray-500">3 წელი</div>
                </div>
              </div>
            </Card>

            {/* LANGUAGES */}
            <Card title="ენები">
              <div className="text-sm text-black">ინგლისური / რუსული</div>
            </Card>

            {/* LICENSE */}
            <Card title="მართვის მოწმობა">
              <div className="text-sm text-black">x</div>
            </Card>

            <div className="text-[11px] text-gray-600">
              ✔ თანახმა ვარ მონაცემების დამუშავებაზე
            </div>

            <div className="h-6" />
          </div>

          {/* FOOTER (FORM PDF EXPORT) */}
          <div className="p-3 border-t bg-gray-100">
          <button
  onClick={downloadBothPDFs}
  className="w-full h-10 bg-[#2b75ae] hover:bg-[#225e8b] text-white rounded-lg font-geo font-semibold flex items-center justify-center gap-2"
>
  <FiDownload  size={18} />
  PDF ჩამოტვირთვა
</button>
          </div>

        </div>
      </div>
    </div>
  );
}