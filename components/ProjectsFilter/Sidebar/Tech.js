import Input from "@/components/ProjectsFilter/Input/Input.js";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="font-size-[22px] mb-[20px]">Tech</h2>

      <div>
        <label className="relative pl-[35px] mb-[12px] block cursor-pointer">
          <input onChange={handleChange} type="radio" value="" name="test" className="absolute opacity-0 cursor-pointer" />
          <span className="absolute height-[20px] width-[20px] bg-gray-dark-1 radius-[50%] top-0 left-0 hover:bg-blue after:bg-green"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="altium"
          title="Altium"
          name="test1"
          skill="altium"
        />
        <Input
          handleChange={handleChange}
          value="cpp"
          title="C++"
          name="test1"
          skill="cpp"
        />
        <Input
          handleChange={handleChange}
          value="fusion360"
          title="Fusion 360"
          name="test1"
          skill="fusion360"
        />
        <Input
          handleChange={handleChange}
          value="onshape"
          title="Onshape"
          name="test1"
          skill="onshape"
        />
        <Input
          handleChange={handleChange}
          value="arduino"
          title="Arduino"
          name="test1"
          skill="arduino"
        />
      </div>
    </div>
  );
}

export default Category;