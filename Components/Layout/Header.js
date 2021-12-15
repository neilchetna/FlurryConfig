import { FaGithubAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="fixed flex bg-white z-50 justify-center p-4 inset-0 h-12">
      <div className="h-full flex items-center justify-between w-full max-w-screen-lg ">
        <p className="text-lg text-blue-600 font-mono font-bold">
          Flurry Config
        </p>
        <a
          href="https://github.com/neilchetna/FlurryConfig"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt className="text-2xl text-indigo-400" />
        </a>
      </div>
    </div>
  );
}
