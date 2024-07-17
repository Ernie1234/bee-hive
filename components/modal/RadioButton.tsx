export type RadioButtonProps = {
  label: string;
  name: string;
  isSelected: boolean;
  onChange: () => void;
  value: string;
};

const RadioButton = ({
  label,
  name,
  isSelected,
  onChange,
  value,
}: RadioButtonProps) => {
  return (
    <label className="flex items-center">
      <span className="mr-2.5 text-sm">{label}</span>
      <div
        style={{ width: "0.8em", height: "0.8em" }}
        className="ring ring-[#ffba00] rounded-full relative"
      >
        {isSelected && (
          <div
            style={{ width: "70%", height: "70%", top: "15%", left: "15%" }}
            className="bg-[#ffba00] rounded-full absolute"
          ></div>
        )}
      </div>
      <input
        type="radio"
        name={name}
        value={value}
        className="opacity-0"
        onChange={onChange}
        required
      />
    </label>
  );
};

export default RadioButton;
