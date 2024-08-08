import React from 'react';
import { Footer } from 'flowbite-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

export default function FooterComp() {
  return (
    <Footer container className='border border-t-2 rounded-none border-teal-400 justify-center'>
      <div className='w-full max-w7xl mx-auto'>
        <div className='grid grid-cols-2 gap-12 mt-4 '>
          <div className='mx-auto'>
            <Footer.Title title='Sobre el proyecto' />
            <Footer.LinkGroup col>
              <Footer.Link href='https://github.com/gmilena/mern--blog' target='_blank' rel='noopener noreferrer'>
                Repositorio Git-hub
              </Footer.Link>
              <Footer.Link href='/about'>Blog - Demo</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className='mx-auto'>
            <Footer.Title title='Sobre mí' />
            <Footer.LinkGroup col>
              <Footer.Link href='https://github.com/gmilena/' target='_blank' rel='noopener noreferrer'>
                Github
              </Footer.Link>
              <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                Portfolio
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full md:flex-col flex justify-around'>
          <div className='justify-center'>
            <Footer.Copyright href='#' by='Milena Genez - Blog MERN demo' year={new Date().getFullYear()} />
          </div>
          <div className='flex gap-6 sm:mt-2 sm:justify-center'>
            <Footer.Icon href='https://github.com/gmilena' target='_blank' icon={BsGithub} />
            <Footer.Icon href='https://www.linkedin.com/in/milenagenez/' target='_blank' icon={BsLinkedin} />
            <Footer.Icon href='mailto:milenagenez@gmail.com' target='_blank' icon={IoMdMail} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
