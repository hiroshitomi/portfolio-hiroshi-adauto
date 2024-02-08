const InputComponent = (props) => {
  const {children, name, id, value, onChange, type, placeholder, required} =
    props;
  return (
    <div className="flex items-center bg-inherit rounded px-3">
      {children}
      <input
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none border-none py-2 px-2 w-full"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputComponent;
