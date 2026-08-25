import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";
import Link from "next/link";

type props = {
  title: string;
  description: string;
};

export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-4xl">
        <Image
          width={80}
          height={80}
          src={duckImage}
          alt="Yellow duck searching"
        />
        <h1 className="font-incognito font-black tracking-tight sm:text-6xl text-3xl lg:leading-[3.7rem] leading-tight mt-6 mb-3">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </header>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 dark:text-white text-zinc-700 hover:dark:border-zinc-600 hover:border-zinc-300 transition-colors font-medium"
        >
          ← Back to Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 dark:text-white text-zinc-700 hover:dark:border-zinc-600 hover:border-zinc-300 transition-colors font-medium"
        >
          View Projects →
        </Link>
      </div>
    </main>
  );
}
