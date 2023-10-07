import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className='pt-28 flex flex-col justify-center bg-gray-100'>
            <div className='bg-blue-300 w-screen p-24'>
                <h1 className='font-subFont text-center text-7xl'>About Us</h1>
            </div>
            <div className='px-10 flex flex-col items-center gap-7 ml-2 '>
                <div className='flex flex-col justify-center content-center items-center w-full lg:w-[70%]'>

                    <Link
                    className="btn-addToCart text-2xl"
                    to='/contact'
                    > Contact Us </Link>
                </div>

                <hr className='border-b border-black w-[70%] m-auto h-[1px]' />

                <div className='flex flex-col gap-10 max-w-7xl'>
                    

                    <div className='container-about'>
                        <h2 className='subtitle-about'>Source Code: </h2>
                        <a
                            className='text-blue-500 underline hover:text-purple-500 lg:text-lg'
                            href='https://github.com/subi03/ShopHeaven'
                        >
                            Shop Heaven
                        </a>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}
