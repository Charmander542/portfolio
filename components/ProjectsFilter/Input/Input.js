import Image from "next/image";


const Input = ({ handleChange, value, title, name, skill }) => {
    return (
      <label className="relative pl-[35px] mb-[12px] block cursor-pointer">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={20}
                  height={20}
                />        {title}
      </label>
    );
  };
  
  export default Input;