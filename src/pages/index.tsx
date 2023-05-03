import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from 'next/image';
import deved from "../../public/dev-ed-wave.png";
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  // const {locale, locales, push} = useRouter()
  // const handleClick = l => () => {
  //   push('/', undefined, { locale: l })
  // }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Project R</title>
        <meta name="description" content=""></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>{locale}</h1>

      <div>
        {locales.map(l => (
          <button key={l} onClick={handleClick(l)}>
            {l}
          </button>
        ))}
      </div> */}

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">project_r</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl dark:text-yellow-300"
                />
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r 
                            from-cyan-500 
                            to-teal-500 
                            text-white 
                            px-4 
                            py-2 
                            rounded-md 
                            ml-8" 
                  href="#">
                    Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Lucas Grechi Leme
            </h2>
            <h3 className="text-2xl dark:text-gray-50 py-2 md:text-3xl">
              Developer
            </h3>
            <p className="text-md py-5 leading-8 dark:text-gray-200 text-gray-800 md:text-xl max-w-xl mx-auto">
              Just a dude
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 dark:text-gray-300 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} fill style={{ objectFit: "cover" }} alt={'123'}/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-50">Services I offer</h3>
            <p className="text-md py-2 leading-8 dark:text-gray-200 text-gray-800"> 
              Dude <span className="text-teal-500"> stuff </span>
            </p>
            <p className='dark:text-gray-200'>
              Mode dude stuff
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 relative w-full">
              <Image style={{marginLeft:'auto', marginRight:'auto'}} width={100} height={100} src={design} alt={''} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-50">Designs</h3>
              <p className="py-2 dark:text-gray-200">
                Designs and shit
              </p>
              <h4 className="py-4 text-teal-600">Designs tools</h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Illustrator</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Figna</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 relative w-full">
              <Image style={{marginLeft:'auto', marginRight:'auto'}} width={100} height={100} src={code} alt={''} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-50">Code</h3>
              <p className="py-2 dark:text-gray-200">
                Codes and shit
              </p>
              <h4 className="py-4 text-teal-600">Designs tools</h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Illustrator</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Figna</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 relative w-full">
              <Image style={{marginLeft:'auto', marginRight:'auto'}} width={100} height={100} src={consulting} alt={''} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-50">Consulting</h3>
              <p className="py-2 dark:text-gray-200">
                Consulting and shit
              </p>
              <h4 className="py-4 text-teal-600">Designs tools</h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Illustrator</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Figna</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-50'>Portifolio</h3>
            <p className="text-md py-2 leading-8 dark:text-gray-200 text-gray-800"> 
              Dude <span className="text-teal-500"> stuff </span>
            </p>
            <p className='dark:text-gray-200'>
              Mode dude stuff
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 md:flex-row md:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={web1} 
                className='rounded-lg object-cover'
                // layout='responsive'
                alt={''} 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={web2} 
                className='rounded-lg object-cover'
                // layout='responsive'
                alt={''} 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={web3} 
                className='rounded-lg object-cover'
                // layout='responsive'
                alt={''} 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={web4} 
                className='rounded-lg object-cover'
                // layout='responsive'
                alt={''} 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={web5} 
                className='rounded-lg object-cover'
                // layout='responsive'
                alt={''} 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={web6} 
                className='rounded-lg object-cover'
                // layout='responsive'
                alt={''} 
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
