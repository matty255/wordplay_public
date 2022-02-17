import React, {useCallback, useEffect} from "react";
import tw from "tailwind-styled-components"
import { useNavigate } from "react-router-dom";
import { addWordFB } from '../../redux/modules/word';
import { useDispatch } from "react-redux";

const Inputs = tw.div`
    flex flex-col
    bg-yellow-200 p-10
    rounded-md w-full md:w-2/3 m-auto
`
const Btn = tw.button`
    bg-yellow-400
    rounded-md hover:scale-105
    p-4 m-2 mt-2 text-lg md:text-2xl
`

const Making = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const word = React.useRef(null);
  const desc = React.useRef(null);
  const use = React.useRef(null);

  const scrolling = useCallback(e => {
    use.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }, [])

  useEffect(() => {
    scrolling();
  }, [scrolling])

  const addWord = () => {
  
    dispatch(addWordFB({ word: word.current.value, desc: desc.current.value, use: use.current.value}));
    navigate("/main")
    };
  return (
    <div>
    <Inputs> 
    <h1 className={"text-xl md:text-3xl mb-10"}>나만의 단어를 추가해보자!</h1>
    <h2 className={"p-2 text-left"}>단어</h2> <input type="text" ref={word} className={"w-full h-12 p-4"} />
    <h2 className={"p-2 text-left"}>뜻</h2> <input type="text" ref={desc} className={"w-full h-24 p-4"} />
    
    <h2 className={"p-2 text-left"}>용례</h2> <input type="text" ref={use} className={"w-full h-24 p-4"} />

    <div className={"flex flex-row justify-between md:justify-evenly mt-2"}>
      <Btn onClick={() => {navigate(-1)}}>돌아가기</Btn>
      <Btn onClick={addWord}>등록하기</Btn>
    </div>
    </Inputs>
 
  </div>
  )
  
};

export default Making;