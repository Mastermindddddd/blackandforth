import React from "react";

const WhyUmojaGas = () => {
  const items = [
    {
      number: "#1",
      title: "Convenience",
      description:
        "Order online or by phone and choose a delivery time that suits you. No more worries about running out of gas",
    },
    {
      number: "#2",
      title: "Safety First",
      description:
        "All cylinders are rigorously tested, filled under strict quality controls, and handled by trained delivery teams",
    },
    {
      number: "#3",
      title: "Wide Coverage",
      description:
        "Serving the greater Johannesburg area, from Sandton to Soweto, Randburg to Roodepoort",
    },
    {
      number: "#4",
      title: "Competitive Pricing",
      description:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      number: "#5",
      title: "Responsive Support",
      description:
        "Speak to a real person whenever you need help—our customer service team is here 24/7.",
    },
  ];

  return (
    <div className="w-full px-4 py-20 bg-white text-center">
      {/* Title */}
      <div className="mb-14">
        <div className="w-12 h-1 mx-auto mb-4 rounded-full"
            style={{ backgroundImage: "linear-gradient(to right, #F76680, #57007B)" }}
        ></div>
        <h2 className="text-3xl md:text-4xl text-gray-900">
          Why Umoja <span className="font-bold">Gas</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto relative">
        

        {/* Vertical Lines */}
        <div className="absolute top-[146px] left-[16.6%] w-[2px] h-6 bg-pink-500 hidden md:block"></div>
        <div className="absolute top-[146px] left-[50%] transform -translate-x-1/2 w-[2px] h-6 bg-pink-500 hidden md:block"></div>
        <div className="absolute top-[146px] left-[83.4%] w-[2px] h-6 bg-pink-500 hidden md:block"></div>
        {/* Horizontal Connector Line */}
        <div className="absolute top-[170px] left-0 w-full h-[2px] bg-pink-500 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, index) => (
            <div key={index} className="flex justify-center">
              <Card {...item} />
            </div>
          ))}
        </div>

        {/* Bottom Vertical Lines */}
        <div className="absolute bottom-[162px] left-[33.3%] w-[2px] h-6 bg-pink-500 hidden md:block"></div>
        <div className="absolute bottom-[162px] left-[66.6%] w-[2px] h-6 bg-pink-500 hidden md:block"></div>

        {/* Bottom Row */}
        <div className="mt-12 flex flex-col md:flex-row md:justify-center md:gap-12">
          {items.slice(3).map((item, index) => (
            <div key={index} className="flex justify-center">
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ number, title, description }) => (
  <div className="w-full max-w-xs p-6 border border-gray-200 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold">
    <span 
        style={{
        background: "linear-gradient(to right, #F76680, #57007B)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block"
        }}>
            {number}
    </span>
    <span className="text-black font-bold text-lg"> {title}</span>
    </h3>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

export default WhyUmojaGas;
