import './App.css'
import DVGImg from "./assets/DevilGun.jfif"
import javascript from "./assets/JavaScript.svg"
import html from "./assets/HTML5.svg"
import css from "./assets/CSS3.svg"
import react from "./assets/react.svg"
import tailwindcss from "./assets/Tailwind CSS.svg"

function App() {
  return (
    <>
<header className="hero flex h-170 bg-black">
        <div className="heroLogo mb-20 flex justify-center basis-full items-center">
          <img src={DVGImg} alt="MyProfile" className="heroImg size-20 rounded-full mr-1"/>
        <div className="heroText text-white text-5xl">DevilGun</div>
      </div>
      <pre className="sideText text-white absolute left-0 ml-2 top-0">
        f<br/>
        r<br/>
        o<br/>
        n<br/>
        t<br/>
        e<br/>
        n<br/>
        d<br/>
        f<br/>
        r<br/>
        o<br/>
        n<br/>
        t<br/>
        e<br/>
        n<br/>
        d<br/>
        f<br/>
        r<br/>
        o<br/>
        n<br/>
        t<br/>
        e<br/>
        n<br/>
        d<br/>
        f<br/>
        r<br/>
        o<br/>
      </pre>
      <pre className="sideText text-white absolute right-0 mr-2 top-0">
        d<br/>
        e<br/>
        v<br/>
        e<br/>
        l<br/>
        o<br/>
        p<br/>
        e<br/>
        r<br/>
        d<br/>
        e<br/>
        v<br/>
        e<br/>
        l<br/>
        o<br/>
        p<br/>
        e<br/>
        r<br/>
        d<br/>
        e<br/>
        v<br/>
        e<br/>
        l<br/>
        o<br/>
        p<br/>
        e<br/>
        r<br/>  
      </pre>
    </header>

    <div className="introduction h-170 flex justify-center items-center text-center p-20 text-2xl">
      Di balik layar hitam dan baris kode, saya adalah seorang Front-End Developer yang melihat web sebagai kanvas untuk berekspresi. Menggunakan React dan Tailwind 
      CSS, fokus utama saya adalah membangun antarmuka yang tidak hanya fungsional, tetapi juga memiliki karakter visual yang berani dan tegas. Saya percaya bahwa 
      pengembangan web terbaik lahir dari keberanian untuk mengeksplorasi tata letak, mengeksekusi ide secara langsung, dan menembus batasan desain konvensional 
      demi menciptakan pengalaman digital yang membekas.
    </div>

    <div className="profile bg-black h-163 flex justify-center flex-wrap text-white content-center gap-5 martian-mono">
      <h1 className="text-3xl">teknologi yang saya kuasai</h1>
      <div id="technology" className="w-full">
        <div className="flex justify-center [&>:nth-child(n)]:p-5">
          <div id="html" className="flex flex-col items-center justify-center">
          <img src={html} alt="html" id="html" className="size-25" />
          <p>html</p>
        </div>
        <div id="css" className="flex flex-col items-center justify-center">
          <img src={css} alt="css" id="css" className="size-25" />
          <p>css</p>
        </div>
        <div id="javascript" className="flex flex-col items-center justify-center">
          <img src={javascript} alt="javascript" id="javascript" className="size-25" />
          <p>javascript</p>
        </div>
        </div>
        <div className="flex justify-center [&>:nth-child(n)]:p-5">
          <div id="tailwindcss" className="flex flex-col items-center justify-center">
          <img src={tailwindcss} alt="tailwindcss" id="tailwindcss" className="size-25" />
          <p>tailwindcss</p>
        </div>
        <div id="react" className="flex flex-col items-center justify-center">
          <img src={react} alt="react" id="react" className="size-25" />
          <p>react</p>
        </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App