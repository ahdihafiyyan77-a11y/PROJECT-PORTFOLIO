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
      <div className="relative min-h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover">

          <source
            src="/pidio.mp4"
            type="video/mp4">
          </source>

        </video>

        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full flex justify-center flex-grow">


        <main className="w-full max-w-6xl px-6 py-12 text-center flex-grow flex items-center justify-center">

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

      </div>

    )
  }

  if (page === "about") {
    return (
      <div className="relative min-h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover">

          <source
            src="/pidio.mp4"
            type="video/mp4">
          </source>

        </video>

        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full flex justify-center flex-grow">

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

      </div>
    )
  }

  if (page === "project") {
    return (
      <div className="relative min-h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover">

          <source
            src="/pidio.mp4"
            type="video/mp4">
          </source>

        </video>

        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full flex justify-center flex-grow">


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

      </div>
    )
  }

  if (page === "contact") {
    return (
      <div className="relative min-h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover">

          <source
            src="/pidio.mp4"
            type="video/mp4">
          </source>

        </video>

        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full flex justify-center flex-grow">

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

      </div>
    )
  }


  if (page === "Article1") {
    return (
      <div className="relative min-h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover">

          <source
            src="/pidio.mp4"
            type="video/mp4">
          </source>

        </video>

        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full flex justify-center flex-grow">

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

            <div className="text-left">

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
            className="mt-10 leading-9 text-gray-700 dark:text-gray-300 space-y-6 text-left"
            style={{ fontSize: `${fontSize}px` }}>

            <p>
              {language === "id"
                ? `Saat ini saya masih bersekolah di SMK dan sedang menjalani PKL sebagai siswa kelas 2. Kegiatan PKL membuat saya belajar banyak hal baru tentang dunia kerja. Setiap hari saya harus datang tepat waktu, menyelesaikan tugas, dan menyesuaikan diri dengan lingkungan kerja. Walaupun menyenangkan dan menambah pengalaman, terkadang kegiatan tersebut juga membuat pikiran lelah.
Untuk menyegarkan pikiran setelah menjalani aktivitas PKL, saya memiliki hobi menonton pertandingan sepak bola. Menonton bola menjadi hiburan sederhana yang membuat suasana hati lebih baik. Ketika melihat pertandingan tim favorit, saya merasa lebih santai dan dapat melupakan rasa penat untuk sementara waktu.
Menurut saya, sepak bola bukan hanya sekadar olahraga, tetapi juga hiburan yang penuh semangat dan kerja sama. Dari pertandingan bola, saya belajar tentang disiplin, kerja keras, dan pentingnya kekompakan dalam sebuah tim. Hal tersebut juga bisa diterapkan dalam kehidupan sehari-hari maupun saat menjalani PKL.
Selain itu, menonton bola membuat saya lebih bersemangat menjalani aktivitas berikutnya. Setelah pikiran terasa segar, saya menjadi lebih fokus dan siap menghadapi tugas-tugas di sekolah maupun tempat PKL.
Setiap orang tentu memiliki cara berbeda untuk menghilangkan rasa lelah. Ada yang bermain game, mendengarkan musik, atau berjalan-jalan. Sedangkan bagi saya, menonton pertandingan sepak bola adalah cara yang paling menyenangkan untuk menyegarkan pikiran di tengah kesibukan sekolah dan PKL.`
                : `I'm currently attending vocational high school and undergoing an internship (PKL) as a second-year student. The internship has taught me many new things about the working world.
Every day I have to arrive on time, complete assignments, and adapt to the work environment. While it is enjoyable and gives me valuable experience, it can sometimes be mentally tiring.
To refresh my mind after internship activities, I enjoy watching football matches. Watching football is a simple hobby that improves my mood. When I watch my favorite team play, I feel more relaxed and can temporarily forget my fatigue.
I believe football is not only a sport but also entertainment full of passion and teamwork. From football matches, I learn discipline, hard work, and the importance of cooperation. These lessons can also be applied in daily life and during internships.
In addition, watching football makes me more motivated for the next activities. After refreshing my mind, I become more focused and ready to face assignments at school and at the internship place.
Everyone has different ways to relieve tiredness. Some people play games, listen to music, or take walks. For me, watching football matches is the most enjoyable way to refresh my mind amid school and internship activities.`}
            </p>

          </div>

        </article>

      </div>

      </div>
    )
  }

  if (page === "Article2") {
    return (
      <div className="relative min-h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover">

          <source
            src="/pidio.mp4"
            type="video/mp4">
          </source>

        </video>

        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full flex justify-center flex-grow">


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

            <div className="text-left">

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
            className="mt-10 leading-9 text-gray-700 dark:text-gray-300 space-y-6 text-left"
            style={{ fontSize: `${fontSize}px` }}>

            <p>
              {language === "id"
                ? `Setiap orang tentu memiliki motivasi dalam hidupnya. Ada yang ingin membanggakan orang tua, meraih cita-cita, atau mendapatkan kehidupan yang lebih baik. Bagi sebagian orang, salah satu motivasi terbesar untuk terus berjuang adalah mencapai financial freedom atau kebebasan finansial.
Financial freedom bukan berarti hidup mewah atau memiliki segalanya dengan mudah. Financial freedom adalah kondisi ketika seseorang mampu memenuhi kebutuhan hidupnya dengan baik, memiliki penghasilan yang stabil, dan tidak selalu merasa khawatir tentang masalah keuangan. Karena itulah, banyak orang menjadikan hal tersebut sebagai tujuan hidup dan alasan untuk terus berusaha.
Seseorang yang memiliki motivasi financial freedom biasanya tidak mudah menyerah saat menghadapi kesulitan. Mereka sadar bahwa setiap proses membutuhkan perjuangan dan pengorbanan. Walaupun lelah, gagal, atau mengalami hambatan, mereka tetap mencoba bangkit karena memiliki tujuan yang jelas untuk masa depan.
Bagi pelajar SMK yang sedang menjalani PKL, motivasi ini juga bisa menjadi penyemangat dalam belajar dan mencari pengalaman. Dengan terus meningkatkan kemampuan, disiplin, dan kerja keras, mereka percaya bahwa semua usaha yang dilakukan sekarang akan membantu mencapai kehidupan yang lebih baik di masa depan.
Selain itu, motivasi financial freedom membuat seseorang lebih menghargai waktu dan kesempatan. Mereka ingin menggunakan masa muda untuk belajar, berkembang, dan memperbaiki diri agar suatu hari nanti bisa hidup mandiri serta membantu keluarga.
Pada akhirnya, memiliki motivasi yang kuat sangat penting dalam kehidupan. Financial freedom bukan hanya tentang uang, tetapi juga tentang kebebasan, tanggung jawab, dan masa depan yang lebih baik. Dengan tujuan tersebut, seseorang akan memiliki alasan untuk tetap semangat dan tidak mudah menyerah menghadapi setiap tantangan hidup.`
                : `Everyone has a motivation in life. Some want to make their parents proud, achieve their dreams, or achieve a better life. For some, one of the greatest motivations to keep striving is achieving financial freedom.
Financial freedom doesn't mean living in luxury or having everything easily. It's a state where someone can adequately meet their needs, have a stable income, and not constantly worry about money. For this reason, many people make this a life goal and a reason to keep trying.
Someone motivated by financial freedom typically doesn't give up easily when facing difficulties. They realize that every process requires struggle and sacrifice. Even when tired, fail, or encounter obstacles, they continue to rise because they have a clear goal for the future.
For vocational high school students undergoing internships, this motivation can also be a driving force in learning and gaining experience. By continuously improving their skills, discipline, and hard work, they believe that all the efforts they make now will help them achieve a better life in the future.
Furthermore, the motivation of financial freedom makes someone value time and opportunities more. They want to use their youth to learn, grow, and improve themselves so they can one day live independently and help their families.
Ultimately, having a strong motivation is crucial in life. Financial freedom isn't just about money; it's also about freedom, responsibility, and a brighter future. With this goal, a person will have a reason to stay motivated and not give up easily in the face of life's challenges.`}
            </p>

          </div>

        </article>

      </div>

      </div>
    )
  }

  if (page === "Article3") {
    return (
      <div className="relative min-h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover">

          <source
            src="/pidio.mp4"
            type="video/mp4">
          </source>

        </video>

        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full flex justify-center flex-grow">

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

            <div className="text-left">

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
            className="mt-10 leading-9 text-gray-700 dark:text-gray-300 space-y-6 text-left"
            style={{ fontSize: `${fontSize}px` }}>

            <p>
              {language === "id"
                ? `Pendidikan merupakan salah satu hal penting dalam kehidupan manusia. Dengan pendidikan, seseorang dapat memperoleh ilmu pengetahuan, pengalaman, serta kemampuan yang berguna untuk masa depan. Karena itulah, banyak orang percaya bahwa menempuh pendidikan adalah salah satu kunci untuk menuju kesuksesan.
Seseorang yang memiliki semangat dalam menempuh pendidikan biasanya memiliki tujuan yang jelas dalam hidupnya. Mereka sadar bahwa keberhasilan tidak datang dengan mudah, tetapi harus diraih melalui proses belajar, kerja keras, dan disiplin. Walaupun terkadang merasa lelah menghadapi tugas, ujian, atau kesulitan lainnya, mereka tetap berusaha karena yakin pendidikan dapat membuka banyak peluang di masa depan.
Bagi pelajar, pendidikan bukan hanya tentang mendapatkan nilai yang bagus, tetapi juga tentang membentuk karakter dan menambah keterampilan. Di sekolah, seseorang belajar untuk bertanggung jawab, bekerja sama, menghargai waktu, dan menyelesaikan masalah. Semua hal tersebut sangat berguna ketika memasuki dunia kerja maupun kehidupan bermasyarakat.
Selain itu, pendidikan juga membantu seseorang untuk meraih cita-cita yang diinginkan. Dengan ilmu dan keterampilan yang dimiliki, peluang untuk mendapatkan pekerjaan yang baik akan semakin besar. Karena itu, banyak orang rela berjuang dan tetap semangat dalam belajar demi mencapai masa depan yang lebih baik.
Bagi siswa SMK yang sedang menjalani PKL, pendidikan dan pengalaman kerja menjadi kombinasi yang sangat penting. Mereka tidak hanya belajar teori di sekolah, tetapi juga mendapatkan pengalaman langsung di dunia kerja. Hal ini dapat membantu meningkatkan kemampuan dan mempersiapkan diri menghadapi tantangan di masa depan.
Pada akhirnya, kesuksesan tidak bisa diraih secara instan. Dibutuhkan usaha, kesabaran, dan kemauan untuk terus belajar. Dengan menempuh pendidikan dan memanfaatkan setiap kesempatan untuk berkembang, seseorang akan semakin dekat dengan impian dan kesuksesan yang ingin dicapai.`
                : `Education is one of the most important aspects of human life. Through education, a person can gain knowledge, experience, and skills that will be useful for the future. Therefore, many people believe that pursuing an education is one of the keys to success.
Someone who is passionate about their education usually has a clear purpose in life. They realize that success doesn't come easily but must be achieved through learning, hard work, and discipline. Even though they sometimes feel tired when facing assignments, exams, or other difficulties, they persist because they believe that education can open up many opportunities in the future.
For students, education isn't just about getting good grades; it's also about developing character and developing skills. At school, a person learns responsibility, cooperation, time management, and problem-solving. All of these skills are invaluable when entering the workforce and social life.
Furthermore, education also helps a person achieve their dreams. With the knowledge and skills they possess, their chances of finding a good job increase. Therefore, many people are willing to struggle and remain enthusiastic about learning to achieve a better future.
For vocational high school students undergoing internships, education and work experience are a crucial combination. They not only learn theory at school but also gain hands-on experience in the workplace. This can help improve their skills and prepare them for future challenges.
Ultimately, success doesn't come instantly. It requires effort, patience, and a willingness to continue learning. By pursuing education and taking advantage of every opportunity to develop, one will get closer to achieving their dreams and the success they desire.`
              }
            </p>

          </div>

        </article>

      </div>

      </div>
    )
  }
}


export default MainContent