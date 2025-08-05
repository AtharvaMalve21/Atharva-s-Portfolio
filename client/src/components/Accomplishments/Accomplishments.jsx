import React from "react";
import { achievementsAndCertifications } from "../../constants.js";

const Accomplishments = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-6 md:px-12 lg:px-24 xl:px-36 font-sans bg-[#0f0a1f] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-4xl font-extrabold tracking-tight">
          CERTIFICATIONS & ACHIEVEMENTS
        </h2>
        <div className="w-24 h-1 mt-4 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Highlighting my commitment to continuous learning and professional development.
        </p>
      </div>

      {/* Accomplishments Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {achievementsAndCertifications.map((item, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-[#2b254a] to-[#0a0814] p-1 rounded-3xl transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:scale-[1.02]"
          >
            <div className="bg-[#1a1130]/90 backdrop-blur-md rounded-[22px] h-full p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-2 tracking-wide group-hover:text-purple-400 transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {item.issuer} {item.year && <span>({item.year})</span>}
              </p>
              {item.description && (
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {item.description}
                </p>
              )}
              {item.link && (
                <div className="mt-6">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition duration-300 shadow-md hover:shadow-purple-700/30"
                  >
                    View Credential
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 3h7m0 0v7m0-7L10 14"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 21h14a2 2 0 002-2V7.83a2 2 0 00-.59-1.42l-6.83-6.83A2 2 0 0012.17 0H5a2 2 0 00-2 2v16a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accomplishments;
