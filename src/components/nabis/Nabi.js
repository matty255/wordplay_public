import React, {useCallback, useEffect} from "react";
import tw from "tailwind-styled-components"
import {Link} from "react-router-dom";


const Head = tw.div`
    w-full bg-yellow-900 text-white text-6xl
    p-4 fixed font-sanss z-10
`
const Nabis = tw.ul`
    w-full bg-yellow-400 text-white text-lg md:text-3xl 
    flex flex-row justify-center motion-safe:animate-pulse z-5
`
const L = tw.div`
    m-4 rounded-md hover:motion-safe:scale-125
`
const Bck = tw.div`
  block pt-20 md:pt-24
`


const Nabi = (props) => {
  const uses = React.useRef(null);
  const scrolling = useCallback(e => {
    uses.current.scrollIntoView({ alignToTop : true });
}, [])

useEffect(() => {
  scrolling();
}, [scrolling])

  return <div ref={uses}>        
  <Head>Wordplay</Head>
  <Bck>
    <Nabis>
      <L><Link to="/">HOME</Link></L>
      <L><Link to="/main"> 사전 구경하기</Link></L>
      <L><Link to="/making"> 사전 만들러가기</Link></L>
    </Nabis>
    </Bck>
    
  </div>
  
};

export default Nabi;