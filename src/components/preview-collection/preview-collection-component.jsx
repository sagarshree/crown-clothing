import React from "react";
import "./preview-collection-styles.scss";
import CollectionItem from "../colllection-item/collection-item-component";

const PreviewCollecion = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, indx) => indx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollecion;
