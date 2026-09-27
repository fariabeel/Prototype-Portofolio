import './App.css'
import DVGImg from "./assets/DevilGun.jfif"
import javascript from "./assets/JavaScript.svg"
import html from "./assets/HTML5.svg"
import css from "./assets/CSS3.svg"
import react from "./assets/react.svg"
import tailwindcss from "./assets/Tailwind CSS.svg"
import { useEffect, useRef, useState } from 'react'

function App() {
  const [scrollVal, setScrollVal] = useState(0)
  const [shadow, setShadow] = useState(false)
  const [techTitle,setTechTitle] = useState(false)
  const animation = useRef(0)
  const container = useRef(null)
  const [intersect, setIntersect] = useState(false)

  useEffect(() => {
    const elem = container.current
    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIntersect(entry.isIntersecting)
        if (entry.isIntersecting) {
          console.log("intersected")
          setIntersect(true)
          animation.current = setTimeout(() => {
            setTimeout(() => {setShadow(true)},500)
            setTimeout(() => {setTechTitle(true)},1200)
          })
        } else {
          setIntersect(false)
          setShadow(false)
          setTechTitle(false)
          clearTimeout(animation.current)
        }
      })
    }, {threshold:0.99})
    if (elem) {cardObserver.observe(elem)}
    return () => cardObserver.unobserve(elem)
  },[])

  useEffect(() => {
    function HandleScroll() {
      setScrollVal(scrollY)
      console.log(scrollY)
    }
    window.addEventListener("scroll",HandleScroll)
    return () => {window.removeEventListener("scroll",HandleScroll)}
  },[])
  return (
    <>
    <div className={`manrope h-170 flex justify-center items-center text-center p-20 text-2xl fixed z-0 transition-all duration-1000 ${((scrollVal>1000)&&(scrollVal<2700)||(scrollVal>4400))&&"text-white"} ${((scrollVal>2700)&&(scrollVal<4400))&&"text-black bg-white"} ${scrollVal>6100&&"opacity-0"}`}>
      Di balik layar hitam dan baris kode, saya adalah seorang Front-End Developer yang melihat web sebagai kanvas untuk berekspresi. Menggunakan React dan Tailwind 
      CSS, fokus utama saya adalah membangun antarmuka yang tidak hanya fungsional, tetapi juga memiliki karakter visual yang berani dan tegas. Saya percaya bahwa 
      pengembangan web terbaik lahir dari keberanian untuk mengeksplorasi tata letak, mengeksekusi ide secara langsung, dan menembus batasan desain konvensional 
      demi menciptakan pengalaman digital yang membekas.
    </div>
<header className={`hero relative z-10 flex h-170 bg-black transition-all ${(scrollVal>=1)&&"opacity-0"}`}>
        <div className="heroLogo mb-20 flex justify-center basis-full items-center">
          <img src={DVGImg} alt="MyProfile" className="heroImg size-20 rounded-full mr-1 "/>
        <div className="text-white text-5xl">DevilGun</div>
      </div>
      <pre className="sideText text-stone-900 absolute left-0 ml-2 top-0">
        f<br/>r<br/>n<br/>o<br/>t<br/>e<br/>n<br/>d<br/>f<br/>r<br/>o<br/>n<br/>t<br/>e<br/>
        n<br/>d<br/>f<br/>r<br/>o<br/>n<br/>t<br/>e<br/>n<br/>d<br/>f<br/>r<br/>o<br/>
      </pre>
      <pre className="sideText text-stone-900 absolute right-0 mr-2 top-0">
        d<br/>e<br/>v<br/>e<br/>l<br/>o<br/>p<br/>e<br/>r<br/>d<br/>e<br/>v<br/>e<br/>l<br/>
        o<br/>p<br/>e<br/>r<br/>d<br/>e<br/>v<br/>e<br/>l<br/>o<br/>p<br/>e<br/>r<br/>  
      </pre>
    </header>

    <div ref={container} className={`relative z-10 profile bg-black h-163 flex justify-center flex-wrap text-white content-center gap-10 martian-mono mt-1800 transition-all ${scrollVal>=7881?"opacity-100":"opacity-0"}`}>
      <h1 className={`text-3xl relative z-0 duration-500 ${techTitle?"":"translate-y-20 opacity-0"}`}>teknologi yang saya kuasai</h1>
      <div id="technology" className="w-full relative z-10">
        <div className="flex justify-center space-x-2 space-y-2 
        *:p-5 
        *:flex 
        *:flex-col 
        *:items-center
        *:justify-center
        *:bg-zinc-950
        *:rounded-4xl
        *:size-40
        *:shadow-red-600
        *:hover:bg-zinc-900
        *:hover:-translate-y-2
        *:hover:shadow-[0_0_50px]
        *:transition-all
        *:duration-500">
          <div id="html-card" className={`${ shadow && "shadow-[-5px_-5px_10px] duration-500!"} ${!intersect&&"-translate-20"}`}>
          <img src={html} alt="html" id="html" className="size-15" />
          <p>html</p>
        </div>
        <div id="css" className={`${shadow && "shadow-[0_-5px_10px] duration-500!"} ${!intersect&&"-translate-y-20"}`}>
          <img src={css} alt="css" id="css" className="size-15" />
          <p>css</p>
        </div>
        <div id="javascript" className={`${shadow && "shadow-[5px_-5px_10px] duration-500!"} ${!intersect&&"translate-x-20 -translate-y-20"}`}>
          <img src={javascript} alt="javascript" id="javascript" className="size-15" />
          <p>javascript</p>
        </div>
        </div>
        <div className="flex justify-center space-x-2 space-y-2 
        *:p-5
        *:flex
        *:flex-col
        *:items-center
        *:justify-center
        *:bg-zinc-950
        *:rounded-4xl
        *:size-40
        *:shadow-red-600
        *:hover:bg-zinc-900
        *:hover:-translate-y-2
        *:hover:shadow-[0_0_50px]
        *:transition-all
        *:duration-500">
          <div id="tailwindcss" className={`${shadow && "shadow-[-5px_5px_10px] duration-500!"} ${!intersect&&"-translate-x-20 translate-y-20"}`}>
          <img src={tailwindcss} alt="tailwindcss" id="tailwindcss" className="size-15" />
          <p>tailwindcss</p>
        </div>
        <div id="react" className={`${shadow && "shadow-[5px_5px_10px] duration-500!"} ${!intersect&&"translate-20"}`}>
          <img src={react} alt="react" id="react" className="size-15" />
          <p>react</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App