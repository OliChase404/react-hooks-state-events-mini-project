import React, { useState } from "react";

function CategoryFilter({categories, selected, setSelected}) {

  function handleClick(index){
    setSelected(index)
  }



  const catBtns = categories.map((cat, index) => {
    return (<button className={index === selected ? 'selected' : ''} onClick={() => handleClick(index)} key={cat}>{cat}</button>)
  })

 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtns}
    </div>
  );
}

export default CategoryFilter;
