import React from "react";
import ButtonStart from "./ButtonStart"
import Penguin from "../../penguins.jpg";


const Start = (props) => {
  return (
    <div>
      <h1 className={"text-3xl m-4"}>리액트 Lv.1 나만의 단어장</h1>
      <ButtonStart />
      <p className={"mt-8 text-lg md:text-xl m-3"}>재미있는 단어들을 추가해보세요! 수정/삭제기능도 완성! 반응형 웹 완벽 적용! 신나는 Wordplay!</p>
      <p className={"text-lg md:text-xl m-3"}>이름을 보고 받은 그 느낌이 맞습니다 제이슨 므라즈의 wordplay를 따 지은 이름이에요! 코드 정리까지 끝!</p>
      <img src={Penguin} className={"m-auto rounded-sm"} alt='React' />
      <p className={"text-lg md:text-xl m-3"}>펭귄도 보고가세요 🐧!</p>
    </div>
  );
};

export default Start;