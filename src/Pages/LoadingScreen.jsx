import ReactLoading from 'react-loading';

export default function LoadingScreen() {

  return (
    <section className='flex w-screen h-screen justify-center items-center'>
        <ReactLoading type="bars" color="#8E7CE8"
            height={200} width={100} />
    </section>
  )
}
