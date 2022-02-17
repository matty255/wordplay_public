import React from "react";
import tw from "tailwind-styled-components"
import {Eco} from "@material-ui/icons";

const Spinner = (props) => {

    return (
      <Outter>
        <Eco style={{fontSize: "150px"}} className={"text-yellow-800 motion-safe:animate-bounce"} />
      </Outter>
    );
}

const Outter = tw.div`
  fixed top-0
  w-full h-full flex items-center justify-center
  bg-yellow-300
`;

export default Spinner;