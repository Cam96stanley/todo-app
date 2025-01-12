/* eslint-disable react/prop-types */
export default function DropdownInput({ options, ...rest }) {
  return (
    <select
      {...rest}
      required
      className="py-2 px-4 border-2 rounded-lg font-primary text-customBlue w-64"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

/*

In import file, to send props, create object:

ex.
const dropdownProps = {
    id: "",
    name: "",
    options: [
        { value: "", label: ""},
        { value: "", label: ""},
        { value: "", label: ""}
    ],
    defaultValue: ""
};

Then in rendered component, spread dropdownProps:

<DropdownInput {...dropdownProps} />

*/
