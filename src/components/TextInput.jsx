export default function TextInput({ ...textProps }) {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="border-2 rounded-lg p-2 w-64"
        {...textProps}
        required
      />
    </div>
  );
}

/*

In import file, send props as object:

ex.
const textProps = {
    id: "",
    name: "",
    placeholder: ""
}

Then in rendered component, spread textProps:

<TextInput {...textProps} />

*/
