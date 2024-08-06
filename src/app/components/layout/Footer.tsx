'use client';
import Image from 'next/image';

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Company</h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Help center
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Download</h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 md:flex md:items-center md:justify-between dark:bg-gray-700">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-300">
          © {date} <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
        <div className="mt-4 flex space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Image width={32} height={32} className="h-4 w-4" alt="" src="/svg/facebook.svg" />
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Image width={32} height={32} className="h-4 w-4" alt="" src="/svg/discord.svg" />
            <span className="sr-only">Discord community</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Image width={32} height={32} className="h-4 w-4" alt="" src="/svg/X.svg" />
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Image width={32} height={32} className="h-4 w-4" alt="" src="/svg/telegram.svg" />
            <span className="sr-only">Telegram account</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="inFstagram"
            title="instagram"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Image width={32} height={32} className="h-4 w-4" alt="" src="/svg/instagram.svg" />
            <span className="sr-only">instagram account</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
