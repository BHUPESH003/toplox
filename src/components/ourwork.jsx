"use client";
import { Settings } from "lucide-react";
import React, { useState } from "react";

const Ourwork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Total Quality Management Implementation",
      image: "/project-1.jpg",
      category: "Manufacturing",
      description: "A comprehensive quality management system implementation for improved efficiency.",
    },
    {
      id: 2,
      title: "Advanced Research in Material Science",
      image: "/project-2.jpg",
      category: "Development",
      description: "Innovative research in advanced materials for next-generation applications.",
    },
    {
      id: 3,
      title: "Workplace Safety Enhancement Initiative",
      image: "/project-3.jpg",
      category: "Infrastructure",
      description: "Creating safer work environments through strategic implementations.",
    },
    {
      id: 4,
      title: "Robotic Process Automation Deployment",
      image: "/project-4.jpg",
      category: "Automation",
      description: "Streamlining operations with cutting-edge robotic automation solutions.",
    },
  ];

  const categories = ["All", "Automation", "Development", "Infrastructure", "Manufacturing", "Sustainability"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Settings className="text-orange-500 h-6 w-6" />
          <h2 className="text-black font-bold text-xl">OUR WORK</h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <p className="text-black text-3xl lg:text-5xl font-light">
              Our successful project
            </p>
            <h1 className="text-black text-3xl lg:text-5xl font-bold mt-1">
              initiatives
            </h1>
          </div>
          <p className="text-gray-600 max-w-md">
            Our successful project initiatives showcase our commitment to
            excellence and innovation across various industries.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-6 items-center justify-center py-10 mb-6 border-b border-t border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:bg-orange-50 
                ${activeFilter === category
                  ? "text-orange-500 font-bold border-2 border-orange-500"
                  : "text-gray-700 font-medium border-2 border-transparent"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm mb-4">
                  {project.category}
                </span>
                <h3 className="text-black font-bold text-xl mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <button className="mt-4 text-orange-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Project
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ourwork;
