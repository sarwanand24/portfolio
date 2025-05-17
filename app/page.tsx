"use client"
import React from 'react'

function Home() {

  const projects = [
  {
    title: "Tiofy",
    description: "A super app for food delivering, cab booking and hotel booking..",
    image: "/assets/TiofyLogo.png",
    repo: "https://github.com/sarwanand24/Tiofy",
  },
  {
    title: "Tiofy Rider",
    description: "Tiofy Delivery Partner and Rider application.",
    image: "/assets/TiofyRider.png",
    repo: "https://github.com/sarwanand24/TiofyRider",
  },
  {
    title: "Tiofy Restaurant",
    description: "Tiofy Restaurant Partners Application",
    image: "/assets/TiofyRestro.png",
    repo: "https://github.com/sarwanand24/TiofyRestaurant",
  },
    {
    title: "Tiofy Server",
    description: "Server for managing all the api request",
    image: "https://wallpaperaccess.com/full/4172522.jpg",
    repo: "https://github.com/sarwanand24/TrioServer",
  },
     {
    title: "FeeBook",
    description: "An application for all teachers to manage their fees, students and other records.",
    image: "/assets/Artboard 1.png",
    repo: "https://github.com/sarwanand24/FeeBook",
  },
       {
    title: "Youtube Backend Clone",
    description: "This project includes all the backend functionality of Youtube or any video streaming app like comments, likes, subscribers and many other features.",
    image: "https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png",
    repo: "https://github.com/sarwanand24/youtube-clone-backend",
  },
];

  return (
   <div className="scroll-smooth">
  {/* ABOUT SECTION */}
  <section id="about" className="h-screen pt-[12vh] bg-base-200 flex items-center justify-center text-center">
    <div>
      <h1 className="text-5xl md:text-7xl font-bold font-[Arial] text-accent mb-4">
        Hey, I am Nikhil
      </h1>
    <p className="text-2xl md:text-3xl font-medium italic font-mono text-primary">
  a Full Stack Developer
</p>

    </div>
  </section>

  {/* WORK SECTION */}
<section
  id="work"
  className="min-h-screen pt-[12vh] bg-secondary text-center px-4 py-10"
>
  <h2 className="text-4xl md:text-5xl font-[Arial] font-bold text-accent underline mb-12">
    These are some of my projects
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {projects.map((project, i) => (
      <div
        key={i}
        className="card bg-base-100 w-80 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
      >
        <figure className="w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-lg font-bold text-primary">
            {project.title}
          </h2>
          <p className="text-base text-base-content/80">
            {project.description}
          </p>
          <div className="card-actions justify-end mt-4">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary text-accent"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

 {/* Contact SECTION */}
<section
  id="contact"
  className="h-screen pt-[12vh] bg-base-200 flex flex-col items-center justify-center text-center px-4 font-[Arial]"
>
  {/* <h2 className="text-4xl md:text-5xl font-bold text-accent mb-14">
    Let's Work Together...
  </h2> */}

   <figure className="diff aspect-16/9 pb-15" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <div className="bg-secondary text-accent grid place-content-center text-9xl font-black">
      Let&apos;s work together...
    </div>
  </div>
  <div className="diff-item-2" role="img">
    <div className="bg-accent grid place-content-center text-9xl font-black text-primary">Let&apos;s work together...</div>
  </div>
  <div className="diff-resizer"></div>
</figure>

  <div className="flex space-x-20 pb-15">
    {/* Email Icon */}
    <a
      href="mailto:nikhildhamgay200424@gmail.com"
      className="text-5xl text-accent hover:text-primary transition-transform duration-300 hover:scale-110"
      aria-label="Email"
    >
      <i className="fas fa-envelope"></i>
    </a>

    {/* Phone Icon */}
    <a
      href="tel:+917550894302"
      className="text-5xl text-accent hover:text-primary transition-transform duration-300 hover:scale-110"
      aria-label="Phone"
    >
      <i className="fas fa-phone-alt"></i>
    </a>
  </div>
</section>

</div>
  )
}

export default Home
