import React from "react";
import tw from "tailwind-styled-components"
import { useDispatch, useSelector} from "react-redux";
import { deleteWordFB } from '../../redux/modules/word';
import { useNavigate } from 'react-router-dom';


const Di = tw.ul`
    bg-yellow-300
    rounded-md hover:scale-105 translate-x-1
    p-4 m-2 shadow-md
`
const Btn = tw.button`
bg-yellow-400 p-1 px-3 mt-3 m-2 border-2 border-white
border-dashed rounded-md shadow-inner hover:scale-110 text-gray-600
`

const CardMain = () => {


const dispatch = useDispatch();
let navigate = useNavigate();
const a = useSelector((state) => state.word.list);


    return (
        <div>
            { a && a.map((list, index) => {
                return (<div key={index}>
                    <Di> 
                    <li className={"rounded-md text-4xl p-4"}>{list.word}</li>
                    <li>{list.desc}</li>
                    <li className={"text-blue-400"}>{list.use}</li>

                    <Btn onClick={() => { navigate("/detail/"+ index) 
                                        }}>상세보기</Btn>

                    <Btn className={"hover:text-red-500"} onClick={() => {
                        dispatch(deleteWordFB(list.id))
                    }}><span >삭제하기</span></Btn>

                    </Di>
                    </div>);
            })
        }

        </div>
    );
}

export default CardMain;

