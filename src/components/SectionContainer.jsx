const SectionContainer = ({id, className, children }) => {
  return (
    <section data-aos="zoom-in" id={id} className={`w-fullS lg:w-[740px] mx-auto ${className}`}>{children}</section>
  );
};

export default SectionContainer;
