import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setterm] = useState("programing");
  const [debouncingTerm, setdebouncingTerm] = useState(term);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncingTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncingTerm,
        },
      });

      setdata(data.query.search);
    };
    if (debouncingTerm) {
      search();
    }
  }, [debouncingTerm]);

  // renderList after get data from api.
  const renderList = data.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });

  // return jsx ;
  return (
    <div>
      <div className="ui form">
        <div className="ui field">
          <label>Search:</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setterm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className=" ui celled list">{renderList}</div>
    </div>
  );
};

export default Search;
