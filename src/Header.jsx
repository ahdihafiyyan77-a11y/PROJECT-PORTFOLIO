import { Sun, Moon, Monitor } from "lucide-react"
import { useState } from "react"

function Header({ setPage, setTheme }) {

  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="text-xl font-bold text-gray-300">
          Ahdi Hafiyyan
        </div>

        <div className="flex items-center gap-6">

          <nav className="flex items-center gap-6">

            <button
              onClick={() => setPage("home")}
              className="transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_white]"
            >
              Home
            </button>

            <button
              onClick={() => setPage("about")}
              className="transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_white]"
            >
              About
            </button>

            <button
              onClick={() => setPage("project")}
              className="transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_white]"
            >
              Project
            </button>

            <button
              onClick={() => setPage("contact")}
              className="transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_white]"
            >
              Contact
            </button>

          </nav>

          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-full hover:bg-blue-700 transition"
            >
              <Sun size={20} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-lg shadow-lg overflow-hidden">

                <button
                  onClick={() => {
                    setTheme("auto")
                    setOpen(false)
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <Monitor size={18} />
                  Automatic
                </button>

                <button
                  onClick={() => {
                    setTheme("dark")
                    setOpen(false)
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <Moon size={18} />
                  Dark Mode
                </button>

                <button
                  onClick={() => {
                    setTheme("light")
                    setOpen(false)
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <Sun size={18} />
                  Light Mode
                </button>

              </div>
            )}

          </div>

        </div>

      </div>
    
    </header>
  )
}

export default Header