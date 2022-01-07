import React, { useState, useEffect, useRef } from "react";

const DropDownList = ({ option, selected, onSelectedChange, setlabel }) => {
  const [open, setopen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    const BodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setopen(false);
    };
    document.body.addEventListener("click", BodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", BodyClick, { capture: true });
    };
  }, []);
  const renderList = option.map((result) => {
    if (result.value === selected.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={result.value}
        onClick={() => {
          onSelectedChange(result);
        }}
      >
        {result.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select the {setlabel}</label>
        <div
          onClick={() => {
            setopen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownList;
