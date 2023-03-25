import React from 'react';

type Base = {
 id: string,
 title: string,
}

export type Book = {
 id: string;
 title: string;
 author: string; // only books have it
};

export type Movie = {
 id: string;
 title: string;
 releaseDate: string; // only movies have it
};

type GenericSelectProps<TValue> = {
 values: TValue[];
 onChange: (value: TValue) => void;
}

export const GenericSelect = <TValue extends Base>({values, onChange}: GenericSelectProps<TValue>) => {

 const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const val = values.find((value) => value.id === e.target.value);

  if (val) {
   onChange(val)
  }
 }

 return (
   <select onChange={onSelectChange}>
    {values.map((value) => (
      <option key={value.id} value={value.id}>
       {value.title}
      </option>
     ))}

   </select>
  )
}