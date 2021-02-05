import React, { useState } from "react";

const items = [
  {
    id: "hope",
    img: "/assets/img/logo-hope.svg",
    name: "Hopes Initiatives International",
    desc:
      "Hope Initiatives International was established as the conduit through which Irish author, humanitarian and concept developer, Don Mullan, will bring to fulfillment major legacy projects he is developing. His initiatives include inspirational and creative campaigns such as the Julia Tree, and public artworks that seek to inspire and help heal the hurts of history. Projects include: supporting the African Union’s Great Green Wall; a UNESCO World Heritage site commemorating the 1914 Christmas Truce; an international memorial to the Transatlantic Slave Trade; a visitor’s centre in SOWETO commemorating the role of faith communities in the overthrow of Apartheid; supporting the National Centre for Race Amity, USA, in establishing racial justice and amity projects in all 50 US States; and a series of public monuments celebrating changemakers in history, including Matilda Joslyn Gage, Thomas Sankara, Wangari Maathai, and St. Francis of Assisi’s encounter with the Sultan of Egypt.",
  },
  {
    id: "tututeach",
    img: "/assets/img/logo-tututeach.svg",
    name: "Tutu Teach Fundation",
    desc:
      "Hope Initiatives International was established as the conduit through which Irish author, humanitarian and concept developer, Don Mullan, will bring to fulfillment major legacy projects he is developing. His initiatives include inspirational and creative campaigns such as the Julia Tree, and public artworks that seek to inspire and help heal the hurts of history. Projects include: supporting the African Union’s Great Green Wall; a UNESCO World Heritage site commemorating the 1914 Christmas Truce; an international memorial to the Transatlantic Slave Trade; a visitor’s centre in SOWETO commemorating the role of faith communities in the overthrow of Apartheid; supporting the National Centre for Race Amity, USA, in establishing racial justice and amity projects in all 50 US States; and a series of public monuments celebrating changemakers in history, including Matilda Joslyn Gage, Thomas Sankara, Wangari Maathai, and St. Francis of Assisi’s encounter with the Sultan of Egypt.",
  },
  {
    id: "orgiis-ghana",
    img: "/assets/img/logo-orgiisghana.png",
    name: "Orgiis Ghana",
    desc:
      "ORGIIS Ghana is an environmental and biodiversity conservation organization. We strive to reduce the impact of climate change, especially desertification and land degradation. Since 2016, ORGIIS has implemented a value chain approach to our tree planting programs. We are working in partnership with the African Union to deliver the Great Green Wall Initiative to increase tree cover and reduce desertification and migration. We are also creating green business opportunities. Women are the driving force of our interventions, through a cooperative model, creating green job opportunities. We focus on organizing women groups to build their capacity to mobilize agriculture products and we facilitate access to domestic and International markets. We also use inclusive Banking tools to facilitate the improvement of livelihoods to reduce pressure on the natural environment. ORGIIS uses a collaborative approach with likeminded individuals and Institutions to fight for the survival of our planet for current and future generations.",
  },
];

const Fundation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(1);

  return (
    <div id="foundation" className="foundation">
      {modalVisible && <div className="foundation-modal">Modal</div>}
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="title">
          <h2>An initiative of</h2>
        </div>
        <div className="items">
          {items.map((f) => (
            <div className="item">
              <div className="logo">
                <img id={f.id} src={f.img} alt="Logo Hope Initiatives" />
              </div>
              <h3 className="item-title">{f.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="clouds">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
    </div>
  );
};

export default Fundation;
