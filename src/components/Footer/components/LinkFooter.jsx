import { Link } from 'react-router-dom';

export default function LinkFooter() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-full'>
       <Link to='/home'>
            <h1 className='font-subFont text-xl text-center'>Shop Heaven </h1>
        </Link>
    </div>
  )
}
