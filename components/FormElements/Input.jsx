import { forwardRef  } from 'react'
const Input = forwardRef(function Input({ type, placeholder, tInput , ...props },ref) {
  let content = (
    <input
      type={type}
      required
      placeholder={placeholder}
      className="w-full py-3 px-4 my-1 outline-none bg-neutral-100"
      ref={ref}
      {...props}
    />
  );

  if (!tInput) {
    content = (
      <textarea
        placeholder={placeholder}
        required
        className="w-full h-[30vh] py-3 px-4 my-1 outline-none bg-neutral-100"
        ref={ref}
        {...props}

      />
    );
  }

  return content ;
})

export default Input ;