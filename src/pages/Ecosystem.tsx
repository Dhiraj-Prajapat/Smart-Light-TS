import React from "react";

const Ecosystem: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-24 pb-28 p-6">
      <div className="inline-block mb-10">
        <span className="px-8 py-2 text-lg sm:text-xl font-medium bg-gradient-to-r from-indigo-400 via-transparent to-transparent text-sky-900">
          Ecosystem
        </span>
      </div>

      <h1 className="text-3xl font-normal mb-16">
        <span className="block mb-2">How does a smart street</span>
        <span>light ecosystem work?</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 relative">
        <div className="absolute top-[22%] left-0 w-full hidden md:block">
          <div className="w-48 border-t-2 border-dashed border-gray-300 relative left-[25%]" />
          <div className="w-60 border-t-2 border-dashed border-gray-300 relative left-[55%]" />
        </div>

        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-0">
          <div className="flex gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="relative p-3">
                <div className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-3xl" />
                <div className="relative p-6 border-2 border-blue-500 rounded-2xl bg-white">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <img
                      src="public/street_light_controler.png"
                      alt={`Street Light Controller ${i}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="font-semibold">Street Light Controller</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Activates/deactivates in response to motion/light sensing and
            controls the brightness of the street lamp
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-0">
          <div className="relative p-1">
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-3xl" />
            <div className="relative h-20 w-20 p-4 m-2 items-center justify-center bg-white border rounded-2xl">
              <img src="public/gateway_png.png" alt="Gateway" />
            </div>
          </div>
          <h3 className="font-semibold">Gateway</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Employed for interfacing between a Controller and the Lighting
            Management Software.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-0">
          <div className="relative p-1">
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-3xl" />
            <div className="relative h-20 w-20 p-4 m-2 items-center justify-center bg-white border rounded-2xl">
              <img
                src="public/cloud_based management.png"
                alt="Cloud-based Management System"
              />
            </div>
          </div>
          <h3 className="font-semibold">Cloud-based Management System</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Collects information from multiple gateways.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-10 border-l-2 border-dashed border-gray-300 relative left-36 -top-4 hidden md:block" />
        <div className="w-[25%] md:w-[35%] lg:w-[30%] h-8 border-x-2 border-t-2 border-dashed border-gray-300 relative top-10 left-4 mb-10 hidden md:block" />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 relative md:px-28 md:ml-3 lg:px-56 lg:ml-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-0">
          <div className="relative p-1">
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-3xl" />
            <div className="relative h-20 w-20 p-4 m-2 items-center justify-center bg-white border rounded-2xl">
              <img src="public/users_png.png" alt="Users" />
            </div>
          </div>
          <h3 className="font-semibold">Users</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Data from the cloud is used to monitor and control street lights by
            the System Managers.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-0">
          <div className="relative p-1">
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-3xl" />
            <div className="relative h-20 w-20 p-4 m-2 items-center justify-center bg-white border rounded-2xl">
              <img src="public/evaluation_png.png" alt="Evaluation" />
            </div>
          </div>
          <h3 className="font-semibold">Evaluation</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Gathered insights are used to evaluate the performance of the
            lighting systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
