# Strongly typed select 

This is an example of how to use generics to make a type safe reusable select dropdown component.

<hr />


```
type Base = {
  id: string,
  title: string,
};

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
```

Here, we define three types. Base is a simple type with two properties, id and title. Book and Movie are more complex types, both with id and title properties, as well as unique properties author and releaseDate.

## Generic Type Definition

```
type GenericSelectProps<TValue> = {
  values: TValue[];
  onChange: (value: TValue) => void;
};
```
This is a generic type called GenericSelectProps that takes a single type parameter TValue. This type defines an object with two properties: values, which is an array of TValue objects, and onChange, which is a function that takes a single TValue parameter.

## Generic Function Component

```
export const GenericSelect = <TValue extends Base>({values, onChange}: GenericSelectProps<TValue>) => {

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = values.find((value) => value.id === e.target.value);

    if (val) {
      onChange(val);
    }
  };

  return (
    <select onChange={onSelectChange}>
      {values.map((value) => (
        <option key={value.id} value={value.id}>
          {value.title}
        </option>
      ))}
    </select>
  );
};
```
This is a generic function component called GenericSelect that also takes a single type parameter TValue, which must extend the Base type. It takes an object with two properties, values and onChange, that match the properties defined in the GenericSelectProps type.

Inside the component, we define a function onSelectChange that will be called when the user selects a value from the dropdown menu. This function finds the selected value from the values array and calls the onChange function with that value.

The component renders a <select> element with options generated from the values array, and calls the onSelectChange function when a value is selected. The options are generated using the map method on the values array, and each option's value is set to the id property of the corresponding object, while its text content is set to the title property.
