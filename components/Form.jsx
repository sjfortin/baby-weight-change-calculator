export default function Form() {
  return (
    <form className="mt-8 sm:mx-auto sm:max-w-lg">
      {/* Birth Weight */}
      <div>
        <div className="text-white text-xl text-center mb-2">Birth Weight</div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-white sr-only"
          >
            Initial Weight
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              name="birth-lbs"
              id="birth-lbs"
              className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter lbs"
              aria-describedby="birth-lbs"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="birth-lbs">
                lbs
              </span>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-white sr-only"
          >
            Birth Weight
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              name="birth-oz"
              id="birth-oz"
              className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter oz"
              aria-describedby="birth-oz"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="birth-oz">
                oz
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Current Weight */}
      <div>
        <div className="text-white text-xl text-center mb-2 mt-6">
          Current Weight
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-white sr-only"
          >
            Current Weight
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              name="current-lbs"
              id="current-lbs"
              className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter lbs"
              aria-describedby="current-lbs"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="current-lbs">
                lbs
              </span>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-white sr-only"
          >
            Birth Weight
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              name="current-oz"
              id="current-oz"
              className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter oz"
              aria-describedby="current-oz"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="current-oz">
                oz
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="text-center mt-8">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Calculate Percentage Change
        </button>
      </div>
    </form>
  );
}
