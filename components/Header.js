function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full flex-1 text-center bg-[#4A00A6] text-white py-4">
      <div className="lg:max-w-xxl flex flex-col md:flex-row items-center px-4 lg:px-0 py-20 md:py-0">
        <div className="text-left w-full md:w-1/2 space-y-4">
          <h1 className="font-extrabold uppercase text-3xl lg:text-6xl">
            Resources and Illustrations
          </h1>
          <div className="w-full md:w-[400px] space-y-4">
            <p className="text-2xl lg:text-3xl font-bold">
              For designers and developers
            </p>
            <p className="text-xl">
              We designed awesome illustrations and icons for your use in your
              projects. We will update the resources frequently. You can
              download all this resources for{" "}
              <span className="font-extrabold">free</span>.
            </p>
            <p className="text-sm font-light">
              Free for personal and commercial use
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 hidden md:inline-flex">
          <img src="/lab.svg" className="w-[550px] h-[550px]" />
        </div>
      </div>
    </header>
  );
}

export default Header;
