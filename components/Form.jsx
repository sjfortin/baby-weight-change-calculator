import { useState } from "react";
import { useForm } from "react-hook-form";
import calculateWeightDiff from "../utils/calculateWeightDiff";

export default function Form() {
  const [percentageChange, setPercentageChange] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { birthLbs, birthOzs, currentLbs, currentOzs } = data;
    const birthWeight = birthLbs * 16 + parseInt(birthOzs);
    const currentWeight = currentLbs * 16 + parseInt(currentOzs);

    setPercentageChange(calculateWeightDiff(birthWeight, currentWeight));
  };

  return (
    <form
      className="mt-8 sm:mx-auto sm:max-w-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Birth Weight */}
      <div>
        <div className="text-white text-sm uppercase font-bold tracking-wider mb-1">
          Birth Weight
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <label
              htmlFor="birth-lbs"
              className="block text-sm font-medium text-white sr-only"
            >
              Birth Weight in Pounds
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="number"
                name="birth-lbs"
                id="birth-lbs"
                className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 text-3xl"
                // placeholder="Enter lbs"
                aria-describedby="birth-lbs"
                {...register("birthLbs", { required: true })}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 text-lg" id="birth-lbs">
                  lbs
                </span>
              </div>
            </div>
            {errors.birthLbs?.type === "required" && (
              <p role="alert" className="text-red-300 text-sm pb-3 pt-1">
                Required
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="birth-oz"
              className="block text-sm font-medium text-white sr-only"
            >
              Birth Weight in Ounces
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="number"
                name="birth-oz"
                id="birth-oz"
                className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 text-3xl"
                // placeholder="Enter oz"
                aria-describedby="birth-oz"
                {...register("birthOzs", { required: true })}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 text-lg" id="birth-oz">
                  oz
                </span>
              </div>
            </div>
            {errors.birthOzs?.type === "required" && (
              <p role="alert" className="text-red-300 text-sm pb-3 pt-1">
                Required
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Current Weight */}
      <div>
        <div className="text-white text-sm uppercase font-bold tracking-wider mb-1 mt-6">
          Current Weight
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <label
              htmlFor="current-lbs"
              className="block text-sm font-medium text-white sr-only"
            >
              Current Weight in Pounds
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="number"
                name="current-lbs"
                id="current-lbs"
                className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 text-3xl"
                // placeholder="Enter lbs"
                aria-describedby="current-lbs"
                {...register("currentLbs", { required: true })}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 text-lg" id="current-lbs">
                  lbs
                </span>
              </div>
            </div>
            {errors.currentLbs?.type === "required" && (
              <p role="alert" className="text-red-300 text-sm pb-3 pt-1">
                Required
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="current-oz"
              className="block text-sm font-medium text-white sr-only"
            >
              Current Weight in Ounces
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="number"
                name="current-oz"
                id="current-oz"
                className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 text-3xl"
                // placeholder="Enter oz"
                aria-describedby="current-oz"
                {...register("currentOzs", { required: true })}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 text-lg" id="current-oz">
                  oz
                </span>
              </div>
            </div>
            {errors.currentOzs?.type === "required" && (
              <p role="alert" className="text-red-300 text-sm pb-3 pt-1">
                Required
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 text-center">
        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center rounded-md border border-transparent bg-indigo-100 px-4 py-3 text-3xl font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Calculate Change
          </button>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center text-gray-200 text-base hover:text-gray-300 shadow-sm mt-2"
            onClick={() => {
              setPercentageChange(null);
              reset();
            }}
          >
            Clear
          </button>
        </div>
        {percentageChange && (
          <div className="flex flex-col items-center border-2 rounded-md shadow-md p-4 mt-4">
            <div className="text-white text-sm uppercase tracking-wider">
              Percentage Change
            </div>
            <div className="text-white text-4xl font-bold xl mt-1">
              {percentageChange}%
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
