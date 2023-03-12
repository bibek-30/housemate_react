import React from "react";
import Sidebar from "./Sidebar";

const Count = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 border-blue-800">
          <Sidebar />
        </div>
        <div className="col-span-10">
          {/* Simple Statistics with Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {/* Card: Simple Widget with Action */}
            <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
              {/* Card Body: Simple Widget with Action */}
              <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
                <dl>
                  <dt className="text-2xl font-semibold">146</dt>
                  <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">
                    Sales
                  </dd>
                </dl>
                <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-700 bg-emerald-200">
                  <svg
                    className="hi-solid hi-arrow-circle-up inline-block w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>7.9%</span>
                </div>
              </div>
              {/* END Card Body: Simple Widget with Action */}

              {/* Action Link */}
              <a
                href="#"
                className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-blue-600 hover:text-blue-500"
              >
                View All Sales
              </a>
            </div>

            <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
              {/* Card Body: Simple Widget with Action */}
              <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
                <dl>
                  <dt className="text-2xl font-semibold">146</dt>
                  <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">
                    Sales
                  </dd>
                </dl>
                <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-700 bg-emerald-200">
                  <svg
                    className="hi-solid hi-arrow-circle-up inline-block w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>7.9%</span>
                </div>
              </div>
              {/* END Card Body: Simple Widget with Action */}

              {/* Action Link */}
              <a
                href="#"
                className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-blue-600 hover:text-blue-500"
              >
                View All Sales
              </a>
            </div>
            <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
              {/* Card Body: Simple Widget with Action */}
              <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
                <dl>
                  <dt className="text-2xl font-semibold">146</dt>
                  <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">
                    Sales
                  </dd>
                </dl>
                <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-700 bg-emerald-200">
                  <svg
                    className="hi-solid hi-arrow-circle-up inline-block w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>7.9%</span>
                </div>
              </div>
              {/* END Card Body: Simple Widget with Action */}

              {/* Action Link */}
              <a
                href="#"
                className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-blue-600 hover:text-blue-500"
              >
                View All Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
