export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08101f]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="text-2xl font-bold">
          Foundation Blocks
        </div>

        <nav className="hidden gap-8 text-gray-300 md:flex">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-xl bg-blue-600 px-5 py-2 hover:bg-blue-700">
          Enroll Now
        </button>
      </div>
    </header>
  );
}