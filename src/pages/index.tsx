import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineDownCircle,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/me.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useIntl, FormattedMessage } from "react-intl";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { title } from "process";
// import { Resume } from "./pdf/resume";
import Link from 'next/link';
import PdfLink from '../components/PdfLink';
import 'aos/dist/aos.css';
// import { Alert } from 'reactstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Particles from "@/components/Particles";



export default function Home() {

  const email = "grechilemelucas@gmail.com";

  const copyemail = () => {
    navigator.clipboard.writeText(email)
  }

  const [darkMode, setDarkMode] = useState(false);

  // const { locales } = useRouter();

  const t = useTranslations('Index');

  const [showPDF, setShowPDF] = useState(false);
  const handleButtonClick = () => {
    setShowPDF(true);
  };

  useEffect(() => {
    const data = window.localStorage.getItem('DARK_MODE');
    console.log(data);
    console.log('data');
    if (data !== null) setDarkMode(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('DARK_MODE', JSON.stringify(darkMode));
    // console.log('darkMode', darkMode)
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio Lucas</title>
        <meta name="description" content=""></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-auto bg-stone-200 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="z-10 text-xl font-burtons dark:text-gray-50">{t('title')}</h1>
            <ul className="z-10 items-center lg:flex md:flex">
              <li>
                <a className="bg-gradient-to-r from-teal-500 to-[#00C5C5] text-white px-4 py-2 rounded-l-md ml-8 hover:animate-gradient-x" href="/en">
                  English
                </a>
                <a className="bg-gradient-to-r from-[#00C5C5] to-cyan-500 text-white px-4 py-2 rounded-r-md hover:animate-gradient-x" href="/br">
                  Português
                </a>
              </li>
              <br></br>
              <ul className="flex items-center justify-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-yellow-300 ml-8 hover:animate-pulse"
                  />
                </li>
                <li>
                  <div className="text-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:animate-[spin_2s]">
                    <Link href={"/pdf/Resume - Lucas Grechi Leme.pdf"} target="_blank">
                    Resume
                    </Link>
                  </div>
                </li>
              </ul>
            </ul>
          </nav>
          <div className="z-10 text-center p-10 animate-pulse">
            <h1 className="dark:text-gray-50 font-medium">Scroll down</h1>
          </div>
          <div className="z-10 animate-bounce flex justify-center text-4xl dark:text-gray-300 text-gray-600">
            <AiOutlineDownCircle />
          </div>
          <div data-aos="fade-up" className="z-10 text-center p-10">
            <h2 className="z-10 text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Lucas Grechi Leme
            </h2>
            <h3 className="text-2xl dark:text-gray-50 py-2 md:text-3xl">
              {t('job')}
            </h3>
            <p className="text-md py-5 leading-8 dark:text-gray-200 text-gray-800 md:text-xl max-w-xl mx-auto">
              {t('my_desc')}
            </p>
          </div>
          <div data-aos="fade-up" className="z-10 text-5xl flex justify-center gap-16 py-3 dark:text-gray-300 text-gray-600">
            <a href="https://github.com/Grechileme" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/lucas-grechi-leme" target="_blank">
              <AiFillLinkedin />
            </a>
            <Popup trigger={<a> <AiOutlineMail /> </a>} position={"left center"} >
              <div className="text-sm">
                <b>grechilemelucas@gmail.com</b>
                <br></br>
                Copy e-mail to clickboard?
              </div>
              <button className="bg-gray-400 px-2 py-1 rounded-md active:bg-gray-600 justify-center" onClick={copyemail} >
                  Copy
              </button>
            </Popup>
          </div>
          <div data-aos="zoom-out" className="z-10 relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={deved}
              fill
              style={{ objectFit: "cover" }}
              alt={"Me"}
            />
          </div>
        </section>

        <section>
          <div data-aos="fade-up" className="z-10">
            <h3 className="text-3xl py-1 dark:text-gray-50">
              {t('serv_tit')}
            </h3>
            <p className="text-md py-2 leading-8 dark:text-gray-200 text-gray-800">
              {t('serv_desc_1')}
            </p>
            <p className="dark:text-gray-200">{t('serv_desc_2')}</p>
          </div>
          <div className="lg:flex gap-10">
            <div data-aos="flip-left" className="z-10 text-center shadow-lg p-10 rounded-xl my-10 relative w-full">
              <Image
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width={100}
                height={100}
                src={design}
                alt={""}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-50">
                Front-end
              </h3>
              <p className="py-2 dark:text-gray-200">HTML</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">CSS</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">React</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">
                Next.js
              </p>
              {/* <p className="text-gray-800 dark:text-gray-200 py-1">{t('design_5')}</p> */}
            </div>
            <div data-aos="flip-up" className="z-10 text-center shadow-lg p-10 rounded-xl my-10 relative w-full">
              <Image
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width={100}
                height={100}
                src={code}
                alt={""}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-50">
                Back-end
              </h3>
              <p className="py-2 dark:text-gray-200">PHP</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Java</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">JavaScript</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">C</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">C#</p>
            </div>
            <div data-aos="flip-right" className="z-10 text-center shadow-lg p-10 rounded-xl my-10 relative w-full">
              <Image
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width={100}
                height={100}
                src={consulting}
                alt={""}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-50">
                Database
              </h3>
              <p className="py-2 dark:text-gray-200">SQL</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">MySQL</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">PostgreSQL</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Firebird</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            {/* <h3 className="text-3xl py-1 dark:text-gray-50">{t('port_tit')}</h3>
            <p className="text-md py-2 leading-8 dark:text-gray-200 text-gray-800">
              {t('port_1')}
            </p> */}
            {/* <p className="dark:text-gray-200">{t('port_2')}</p> */}
          </div>
          <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
            <div className="basis-1/3 flex-1">
              {/* <Image
                src={web1}
                className="rounded-lg object-cover"
                // layout='responsive'
                alt={""}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                src={web2}
                className="rounded-lg object-cover"
                // layout='responsive'
                alt={""}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                src={web3}
                className="rounded-lg object-cover"
                // layout='responsive'
                alt={""}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                src={web4}
                className="rounded-lg object-cover"
                // layout='responsive'
                alt={""}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                src={web5}
                className="rounded-lg object-cover"
                // layout='responsive'
                alt={""}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                src={web6}
                className="rounded-lg object-cover"
                // layout='responsive'
                alt={""}
              /> */}
            </div>
          </div>
        </section>
      </main>
      <Particles darkmode={darkMode}/>
    </div>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  console.log(locale);
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}