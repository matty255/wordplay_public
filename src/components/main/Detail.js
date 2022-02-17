import React, {useState} from "react";
import tw from "tailwind-styled-components"
import Editing from '../making/Editing';

import { useLocation } from "react-router-dom";
import { deleteWordFB } from '../../redux/modules/word';
import { useSelector, useDispatch } from "react-redux";

const Detail = (props) => {

  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const word_idx = location.pathname.split('/')[2]

  const itsid = useSelector((state) => state.word.list[word_idx]?.id);
  const itsword = useSelector((state) => state.word.list[word_idx]?.word);
  const itsdesc = useSelector((state) => state.word.list[word_idx]?.desc);
  const itsuse = useSelector((state) => state.word.list[word_idx]?.use); 

  const Di = tw.div`
  bg-yellow-300
  rounded-md translate-x-1
  p-4 shadow-md mt-10 w-5/6 md:w-2/3 flex flex-col
`
  const Container = tw.div`
  flex justify-center items-center
  `

  const Title = tw.h1`
    text-4xl lg:text-7xl md:mt-4
  `
  const Sp = tw.p`
    text-gray-800 pt-5
    text-xl lg:text-3xl
  `
  const Mean = tw.p`
  text-gray-800 pt-1
  text-2xl lg:text-6xl
`
  const Btn = tw.button`
    bg-yellow-400 p-2 px-3 mt-3 m-2 border-2 border-white text-gray-400 hover:text-red-600
    border-dashed rounded-md shadow-inner hover:scale-110 lg:text-4xl
    `
  return (

<Container>
  <Di>
  <Title> {itsword} </Title>
    <Sp>뜻</Sp>
      <Mean> {itsdesc} </Mean> 
      <Sp>용례</Sp>
      <Mean> <span className={"text-blue-500"}>{itsuse}</span> </Mean>
      <div className={"flex flex-row items-center justify-between md:justify-evenly p-3 mt-10 "}>
      <Btn onClick={() => { setVisible(!visible);}}>{visible? "수정중" : "수정하기"}</Btn>
        
      <Btn onClick={() => {
      dispatch(deleteWordFB(itsid))
      }}>삭제하기</Btn>    
      </div>
      {visible && <Editing id={itsid} word={itsword} desc={itsdesc} use={itsuse} />}    
                                  
    </Di>
</Container>
  )};

export default Detail;