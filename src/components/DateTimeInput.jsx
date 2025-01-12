import { BsCalendarWeek } from 'react-icons/bs';

export default function DateTimeInput({ ...dateTimeProps }) {
  return (
    <div className="relative">
      <BsCalendarWeek className="absolute left-4 top-1/2 transform -translate-y-1/2" />
      <input
        type="datetime-local"
        {...dateTimeProps}
        required
        className="w-[620px] py-2 pl-12 pr-6 border-2 rounded-lg font-primary text-customBlue"
      />
    </div>
  );
}

/*

dateTimeInput accepts 2 required props:

id, name

In App.jsx:

ex.
const dateTimeProps = {
    id: "",
    name: ""
}

In rendered component:

<DateTimeInput {...dateTimeProps} />

*/
