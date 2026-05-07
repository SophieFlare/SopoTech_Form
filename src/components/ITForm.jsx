import React, { useEffect } from "react";
import html2pdf from "html2pdf.js";
import CVBtn from "./CVBtn"
export default function Form({ onClose }) {
  const fields = [
    { label: "სახელი:", value: "სოფო" },
    { label: "გვარი:", value: "გურგენიძე" },
    { label: "პირადი ნომერი:", value: "01724093498" },
    { label: "სქესი:", value: "მდედრობითი" },
    { label: "დაბადების თარიღი:", value: "03-05-2004" },
    { label: "ელ-ფოსტა:", value: "sopo.gurgenidze3@email.com" },
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

  // PDF export
  const downloadPDF = () => {
    const element = document.getElementById("cv");

    const options = {
      margin: 0,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200 p-6">

      {/* SCALE WRAPPER (zoom out) */}
      <div className="scale-[0.85] origin-top">

        <div
          id="cv"
          className="
            w-[520px]
            max-h-[780px]
            bg-gray-100
            rounded-2xl
            shadow-2xl
            flex flex-col
            border-4 border-[#266698]
            overflow-hidden
          "
        >

          {/* HEADER */}
          <div className="h-14 flex items-center justify-between px-4 text-white font-Geo"
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 ">

            {/* FIELDS */}
            <div className="space-y-3 text-black">
              {fields.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[170px] text-sm text-gray-600 font-Geo" >
                    {item.label}
                  </div>

                  <div className="flex-1 bg-white px-3 py-2 rounded-lg border text-sm">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CV */}
            <Card title="რეზიუმე (PDF)">
              <div className="text-sm text-center text-black"><CVBtn onClick={downloadPDF} /></div>
            </Card>

            {/* EDUCATION */}
            <Card title="განათლება">
              <div className="text-sm space-y-2 text-black">
                <div>თვითნასწავლი — ქსელური ტექნოლოგიები</div>
                <div className="text-xs ">
                  ონლაინ რესურსებით და პრაქტიკით
                </div>
              </div>
            </Card>

        
           
              {/* PROGRAMMING */}
            <Card title="სისტემური ოპერაციები">
              <div className="text-sm space-y-1 text-black">
               
                <div>CMD/PowerShell system configuration & troubleshooting</div>
                  <div>Admin tasks: users, networking diagnostics</div>
<div>BIOS/UEFI configuration and system setup</div>

                
              </div>
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

            <div className="text-[11px] text-gray-600 ">
              ✔ თანახმა ვარ მონაცემების დამუშავებაზე
            </div>

            <div className="h-6" />
          </div>

          {/* FOOTER */}
          <div className="p-3 border-t bg-gray-100">
            <button
              onClick={downloadPDF}
              className="w-full h-10 bg-[#2b75ae] hover:bg-[#225e8b] text-white rounded-lg font-semibold"
            >
              PDF ჩამოტვირთვა
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}