import { LuCalendarPlus } from 'react-icons/lu';

export default function FormHeader() {
  return (
    <>
      <div className="flex items-center my-6 ml-16">
        <LuCalendarPlus size={50} />
        <div className="ml-4">
          <h1 className="text-[26px]">Create new</h1>
          <p>fill out the below form and submit your todo</p>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[602px]" />
      </div>
    </>
  );
}
