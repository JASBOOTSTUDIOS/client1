import Head from "next/head";
import Image from "next/image";
import "../styles/css/bootstrap-reboot.min.css"
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link rel="icon" href="/Jasboot.ico" />
      </Head>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth">
          <div className="container-fluid"> 
            <a className="navbar-brand" href="https://youtu.be/HsJCSQHCf2c?si=J3GOZ9E4KBcpDI16" target="_blank">Music Studio</a>
          </div>
        </nav>
        <main className="">
        
        </main>
        <footer className="">
          
        </footer>
      </div>
    </>
  );
}
