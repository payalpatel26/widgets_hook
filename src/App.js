import React, { useState } from "react";
import DropDownList from "./Component/DropDownList";
import Accordion from "./Component/Accordion";
import Search from "./Component/Search";
import Translate from "./Component/Translate";
import Route from "./Component/Route";
import Header from "./Component/Header";

const iteam = [
  {
    title: "what is React?",
    content: "React is Fronted javascript Framework",
  },
  {
    title: "why is React?",
    content: "React is favourite js library among developers.",
  },
  {
    title: "how to use React?",
    content: "we have to create component",
  },
];

const option = [
  {
    label: "This is red colour",
    value: "red",
    id: "red1",
  },
  {
    label: "This is green colour",
    value: "green",
    id: "green1",
  },
  {
    label: "This is blue colour",
    value: "blue",
    id: "blue1",
  },
];

const App = () => {
  const [selectddl, setselectddl] = useState(option[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion iteam={iteam} />
      </Route>
      <Route path="/list">
        <Search />;
      </Route>
      <Route path="/dropdown">
        <DropDownList
          setlabel="colour"
          option={option}
          selected={selectddl}
          onSelectedChange={setselectddl}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
