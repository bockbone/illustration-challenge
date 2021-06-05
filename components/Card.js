function Card() {
  return (
    <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[220px] lg:h-[220px] bg-blue-500 rounded-md relative group overflow-hidden">
      <img src="/lab.svg" />
      <button className="absolute bg-[#4A00A6] px-3 py-1 rounded-md text-white -bottom-10 right-2 opacity-0 transition-all ease duration-200 group-hover:bottom-3.5 group-hover:opacity-100 focus:outline-none z-30 hover:bg-purple-800 border-none outline-none">
        SVG
      </button>
      <div className="absolute top-0 w-full h-full opacity-0  transition-all ease group-hover:opacity-20 group-hover:bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}

export default Card;
