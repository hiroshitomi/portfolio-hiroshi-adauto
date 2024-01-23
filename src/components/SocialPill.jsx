const SocialPill = ({href, children}) => {
  return (
    <a
      className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-2 text-xs md:text-base md:py-2 md:px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default SocialPill;
