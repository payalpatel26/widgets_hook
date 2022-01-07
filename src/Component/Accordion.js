import React from "react";
import { useState } from "react";

const Accordion = ({ iteam }) => {
  const [activeIndex, setactiveIndex] = useState(null);
  const onClickTitle = (index) => {
    setactiveIndex(index);
  };
  const renderList = iteam.map((iteam, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={iteam.title}>
        <div className={`title ${active}`} onClick={() => onClickTitle(index)}>
          <i className="dropdown icon"></i>
          {iteam.title}
        </div>
        <div className={`content ${active}`}>
          <p>{iteam.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderList}</div>;
};
export default Accordion;
