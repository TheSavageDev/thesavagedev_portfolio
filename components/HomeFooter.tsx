const HomeFooter = () => {
  return (
    <footer className="w-full px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-20">
      <div className="glass-panel mx-auto w-full max-w-[380px] rounded-2xl border-white/20 bg-gray-900/30 px-8 py-8 shadow-glass-highlight sm:max-w-[420px]">
        <div className="flex items-start gap-5">
          <img
            src="/images/headshot.png"
            alt=""
            className="h-16 w-16 shrink-0 rounded-lg object-cover ring-1 ring-white/20 sm:h-[4.5rem] sm:w-[4.5rem]"
          />
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold leading-tight text-white sm:text-xl">
              Jason A Savage
            </h2>
            <p className="mt-0.5 text-sm text-gray-400">Savage Webmancer</p>
            <div className="mt-4 flex flex-col gap-1.5 border-t border-white/10 pt-4 text-sm text-gray-300">
              <a
                href="mailto:thesavage42@icloud.com"
                className="break-all transition-colors duration-200 hover:text-yellow"
              >
                thesavage42@icloud.com
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Kansas"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="transition-colors duration-200 hover:text-yellow"
              >
                Kansas, USA
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
