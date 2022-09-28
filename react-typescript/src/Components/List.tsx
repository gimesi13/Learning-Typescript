import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}
const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, i) => {
      return (
        <li className="List" key={i}>
          <div className="List-header">
            <img alt="" className="List-img" src={person.url}></img>
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.notes}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
