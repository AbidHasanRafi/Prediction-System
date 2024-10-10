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
            Pankaj Bhowmik
          </h3>
          <p className="text-sm text-gray-600">
            Faculty Member, Department of Computer Science and Engineering (CSE)
            <br />
            Hajee Mohammad Danesh Science & Technology University, Dinajpur
            <br />
            Email: pankaj.cshstu@gmail.com
          </p>
        </div>
        <div className="flex-1 min-w-[250px] text-center">
          <h3 className="text-base font-semibold text-gray-900">
            Pijush Kanti Roy Partho
          </h3>
          <p className="text-sm text-gray-600">
            Dept. of ECE, Hajee Mohammad Danesh Science & Technology University,
            Dinajpur
            <br />
            Email: pijushkantiroy2040@gmail.com
          </p>
        </div>
        <div className="flex-1 min-w-[250px] text-center">
          <h3 className="text-base font-semibold text-gray-900">
            Md. Abid Hasan Rafi
          </h3>
          <p className="text-sm text-gray-600">
            Dept. of ECE, Hajee Mohammad Danesh Science & Technology University,
            Dinajpur
            <br />
            Email: ahr16.abidhasanrafi@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
