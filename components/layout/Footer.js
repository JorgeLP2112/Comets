export default function Footer() {
  return (
    <footer className="bg-white py-5">
      <div className="container">
        <div className="text-center grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="flex flex-col justify-between lg:justify-self-start lg:col-span-3">
            <img
              src="/img/comets2.png"
              alt="comets_logo"
              className="h-full w-auto lg:w-32"
            />
            <div className="flex justify-between items-center"></div>
          </div>

          <div className="flex flex-col justify-between items-center lg:items-end lg:justify-self-end lg:col-span-4 lg:self-center">
            <p className="text-black text-sm lg:text-right">
              © Comets. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
