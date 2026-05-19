import { useState, useEffect } from "react"
import './index.css'
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App() {
  const [page, setPage] = useState("home")

  const [theme, setTheme] = useState("auto")

  useEffect(() => {

    if (theme === "dark") {

      document.documentElement.classList.add("dark")
    }

    else if (theme === "light") {

      document.documentElement.classList.remove("dark")
    }

    else if (theme === "auto") {

      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

        document.documentElement.classList.add("dark")
      }

      else {

        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col">
      <>
        <Header setPage={setPage} setTheme={setTheme} />
        <div className="flex-grow">
          <MainContent page={page} setPage={setPage} />
        </div>
        <Footer name="AHF" />
      </>
    </div>
  )
}

export default App