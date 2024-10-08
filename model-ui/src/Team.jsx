import React from "react";

const Team = () => {
  return (
    <section className="mt-12">
      <h2 className="text-lg font-medium text-blue-800 text-center mb-6">
        Research Team
      </h2>
      <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 min-w-[250px] text-center">
          <h3 className="text-base font-semibold text-gray-900">
            Dr. John Doe
          </h3>
          <p className="text-sm text-gray-600">
            Lead Researcher, Department of Computer Science
            <br />
            University of XYZ
            <br />
            Email: john.doe@xyz.edu
          </p>
        </div>
        <div className="flex-1 min-w-[250px] text-center">
          <h3 className="text-base font-semibold text-gray-900">Jane Smith</h3>
          <p className="text-sm text-gray-600">
            Machine Learning Engineer, XYZ Institute of Technology
            <br />
            Email: jane.smith@xyztech.edu
          </p>
        </div>
        <div className="flex-1 min-w-[250px] text-center">
          <h3 className="text-base font-semibold text-gray-900">
            Alice Johnson
          </h3>
          <p className="text-sm text-gray-600">
            Software Developer, ABC Research Group
            <br />
            Email: alice.johnson@abcresearch.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
