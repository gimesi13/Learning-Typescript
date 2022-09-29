import { FC, useState } from "react";

//enums

export enum HairColor {
  Blonde = "Your hair is blonde",
  Brown = "Cool hair color",
  Pink = "wow thats unusual",
}

interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");

  type NameType = "Pedro" | "Jack";
  const nameForType: NameType = "Pedro";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <h1>{country}</h1>
      <h1>{HairColor.Blonde}</h1>
      <input placeholder="write your country" onChange={handleChange} />
    </div>
  );
};
