import React, {useCallback, useEffect} from "react";
import tw from "tailwind-styled-components"
import CardMain from './CardMain';

const Main = (props) => {
    const use = React.useRef(null);
    const scrolling = useCallback(e => {
        use.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
    }, [])
    const scrollingTop = useCallback(e => {
        use.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
    }, [])

    const scrollingBot = useCallback(e => {
        use.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'center' });
    }, [])

    useEffect(() => {
        scrolling();
    }, [scrolling])
      
    const Cards = tw.div`
    bg-yellow-500
    rounded-md p-4 m-2
`

    return (
        <div ref={use}>
            <Cards>
                <button onClick={scrollingBot} className={"pb-1 text-2xl"}>🐧🐧🐧🐧🐧🐧🐧🐧</button>
                <p className={"pb-3 animate-pulse text-yellow-300"}> click the penguins!</p>
                <CardMain />
                <button onClick={scrollingTop}className={"text-yellow-300"}>top</button>
            </Cards>
        </div>

    );
}

export default Main;

