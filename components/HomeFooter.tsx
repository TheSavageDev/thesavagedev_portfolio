const HomeFooter = () => {
  return (
    <footer id="contact" className="relative w-full">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title mt-3">Let&apos;s build something lasting</h2>
        <p className="section-lede">
          Open to thoughtful collaborations, client work, and conversations about
          faith-informed software.
        </p>

        <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-5">
            <img
              src="/images/headshot.png"
              alt="Jason A Savage"
              className="headshot h-20 w-20 object-cover md:h-24 md:w-24"
            />
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                Jason A Savage
              </p>
              <p className="mt-1 text-sm text-gray-400">Savage Webmancer</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-base text-gray-300 sm:items-end">
            <a href="mailto:thesavage42@icloud.com" className="text-link">
              thesavage42@icloud.com
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Kansas"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-link"
            >
              Kansas, USA
            </a>
          </div>
        </div>

        <p className="mt-16 font-display text-sm tracking-wide text-gray-600">
          TheSavageDev
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
