import React, { useState } from "react";
import DropDownList from "./DropDownList";
import Convert from "./Convert";

const option = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  {
    label: "hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setlanguage] = useState(option[0]);
  const [txt, settxt] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text:</label>
          <input
            type="text"
            value={txt}
            onChange={(e) => settxt(e.target.value)}
          />
        </div>
      </div>
      <DropDownList
        option={option}
        selected={language}
        onSelectedChange={setlanguage}
        setlabel="language"
      />

      <hr />
      <h3 className="ui  header">output</h3>
      <Convert text={txt} language={language} />
    </div>
  );
};

export default Translate;
