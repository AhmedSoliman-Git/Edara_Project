export default function StaticP({ text, additionalText, Id,}) {
  return (
    <div className=" block md:flex justify-center items-start gap-8" id={Id}>
      {additionalText ? (
        <h1 className="text-2xl w-full md:text-3xl lg:text-5xl text-center md:w-[31rem] lg:w-max font-PlatNomor border-b-2 border-black pb-2">
          {additionalText}
        </h1>
      ) : null}
      <p
        className=" w-full text-start mt-5 text-[1rem] md:text-start md:mt-0 md:text-[1rem] lg:text-lg font-PoppinsE md:w-full lg:w-2/3"
      >
        {text}
      </p>
    </div>
  );
}
