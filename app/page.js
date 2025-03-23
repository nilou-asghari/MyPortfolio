import { BsMoonStarsFill } from "react-icons/bs";

export const metadata = {
  title: "Niloufar Asghari Portfolio",
  description: "General description",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className=" min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-Markazi-Text">Niloufar Asghari</h1>
          <ul className="flex items-center">
            <li>
              <BsMoonStarsFill className="text-xl" />
            </li>
            <li>
              <a
                className="px-4 py-2 ml-8 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-sm"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
