import React, { useEffect } from "react";

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
      <div className="absolute -top-2 left-3 bg-white px-2 text-xs text-[#266698] font-geo">
        {title}
      </div>
      {children}
    </div>
  );

  // 🔒 lock background scroll while form is open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
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
      onWheel={(e) => e.stopPropagation()}
    >

      {/* HEADER */}
      <div
        className="h-14 flex items-center justify-between px-4 text-white font-semibold font-geo"
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

      {/* BODY (ONLY THIS SCROLLS) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">

        {/* FIELDS */}
        <div className="space-y-3">
          {fields.map((item, i) => (
            <div key={i} className="flex items-center gap-4">

              <div className="w-[170px] text-sm text-gray-600 font-geo font-bold">
                {item.label}
              </div>

              <div className="flex-1 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 font-sans">
                {item.value}
              </div>

            </div>
          ))}
        </div>

        {/* CV */}
        <Card title="რეზიუმე (PDF/Word)">
          <div className="text-sm flex justify-center">
            dsadsa
          </div>
        </Card>

 {/* EDUCATION */}
<Card title="განათლება">
  <div className="text-sm text-gray-700 font-sans space-y-2">
    <div>
      თვითნასწავლი — ქსელური ტექნოლოგიები (Networking)
    </div>

    <div className="text-xs text-gray-500">
      სწავლა ონლაინ რესურსების, პრაქტიკული ლაბორატორიებისა და დამოუკიდებელი კვლევის მეშვეობით
    </div>
  </div>
</Card>

{/* PROGRAMMING */}
<Card title="პროგრამირება">
  <div className="text-sm text-gray-700 font-sans space-y-2">
    <div>JavaScript / React / NextJs </div>
    <div>Python (networking, scripting)</div>
    <div>Basic PowerShell</div>
  </div>
</Card>
      {/* EXPERIENCE */}
<Card title="გამოცდილება">
  <div className="text-sm text-gray-700 font-sans space-y-3">

    {/* IT SUPPORT */}
    <div>
      <div className="font-semibold">
        IT მხარდაჭერი
      </div>
      <div className="text-xs text-gray-500">
        10 თვე
      </div>
    </div>

    {/* FULL STACK */}
    <div>
      <div className="font-semibold">
        ვებ-აპლიკაციების სრულფასოვანი დეველოპერი
      </div>
      <div className="text-xs text-gray-500">
        3 წელი
      </div>
    </div>

  </div>
</Card>

        {/* LANGUAGES */}
        <Card title="ენების ცოდნა">
          <div className="text-sm text-gray-700 font-sans">
            ინგლისური / რუსული
          </div>
        </Card>

        {/* LICENSE */}
        <Card title="მართვის მოწმობა">
          <div className="text-sm text-gray-700 font-sans">
            x
          </div>
        </Card>

        {/* AGREEMENT */}
        <div className="text-[11px] text-gray-600 font-geo">
          ✔ თანახმა ვარ მონაცემების დამუშავებაზე
        </div>

        <div className="h-6" />
      </div>

      {/* FOOTER */}
      <div className="p-3 border-t border-[#266698] bg-gray-100">
        <button className="w-full h-10 bg-[#2b75ae] hover:bg-[#225e8b] text-white rounded-lg font-semibold font-geo">
          განაცხადის გაკეთება
        </button>
      </div>

    </div>
  );
}