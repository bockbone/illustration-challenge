import Card from "./Card";

function Main() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 py-10">
      <h2 className="font-extrabold text-4xl md:text-6xl my-4 ">
        All resources
      </h2>
      <div className="w-max-xxl flex items-center">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4  md:gap-[25px]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}

export default Main;
