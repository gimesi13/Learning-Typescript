import React, { FC } from "react";
import { Person, HairColor } from "./Person";

const Pedro: FC = () => {
  return (
    <div>
      <Person
        name="Pedro"
        age={20}
        email="example@gmail.com"
        hairColor={HairColor.Blonde}
      />
    </div>
  );
};

export default Pedro;
