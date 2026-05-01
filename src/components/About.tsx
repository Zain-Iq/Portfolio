'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [showGremlins, setShowGremlins] = useState(false);
  const [showMoreExperience, setShowMoreExperience] = useState(false);
  const experiences = [
    {
      title: "Finance/Admin & Donor Representative | Muslim Hands Canada",
      period: "Feb - Mar 2026",
      description: "Recognized for strong performance and selected for admin responsibilities in Finance department, including documentation and cross-department coordination. Provided Tier 1 technical support for 30+ website users weekly, diagnosing front-end and backend issues, improving user experience and reducing support requests by 25%. Identified and proposed 5+ usability and performance enhancements for the organization's website, contributing to improved navigation and reduced user friction.",
      side: "left"
    },
    {
      title: "QA & Development | Stallion Express",
      period: "May - Aug 2025",
      description: "Collaborated with QA and Dev teams to test and validate software features, reproduce and document bugs, and ensure quality releases across a Laravel-based platform. Conducted regression testing with API endpoints using Postman and end-to-end tests with Playwright. Improved frontend page design using Vue3 and CSS, and developed core custom validation rules in Laravel. Participated in daily standups and product reviews, contributing to CI/CD cycles and Git/GitHub workflows.",
      side: "right"
    },
    {
      title: "Full Stack Developer | DeeDesigns",
      period: "Mar 2024 - June 2025",
      description: "Developed a responsive and modern front-end website for an independent Indigenous artist using ReactJS, CSS, and JavaScript. Conducted client meetings to gather requirements and refine design elements. Integrated a secure PHP backend with a relational database to handle purchasing workflows and data storage, ensuring reliability and security compliance.",
      side: "left"
    }
  ];
  const additionalExperiences = [
    {
      title: "SCSC | Sheridan Computer Science Executive",
      period: "Sept 2024 - April 2026",
      side: "right",
      details: [
        "Supported club operations through event coordination, technical setup, and collaboration across teams to help workshops and student activities run smoothly.",
        "Tracked attendance, assets, engagement, and feedback data to improve planning, streamline operations, and support stronger future programming.",
        "Built relationships with sponsors and guest speakers through professional communication and organized follow-up, strengthening external partnerships and event support."
      ]
    },
    {
      title: "Technical Support | My Community",
      period: "2016 - Present",
      side: "left",
      details: [
        "Provide ongoing technical support to family, friends, colleagues, and community members by diagnosing and resolving hardware, software, and account-related issues.",
        "Built, upgraded, and configured desktop computers and laptops, including Windows and macOS installation, system setup, optimization, backup assistance, and device reset support.",
        "Assisted users with remote troubleshooting and connectivity setup using VPNs, remote access tools, peripheral configuration, and application support."
      ]
    },
    {
      title: "Fast Food Team Member | Charley's Philly Steaks",
      period: "Sep 2018 - Jul 2019",
      side: "right",
      details: [
        "Handled customer transactions quickly and accurately while creating extra prep time for coworkers during rush periods.",
        "Reviewed sales activity and wrote item orders for the next morning, helping improve ordering efficiency by 15%.",
        "Directed customers clearly and respectfully, used a high-end GUI sales system confidently, and delivered accurate orders that improved customer satisfaction."
      ]
    },
    {
      title: "Data Entry / Receptionist | River Run Medical",
      period: "Oct 2017 - May 2019",
      side: "left",
      details: [
        "Streamlined workflows by using internal tools more effectively and debugging technical issues, improving operational efficiency and reducing errors.",
        "Optimized data entry and system navigation to cut daily closing time by 15 minutes while maintaining accuracy and compliance.",
        "Trained senior coworkers on system applications and resolved software issues on the spot, improving team efficiency and reducing downtime."
      ]
    }
  ];

  const gremlinsToggle = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex justify-center mb-10"
    >
      <button
        type="button"
        onClick={() => setShowGremlins((current) => !current)}
        className="inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
      >
        <span>See my 2 gremlins</span>
        <svg
          className={`h-5 w-5 text-zinc-300 transition-transform duration-300 ${
            showGremlins ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
        </svg>
      </button>
    </motion.div>
  );
  const experienceToggle = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-4 flex justify-center"
    >
      <button
        type="button"
        onClick={() => setShowMoreExperience((current) => !current)}
        className="inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
      >
        <span>{showMoreExperience ? 'Show less experience' : 'View more experience'}</span>
        <svg
          className={`h-5 w-5 text-zinc-300 transition-transform duration-300 ${
            showMoreExperience ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
        </svg>
      </button>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center">About Me</h2>

          {/* Who I Am - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-md h-96 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800 shadow-lg shadow-black/20">
                <img
                  src="assets/linkedin.jpg"
                  alt="Portrait of Zain"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Who I Am Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Hi, I'm Zain!</h3>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  I am a Sheridan College Computer Science student focused on building reliable and useful software. My experience spans frontend development, backend logic, testing, technical support, cloud services, and workflow improvement.
                </p>
                <p>
                  Beyond coding, I am a cat dad of 2 who enjoys playing sports and video games as hobbies. Initially, I started with wanting to create video games, but I realized my passion was strongly rooted in helping people. I would help people with technical problems, which then led me to wanting to create applications that do the same - solving real-world challenges and making technology more accessible.
                </p>
                <p>
                  I enjoy creating software that is both functional and polished, and I am especially interested in internship opportunities where I can contribute to real products and continue growing as a developer.
                </p>
              </div>
            </motion.div>
          </div>

          {!showGremlins && gremlinsToggle}

          {showGremlins && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center order-2 lg:order-1"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">My 2 Gremlins</h3>
                  <div className="space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                      I have 2 cats who I adore a lot. They are already over 1 years old, but they
                      will remain my babies forever.
                    </p>
                    <p>
                      A lot of the time when I am not coding or working, I am spending time with
                      them. They love to bother me when I am busy or stay in the same room as much as
                      they can.
                    </p>
                    <p>
                      They somehow manage to take over the bed too, and honestly, they probably sleep
                      there more than I do.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center order-1 lg:order-2"
                >
                  <div className="group relative w-full max-w-md h-96 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800 shadow-lg shadow-black/20">
                    <img
                      src="assets/MyGremlins.jpg"
                      alt="My two cats relaxing together"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-y-0 left-0 flex w-1/2 items-end bg-gradient-to-r from-black/25 via-black/5 to-transparent px-5 py-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-sm font-medium text-white">
                        Huey
                      </span>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex w-1/2 items-end justify-end bg-gradient-to-l from-black/25 via-black/5 to-transparent px-5 py-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-sm font-medium text-white">
                        Earl
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {gremlinsToggle}
            </>
          )}

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-12 text-center">Experience & Background</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-zinc-600"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    exp.side === 'left' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zinc-400 rounded-full border-4 border-zinc-900 z-10"></div>

                  {/* Content Box */}
                  <div className={`w-full max-w-md ${exp.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                      <div className="mb-3">
                        <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                        <span className="mt-2 inline-block text-sm text-zinc-400 bg-zinc-700 px-2 py-1 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {!showMoreExperience && experienceToggle}

            {showMoreExperience && (
              <>
                <div className="relative mt-12">
                  <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-zinc-600 lg:block"></div>

                  {additionalExperiences.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className={`relative mb-12 flex items-center ${
                        exp.side === 'left' ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      <div className="absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-zinc-900 bg-zinc-400 lg:block"></div>

                      <div className={`w-full ${exp.side === 'left' ? 'lg:max-w-[48%] lg:pr-8' : 'lg:max-w-[48%] lg:pl-8'}`}>
                        <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-6">
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                            <span className="mt-2 inline-block rounded bg-zinc-700 px-2 py-1 text-sm text-zinc-400">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="space-y-3 text-zinc-300">
                            {exp.details.map((detail) => (
                              <li key={detail} className="flex items-start">
                                <span className="mr-3 mt-1 text-zinc-500">&bull;</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {experienceToggle}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
