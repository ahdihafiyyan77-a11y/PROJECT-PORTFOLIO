import { useState } from "react"
function MainContent({ page, setPage }) {

  const [fontSize, setFontSize] =
    useState(18)

  const [language, setLanguage] =
    useState("id")

  const uploadTime = new
    Date("2026-05-15T13:00:00")

  const getTimeAgo = () => {

    const now = new Date()

    const diffms = now - uploadTime

    const diffHours =
      Math.floor(diffms / (1000 * 60 * 60))

    if (diffHours < 1) {
      return "Baru saja"
    }

    if (diffHours < 24) {
      return `${diffHours} jam yang lalu`
    }

    const diffDays =
      Math.floor(diffHours / 24)

    return `${diffDays} hari yang lalu`
  }

  if (page === "home") {
    return (
      <div className="w-full flex justify-center flex-grow">

        <main className="w-full max-w-6xl px-6 py-12 text-center flex-grow flex items-center justify-center bg-white dark:bg-gray-900">

          <section>

            <img
              src="/poto.jpeg"
              alt="poto"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-800 dark:border-blue-500 shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-blue-500/50 hover:shadow-2xl transition duration-300 cursor-pointer">
            </img>

            <h1 className="text-4xl font-bold text-black dark:text-white">
              Hello, I'm Ahdi Hafiyyan
            </h1>

            <p className="text-gray-600 mt-2 text-lg dark:text-gray-300">
              A Front-End Developer
            </p>

            <p className="text-gray-500 mt-4 max-w-xl mx-auto dark:text-gray-300">
              I build responsive and modern web applications using React and Tailwind CSS.
            </p>

            <div className="mt-6 flex justify-center gap-4">

              <button
                onClick={() => setPage("project")}
                className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
                View Project
              </button>

              <button
                onClick={() => setPage("contact")}
                className="border border-blue-800 text-blue-800 dark:text-white px-6 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-800 transition">
                Contact Me
              </button>

            </div>

            <section className="mt-20">

              <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
                My Article
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div
                  onClick={() => setPage("Article1")}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                >

                  <img
                    src="/poto2.jpg"
                    alt="Article 1"
                    className="w-full h-52 object-cover">
                  </img>

                  <div className="p-5">

                    <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full">
                      My Hobby
                    </span>

                    <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-white group-hover:text-blue-700 transition">
                      Simple Hobbies For A Fresh Mind
                    </h3>

                    <div className="flex justify-center mt-4">

                      <div className="flex items-center gap-3">

                        <img
                          src="/poto5.jpg"
                          alt="profile"
                          className="w-8 h-8 rounded-full object-cover">
                        </img>

                        <div className="text-center">

                          <p className="text-sm font-semibold text-gray-800 dark:text-white">
                            Ahdi Hafiyyan
                          </p>

                          <p className="text-xs text-gray-500 dark:text-gray-300">
                            {getTimeAgo()}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div
                  onClick={() => setPage("Article2")}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                >

                  <img
                    src="/poto3.jpg"
                    alt="Article 2"
                    className="w-full h-52 object-cover">
                  </img>

                  <div className="p-5">
                    <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                      My Motivation
                    </span>

                    <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-white group-hover:text-green-700 transition">
                      The Reason I Never Give Up
                    </h3>

                    <div className="flex justify-center mt-4">

                      <div className="flex items-center gap-3">

                        <img
                          src="/poto5.jpg"
                          alt="profile"
                          className="w-8 h-8 rounded-full object-cover">
                        </img>

                        <div className="text-center">

                          <p className="text-sm font-semibold text-gray-800 dark:text-white">
                            Ahdi Hafiyyan
                          </p>

                          <p className="text-xs text-gray-500 dark:text-gray-300">
                            {getTimeAgo()}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div
                  onClick={() => setPage("Article3")}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                >

                  <img
                    src="/poto4.jpg"
                    alt="Article 3"
                    className="w-full h-52 object-cover">
                  </img>

                  <div className="p-5">

                    <span className="bg-red-700 text-white text-xs px-3 py-1 rounded-full">
                      My Education
                    </span>

                    <h3 className="text-xl font-bold mt-4 text-gray-800 dark:text-white group-hover:text-red-700 transition">
                      Education As The Key To Success
                    </h3>

                    <div className="flex justify-center mt-4">

                      <div className="flex items-center gap-3">

                        <img
                          src="/poto5.jpg"
                          alt="profile"
                          className="w-8 h-8 rounded-full object-cover">
                        </img>

                        <div className="text-center">

                          <p className="text-sm font-semibold text-gray-800 dark:text-white">
                            Ahdi Hafiyyan
                          </p>

                          <p className="text-xs text-gray-500 dark:text-gray-300">
                            {getTimeAgo()}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </section>

          </section>

        </main>

      </div>


    )
  }

  if (page === "about") {
    return (
      <div className="flex justify-center px-6 py-12 bg-white dark:bg-gray-900 min-h-screen">

        <section className="max-w-3xl text-center flex flex-col">

          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About Me</h1>

          <p className="mt-6 text-gray-600 leading-8 text-lg dark:text-gray-300">
            Hello! I'm Ahdi Hafiyyan, a Front-End Developer who enjoys building modern, responsive, and user-friendly websites using React and Tailwind CSS
          </p>

          <p className="mt-4 text-gray-600 leading-8 text-lg dark:text-gray-300">
            I love learning new technologies and improving my skills in web development to create clean and interactive user interfaces
          </p>

          <div className="mt-10">

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">My Skills</h2>

            <div className="flex flex-col items-center gap-4 mt-6">

              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">React JS</span>

              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Tailwind CSS</span>

              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">JavaScript</span>

              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">HTML & CSS</span>

            </div>

          </div>

        </section>

      </div>
    )
  }

  if (page === "project") {
    return (
      <div className="flex justify-center px-6 py-12 bg-white dark:bg-gray-900 min-h-screen">

        <section className="w-full max-w-5xl">

          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">My Projects</h1>

          <p className="text-gray-500 mt-4 dark:text-gray-300">Here are some projects I have built using React and Tailwind CSS.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="group border rounded-xl p-6 shadow hover:shadow-lg hover:bg-blue-800 transition duration-300 bg-white dark:bg-gray-800">

              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-white">Portfolio Website</h2>

              <p className="text-gray-600 mt-3 leading-7 dark:text-gray-300 group-hover:text-gray-200">A responsive personal portfolio website built with React JS and Tailwind CSS.</p>

              <div className="flex justify-center gap-3 mt-4 flex-wrap">

                <span className="flex items-center justify-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm min-w-[100px] group-hover:bg-white group-hover:text-blue-800">React</span>

                <span className="flex items-center justify-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm min-w-[100px] group-hover:bg-white group-hover:text-blue-800">Tailwind</span>
              </div>

            </div>

            <div className="group border rounded-xl p-6 shadow hover:shadow-lg hover:bg-blue-800 transition duration-300 bg-white dark:bg-gray-800">

              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-white">CRUD App</h2>

              <p className="text-gray-600 mt-3 leading-7 dark:text-gray-300 group-hover:text-gray-200">A simple CRUD application for managing data using React</p>

              <div className="flex justify-center gap-3 mt-4 flex-wrap">

                <span className="flex items-center justify-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm min-w-[100px] group-hover:bg-white group-hover:text-blue-800">React</span>

                <span className="flex items-center justify-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm min-w-[100px] group-hover:bg-white group-hover:text-blue-800">JavaScript</span>

              </div>

            </div>

          </div>

        </section>

      </div>
    )
  }

  if (page === "contact") {
    return (
      <div className="flex justify-center px-6 py-12 bg-white dark:bg-gray-900 min-h-screen">

        <section className="w-full max-w-3xl">

          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">Contact Me</h1>

          <p className="text-center text-gray-500 mt-4 dark:text-gray-300">Feel free to contact me for collaboration or project dicussions</p>

          <div className="mt-10 space-y-4 text-center">

            <p className="text-lg text-gray-700 dark:text-gray-300">Email: ahdihafiyyan77@gmail.com</p>

            <p className="text-lg text-gray-700 dark:text-gray-300">Phone: +62 856-9210-1047</p>

            <p className="text-lg text-gray-700 dark:text-gray-300">Instagram: ahdihafiyyan</p>

          </div>

          <form className="mt-10 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            </input>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            </input>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            </textarea>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition"
            >Send Message
            </button>

          </form>

        </section>

      </div>

    )
  }


  if (page === "Article1") {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen px-6 py-10 flex justify-center">

        <article className="w-full max-w-5xl">

          <span className="bg-green-600 text-white px-4 py-1 rounded text-sm font-semibold">
            My Hobby
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mt-6 leading-tight">
            Simple Hobbies For a Fresh Mind
          </h1>

          <div className="flex items-center gap-4 mt-8">

            <img
              src="/poto5.jpg"
              alt="author"
              className="w-14 h-14 rounded-full object-cover">
            </img>

            <div>

              <p className="font-semibold text-gray-800 dark:text-white">
                Ahdi Hafiyyan
              </p>

              <p className="text-gray-500 text-sm dark:text-gray-300">
                Jumat, 15 Mei 2026 - 12.31 WIB
              </p>

            </div>

          </div>

          <img
            src="/poto2.jpg"
            alt="Article1"
            className="w-full rounded-2xl mt-10 shadow-lg">
          </img>

          <div className="mt-8 flex gap-4 flex-wrap">

            <button
              onClick={() => setFontSize(fontSize + 2)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              A+
            </button>

            <button
              onClick={() => setFontSize(fontSize - 2)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              A-
            </button>

            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
              {language === "id" ? "Translate English" : "Translate Indonesia"}
            </button>
          </div>

          <div
            className="mt-10 leading-9 text-gray-700 dark:text-gray-300 space-y-6"
            style={{ fontSize: `${fontSize}px` }}>

            <p>
              {language === "id"
                ? "Hobi dapat membantu menyegarkan pikiran setelah menjalani aktivitas sehari-hari."
                : "Hobbies can help refresh the mind after daily activities."
              }
            </p>

          </div>

        </article>

      </div>
    )
  }

  if (page === "Article2") {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen px-6 py-10 flex justify-center">

        <article className="w-full max-w-5xl">

          <span className="bg-blue-600 text-white px-4 py-1 rounded text-sm font-semibold">
            My Motivation
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mt-6 leading-tight">
            The Reason I Never Give Up
          </h1>

          <div className="flex items-center gap-4 mt-8">

            <img
              src="/poto5.jpg"
              alt="author"
              className="w-14 h-14 rounded-full object-cover">
            </img>

            <div>

              <p className="font-semibold text-gray-800 dark:text-white">
                Ahdi Hafiyyan
              </p>

              <p className="text-gray-500 text-sm dark:text-gray-300">
                Jumat, 15 Mei 2026 - 12.31 WIB
              </p>

            </div>

          </div>

          <img
            src="/poto3.jpg"
            alt="Article2"
            className="w-full rounded-2xl mt-10 shadow-lg">
          </img>

          <div className="mt-8 flex gap-4 flex-wrap">

            <button
              onClick={() => setFontSize(fontSize + 2)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              A+
            </button>

            <button
              onClick={() => setFontSize(fontSize - 2)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              A-
            </button>

            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
              {language === "id" ? "Translate English" : "Translate Indonesia"}
            </button>
          </div>

          <div
            className="mt-10 leading-9 text-gray-700 dark:text-gray-300 space-y-6"
            style={{ fontSize: `${fontSize}px` }}>

            <p>
              {language === "id"
                ? "Motivasi membuat saya terus semangat mencapai tujuan."
                : "Motivation keeps me excited to achieve my goals."}
            </p>

          </div>

        </article>

      </div>
    )
  }

  if (page === "Article3") {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen px-6 py-10 flex justify-center">

        <article className="w-full max-w-5xl">

          <span className="bg-red-600 text-white px-4 py-1 rounded text-sm font-semibold">
            My Education
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mt-6 leading-tight">
            Education As The Key To Success
          </h1>

          <div className="flex items-center gap-4 mt-8">

            <img
              src="/poto5.jpg"
              alt="author"
              className="w-14 h-14 rounded-full object-cover">
            </img>

            <div>

              <p className="font-semibold text-gray-800 dark:text-white">
                Ahdi Hafiyyan
              </p>

              <p className="text-gray-500 text-sm dark:text-gray-300">
                Jumat, 15 Mei 2026 - 12.31 WIB
              </p>

            </div>

          </div>

          <img
            src="/poto4.jpg"
            alt="Article3"
            className="w-full rounded-2xl mt-10 shadow-lg">
          </img>

          <div className="mt-8 flex gap-4 flex-wrap">

            <button
              onClick={() => setFontSize(fontSize + 2)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              A+
            </button>

            <button
              onClick={() => setFontSize(fontSize - 2)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              A-
            </button>

            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
              {language === "id" ? "Translate English" : "Translate Indonesia"}
            </button>
          </div>

          <div
            className="mt-10 leading-9 text-gray-700 dark:text-gray-300 space-y-6"
            style={{ fontSize: `${fontSize}px` }}>

            <p>
              {language === "id"
                ? "pendidikan adalah kunci untuk mencapai masa depan yang lebih baik."
                : "Education is the key to achieving a better future"
              }
            </p>

          </div>

        </article>

      </div>
    )
  }
}


export default MainContent