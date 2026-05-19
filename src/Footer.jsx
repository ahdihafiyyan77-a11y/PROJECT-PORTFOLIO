import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa"
function Footer({ name }) {
    return (
        <footer className="bg-blue-800 text-white py-8 text-center">

            <div className="flex justify-center gap-6 text-2xl mb-4">

                <a href="https://instagram.com/ahdihafiyyan"
                    target="_blank"
                    className="hover:text-pink-300 transition">
                    <FaInstagram />
                </a>

                <a
                    href="https://wa.me/6285692101047"
                    target="_blank"
                    className="hover:text-green-300 transition">
                    <FaWhatsapp />
                </a>

                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ahdihafiyyan77@gmail.com"
                    target="_blank"
                    className="hover:text-yellow-300 transition">
                    <FaEnvelope />
                </a>

            </div>

            <p>&copy; {new Date().getFullYear()} {name}
            </p>
       
        </footer>
    )
}

export default Footer