import React, { useState } from "react";

function Skills() {
    // set dummy skills data
    const allSkills = [
        { name: 'React', image: '/images/night-desk.png', description: 'A JavaScript library for building user interfaces' },
        { name: 'JavaScript', image: '/images/night-desk.png', description: 'High-level, interpreted programming language' },
        { name: 'HTML5', image: '/images/night-desk.png', description: 'Standard markup language for documents designed to be displayed in a web browser' },
        { name: 'CSS3', image: '/images/night-desk.png', description: 'Style sheet language used for describing the presentation of a document' },
        { name: 'Node.js', image: '/images/night-desk.png', description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
        { name: 'Git', image: '/images/night-desk.png', description: 'Distributed version control system' },
    ];
    const [visibleSkills, setVisibleSkills] = useState(3);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">기술 스택</h2>
            <div className="space-y-6">
                {allSkills.slice(0, visibleSkills).map((skills, index) => (
                    <div key={index} className="flex item-center bg-white p-4 rounded-lg shadow-md">
                        <img src={skills.image} alt={skills.name} className="w-24 h-16 object-container mr-4"/>
                        <div class="flex flex-col gap-x-4 text-xs">
                            <div>
                                <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{skills.name}</h3>
                                <p className="text-gray-600">{skills.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills