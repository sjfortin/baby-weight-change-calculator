import Head from "next/head";
import Form from "../components/Form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baby Weight Calculator</title>
        <meta name="description" content="Baby Weight Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-white py-16 sm:py-24">
          <div className="relative sm:py-16">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-6 py-10 shadow-xl sm:px-4 sm:py-20">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-indigo-500 text-opacity-40"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                      className="text-indigo-700 text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <div className="sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Baby Weight Calculator
                    </h2>
                    {/* <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-200">
                      Add instructional text here
                    </p> */}
                  </div>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
