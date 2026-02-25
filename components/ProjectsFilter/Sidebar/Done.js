import Input from "@/components/ProjectsFilter/Input/Input.js";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="font-size-[22px] mb-[20px]">Complete</h2>

      <div>
        <label className="relative pl-[35px] mb-[12px] block cursor-pointer">
          <input onChange={handleChange} type="radio" value="" name="test" className="absolute opacity-0 cursor-pointer" />
          <span className="absolute height-[20px] width-[20px] bg-gray-dark-1 radius-[50%] top-0 left-0 hover:bg-blue after:bg-green"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="true"
          title="Complete"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="false"
          title="Incomplete"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;