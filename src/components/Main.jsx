import Link from "next/link";
import NavBar from "./NavBar";
import Card from "./Card";
import CardList from "./Cards/CardList";
import Image from "next/image";

export default function Component() {
  return (
    <>
      <NavBar />
      <section className="w-full py-12  bg-[#f0f4f8]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-[#0077b6] sm:text-5xl xl:text-6xl/none">
                  Elevá tu negocio con CuentaNorte
                </h1>
                <p className="max-w-[600px] text-[#4a4a4a] md:text-xl dark:text-[#f0f4f8]">
                  Our business, accounting, and IT consulting services help you
                  achieve your goals and drive your success.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#0077b6] px-8 text-sm font-medium text-[#f0f4f8] shadow transition-colors hover:bg-[#005a8d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#005a8d] disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Contactanos
                </Link>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="450"
              src="/tech.jpeg"
              width="450"
            />
            {/* <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="450"
              src="/tech.jpeg"
              width="450"
            /> */}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <CardList />
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f4f8]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#0077b6] sm:text-4xl">
                Los Beneficios de Nuestros Servicios
              </h2>
              <p className="text-[#4a4a4a] md:text-xl">
                Nuestros servicios integrales de consultoría empresarial,
                contable y de tecnología de la información ofrecen una variedad
                de beneficios para ayudar a que tu empresa prospere.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <CircleCheckIcon className="h-8 w-8 text-[#0077b6]" />
                <div>
                  <h3 className="text-xl font-bold text-[#0077b6]">
                    Mejora de la Eficiencia
                  </h3>
                  <p className="text-[#4a4a4a]">
                    Nuestros consultores expertos ayudan a optimizar tus
                    operaciones y flujo de trabajo para una productividad
                    máxima.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CurrencyIcon className="h-8 w-8 text-[#0077b6]" />
                <div>
                  <h3 className="text-xl font-bold text-[#0077b6]">
                    Ahorro de Costos
                  </h3>
                  <p className="text-[#4a4a4a]">
                    Nuestros servicios contables y financieros te ayudan a
                    identificar áreas para reducción de costos y optimización
                    tributaria.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheckIcon className="h-8 w-8 text-[#0077b6]" />
                <div>
                  <h3 className="text-xl font-bold text-[#0077b6]">
                    Mejora de la Seguridad
                  </h3>
                  <p className="text-[#4a4a4a]">
                    Nuestros servicios de soporte informático aseguran que tus
                    sistemas estén seguros y cumplen con los estándares,
                    protegiendo tus datos y tu negocio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BarChartIcon className="h-8 w-8 text-[#0077b6]" />
                <div>
                  <h3 className="text-xl font-bold text-[#0077b6]">
                    Información Basada en Datos
                  </h3>
                  <p className="text-[#4a4a4a]">
                    Nuestras herramientas de análisis e informes proporcionan
                    información valiosa para ayudarte a tomar decisiones
                    empresariales informadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f4f8]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#0077b6] sm:text-4xl">
                The Benefits of Our Services
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CircleCheckIcon className="h-6 w-6 text-[#0077b6]" />
                  <div>
                    <h3 className="text-lg font-medium text-[#0077b6]">
                      Improved Efficiency
                    </h3>
                    <p className="text-[#4a4a4a]">
                      Our expert consultants help streamline your operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CurrencyIcon className="h-6 w-6 text-[#0077b6]" />
                  <div>
                    <h3 className="text-lg font-medium text-[#0077b6]">
                      Cost Savings
                    </h3>
                    <p className="text-[#4a4a4a]">
                      Our financial services help you optimize costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheckIcon className="h-6 w-6 text-[#0077b6]" />
                  <div>
                    <h3 className="text-lg font-medium text-[#0077b6]">
                      Improved Security
                    </h3>
                    <p className="text-[#4a4a4a]">
                      Our IT support ensures your systems are secure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BarChartIcon className="h-6 w-6 text-[#0077b6]" />
                  <div>
                    <h3 className="text-lg font-medium text-[#0077b6]">
                      Data-Driven Insights
                    </h3>
                    <p className="text-[#4a4a4a]">
                      Our analytics provide valuable business insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
