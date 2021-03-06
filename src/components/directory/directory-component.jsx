import React from "react";
import MenuItem from "../menu-item/menu-item-component";
import "./directory-styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 2,
          linkUrl: "jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 3,
          linkUrl: "sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://images.pexels.com/photos/1695936/pexels-photo-1695936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 4,
          size: "large",
          linkUrl: "womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 5,
          size: "large",
          linkUrl: "mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
