export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="container">
        <div className="text-center grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="flex flex-col justify-between lg:justify-self-start lg:col-span-3">
            <img
              src="/img/comets2.png"
              alt="comets_logo"
              className="w-32 h-auto sm:w-48 md:w-64 lg:w-32 mt-auto"
            />
            <div className="flex justify-between items-center">
              <img
                src="https://azhealthinnovationhub.com.mx/wp-content/uploads/2023/09/AstraZeneca-2_1-1024x270.webp"
                alt="astrazeneca_logo_bw"
                className="w-32 h-auto sm:w-48 md:w-64 lg:w-32"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 py-1 lg:grid-rows-3 text-white text-sm lg:text-left lg:justify-self-start lg:col-span-5 lg:gap-x-24 lg:grid-flow-col-dense">
            <a
              className="text-xs transition-all duration-500 ease-in-out hover:underline"
              href="https://www.astrazeneca.mx"
            >
              Acerca de Nosotros
            </a>
            <a
              className="text-xs transition-all duration-500 ease-in-out hover:underline"
              href="https://www.linkedin.com/company/astrazeneca/"
            >
              Contacto
            </a>
            <a
              className="text-xs transition-all duration-500 ease-in-out hover:underline"
              href="https://www.facebook.com/astrazenecamexico/"
            >
              Redes Sociales
            </a>
            <a
              className="text-xs transition-all duration-500 ease-in-out hover:underline"
              href="https://policy.cookiereports.com/114f16d7-es.html"
            >
              Notificación sobre Cookies
            </a>
            <a
              className="text-xs transition-all duration-500 ease-in-out hover:underline"
              href="https://www.azprivacy.astrazeneca.com/americas/mexico/es/privacy-notices.html"
            >
              Términos de Uso
            </a>
            <a
              className="text-xs transition-all duration-500 ease-in-out hover:underline"
              href="https://www.azprivacy.astrazeneca.com/americas/mexico/es/privacy-notices.html"
            >
              Política de Privacidad
            </a>
          </div>

          <div className="flex flex-col justify-between items-center lg:items-end lg:justify-self-end lg:col-span-4">
            <br />
            <p className="text-white text-xs">© Comets. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
