import React, { Fragment, useState } from "react";

import { AddCategory } from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

import './index.css';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </Fragment>
  );
};

export default GifExpertApp;
