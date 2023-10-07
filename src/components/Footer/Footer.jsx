import LinkFooter from './components/LinkFooter';
import PrivacyFooter from './components/PrivacyFooter';
import GoToTopBtn from './components/GoToTopBtn';

export default function Footer() {
  return (
    <>
        <GoToTopBtn />
        <div className='py-6 w-full md:flex md:justify-around md:items-center'>
            <LinkFooter />
            <PrivacyFooter />
        </div>
        <p className='text-center py-3 mt-4 text-[15px] w-full bg-black text-white'>
          Made by Subiksha S
        </p>
    </>
  )
}
