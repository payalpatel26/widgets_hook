import React, { useState, useEffect } from "react";
import axios from "axios";
const ukey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeid = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeid);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: ukey,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [language, debouncedText]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
