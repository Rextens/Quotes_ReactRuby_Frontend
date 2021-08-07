import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components'

const HexagonQuoteText = (props) => {
    useEffect(() => {

    }, [])


    const generateKeyframes = (y) => keyframes`
                from {
                    -moz-transform: translateX(0%);
                    -webkit-transform: translateX(0%);
                    transform: translateX(0%);
                }
                to {
                    -moz-transform: translateX(${y > 83 ? `-100%` : `0%`});
                    -webkit-transform: translateX(${y > 83 ? `-100%` : `0%`});
                    transform: translateX(${y > 83 ? `-100%` : `0%`});
                }
                `

    const StyledQuote = styled.div`
            
            -moz-animation: ${generateKeyframes(props.textWidth)} ${props.textWidth / 30}s infinite linear;
            -webkit-animation: ${generateKeyframes(props.textWidth)} ${props.textWidth / 30}s infinite linear;
            animation: ${generateKeyframes(props.textWidth)} ${props.textWidth / 30}s infinite linear;
            
            &:hover {
                animation-play-state: running;
            }

            &:not(:hover) {
                animation-play-state: paused;
            }
        `

    return ( 
            <StyledQuote>
                { props.item.title }
            </StyledQuote>
    );
}
 
export default HexagonQuoteText;