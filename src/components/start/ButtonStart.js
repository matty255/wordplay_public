import React from "react";
import tw from "tailwind-styled-components"

const Btn = tw.button`
    m-auto p-2
    bg-yellow-300 transform translate-x-2
    rounded-md hover:scale-125
`

const ButtonStart = (props) => {

  return (
    <div>
      <Btn onClick={() => window.open('https://github.com/matty255/wordplay_public', '_blank')}>
        깃허브 구경하러 가기</Btn>
    </div>
  );
};

export default ButtonStart;