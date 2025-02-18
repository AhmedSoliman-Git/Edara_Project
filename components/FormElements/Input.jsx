import { forwardRef } from "react";
const Input = forwardRef(function Input(
  { type, placeholder, tInput, name, id, ...props },
  ref
) {
  let content = (
    <input
      type={type}
      name={name}
      id={id}
      required
      placeholder={placeholder}
      className="w-full py-3 px-4 my-1 outline-none serviceItemBg"
      ref={ref}
      autoComplete="true"
      {...props}
    />
  );

  if (!tInput) {
    content = (
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        required
        className="w-full h-[30vh] py-3 px-4 my-1 outline-none serviceItemBg"
        ref={ref}
        autoComplete="true"
        {...props}
      />
    );
  }

  return content;
});

export default Input;
