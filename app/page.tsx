export default function Home() {
  return (
    <div className="w-full mt-8 h-full grow flex justify-center items-center">
      <div className="w-full relative h-full max-w-[min(90vw,500px)] text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-brand mb-1">
          U<span className="text-light-200 dark:text-dark-500">seful</span>{" "}
          Links
        </h1>

        <p className="text-lg md:text-xl text-light-100 dark:text-dark-600 mb-4">
          A curated collection of useful links for developers
        </p>

        <div className="flex gap-2 justify-center font-medium">
          <a
            href="/collection"
            className="bg-primary dark:bg-dark-200 py-2 px-6 rounded-md text-[#fafafa] cursor-pointer"
          >
            Start Browsing
          </a>
          <a className="bg-slate-200 dark:bg-[transparent] dark:text-dark-500 py-2 px-6 rounded-md text-dark-100">
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
}
