import Navbar from './navbar';
import Footer from './footer';
 
export default function Layout(props:any) {
  return (
    <>
      <main className='space-y-2'>
        <Navbar title={props.title} />
          <div>{props.children}</div>
        <Footer />
      </main>
    </>
  );
}