import React, {useCallback, useState, useEffect} from "react";
import tw from "tailwind-styled-components"
import { useNavigate } from "react-router-dom";

import { reDoWordFB } from '../../redux/modules/word';
import { useDispatch } from "react-redux";

const Inputs = tw.div`
    flex flex-col
    bg-yellow-200 p-10
    rounded-md w-full m-auto
`
const Btn = tw.button`
    bg-yellow-400
    rounded-md hover:scale-105
    p-4 m-2 mt-2 text-sm lg:text-xl
`



const Editing = (props) => {

  const [word_value, set_wordValue] = useState(props.word);
  const [desc_value, set_descValue] = useState(props.desc);
  const [use_value, set_useValue] = useState(props.use);

  const word_onChange = useCallback(e => {
    set_wordValue(props.word);
    set_wordValue(e.target.value)
  }, [props.word]);

  const desc_onChange = useCallback(e => {
    set_descValue(props.desc);
    set_descValue(e.target.value)
  }, [props.desc]);

  const use_onChange = useCallback(e => {
    set_useValue(props.use);
    set_useValue(e.target.value)
  }, [props.use]);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const word = React.useRef(null);
  const desc = React.useRef(null);
  const use = React.useRef(null);

  const scrolling = useCallback(e => {
    use.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }, [])

  const addWord = () => {
    const a = { word: word.current.value, desc: desc.current.value, use: use.current.value }
    dispatch(reDoWordFB(a, props.id));
    navigate("/main")
    };
  
    useEffect(() => {
      scrolling();
    }, [scrolling])


  return (

    <div>
    <Inputs> 
    <h1 className={"text-xl md:text-3xl mb-10"}>수정할 수 있어!!</h1>
    <h2 className={"p-2 text-left font-bold"}>{props.word} Edit</h2> 

   <h2 className={"p-2 text-left"}>단어</h2> <input type="text" ref={word} className={"w-full h-12 p-4"} placeholder={props.word} value={word_value} onChange={word_onChange} />

  <h2 className={"p-2 text-left"}>뜻</h2> <input type="text" ref={desc} className={"w-full h-24 p-4"} placeholder={props.desc} value={desc_value} onChange={desc_onChange} />

  <h2 className={"p-2 text-left"}>용례</h2> <input type="text" ref={use} className={"w-full h-24 p-4"} placeholder={props.use} value={use_value} onChange={use_onChange} />
 

    <div className={"flex flex-row justify-between md:justify-evenly mt-2"}>
      <Btn onClick={() => {navigate(-1)}}>돌아갈래</Btn>
      <Btn onClick={addWord}>수정하기</Btn>
    </div>
    </Inputs>

    
    
  </div>
  )
  
};

export default Editing;