function DownloadSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 text-center py-20 bg-[#F2EF29]">
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <button className="bg-[#F2EF29] text-2xl text-[#4a00a6] px-10 py-5 rounded-md outline-none border-[#4a00a6] border transition-all ease hover:bg-[#f8f413]  hover:shadow-sm focus:outline-none font-light">
          Download All PNGs
        </button>
        <button className="bg-[#4a00a6] text-2xl font-bold text-white px-10 py-5 rounded-md outline-none border-none transition-all ease hover:bg-[#37007a] hover:shadow-sm focus:outline-none">
          Download All SVGs
        </button>
      </div>
    </div>
  );
}

export default DownloadSection;
