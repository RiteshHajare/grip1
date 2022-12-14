import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from "react-icons/io";


export default function Home() {


  const handleClk = async () => {
    const header = document.querySelector('.myheader');
    const nav = document.querySelector('.mynav');
    if (header && nav) {
      nav.classList.toggle("hide");
      header.classList.toggle("activee");
      nav.classList.toggle("activee");
    }
  }




  return (
    <div >
      <Head>
        <title>Banking Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/my_logo.jpeg" />
      </Head>


      <header className='myheader '>
        <nav className='mynav hide' >
          <h2>Public Bank</h2>

          <ul className="right">
            <li><a className='navlink a1' href="#">Home</a></li>
            <li><a className='navlink a2' href="#">About</a></li>
            <li><a className='navlink a3' href="#">contacts</a></li>
          </ul>

        </nav>
        <div onClick={handleClk} className="mobile-navbar-btn">
          <AiOutlineMenu className='openIcon' />
          <IoMdClose className='closeIcon' />
        </div>
      </header>

      <div className="body">
        <a className='usersbtn' href="/users">View Users</a>
      </div>



    </div>
  )
}
