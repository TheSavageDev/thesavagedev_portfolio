const HomeFooter = () => {
  return (
    <footer className="w-full bg-gray-900 text-white flex flex-col">
      <section className="relative mt-16 bg-yellow">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-yellow"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <section className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <article className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-5">
            <section className="md:max-w-md lg:col-span-2 rounded-xl w-full p-8 sm:flex sm:space-x-6 text-gray-100">
              <aside className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <img
                  src="/images/headshot.png"
                  alt=""
                  className="object-cover object-center w-full h-full rounded-xl"
                />
              </aside>
              <article className="flex flex-col space-y-4">
                <header>
                  <h2 className="text-2xl font-semibold">Jason A Savage</h2>
                  <span className="text-sm text-gray-400">
                    Savage Webmancer
                  </span>
                </header>
                <article className="space-y-1">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-label="Email address"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                      ></path>
                    </svg>
                    <a href="mailto:jason@thesavage.dev" className="text-white">
                      jason@thesavage.dev
                    </a>
                  </span>
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-label="Location Pin"
                      className="w-4 h-4"
                      fill="#fff"
                    >
                      <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                      <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                    </svg>

                    <a
                      href="https://en.wikipedia.org/wiki/Kansas"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-white"
                    >
                      Kansas, USA
                    </a>
                  </span>
                </article>
              </article>
            </section>
            <section className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-3 md:grid-cols-3">
              <article>
                <p className="font-bold tracking-wide text-brick">Projects</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-300 hover:text-brick"
                    >
                      Trendy Savages
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-300 hover:text-brick"
                    >
                      OrthoAthletic
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-300 hover:text-brick"
                    >
                      Foldaway Tailer Company
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <p className="font-bold tracking-wide text-brick">Services</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-300 hover:text-brick"
                    >
                      Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-300 hover:text-brick"
                    >
                      Develop
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-300 hover:text-brick"
                    >
                      WordPress, Shopify, Gatsby
                    </a>
                  </li>
                </ul>
              </article>
            </section>
          </article>
          <article className="flex flex-col justify-between pt-5 pb-10 border-t-2 border-primary sm:flex-row">
            <small className="text-sm text-gray-100">
              &copy; The Savage Dev 2021. Made with NextJS and TailwindCSS
            </small>
          </article>
        </section>
      </section>
    </footer>
  );
};

export default HomeFooter;
