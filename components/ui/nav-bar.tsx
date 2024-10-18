import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-0 py-4 lg:px-24 px-10 bg-gray-950">
      <Link href="/">
        <h1 className="text-3xl text-white">Next</h1>
      </Link>
    </nav>
  );
}
