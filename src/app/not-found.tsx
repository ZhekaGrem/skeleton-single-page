import Link from 'next/link';
const NotFound = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto flex min-h-screen items-center px-6 py-12">
          <div className="mx-auto flex max-w-sm flex-col items-center text-center">
            <p className="rounded-full bg-blue-50 p-3 text-sm font-medium text-blue-500 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              The page you are looking for doesn't exist. Here are some helpful links:
            </p>

            <div className="mt-6 flex w-full shrink-0 justify-center gap-x-3 sm:w-auto">
              <Link href="/">
                <button className="w-full shrink-0 rounded-lg bg-blue-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-500">
                  Take me home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NotFound;
