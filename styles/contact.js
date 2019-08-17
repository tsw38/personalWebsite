import styled from 'styled-components';

export const Contact = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: inherit;
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    color: white;

    h1 {
        text-transform: uppercase;
        font-size: 40px;
        font-weight: 400;
        margin: 10px 0;
        text-align: center;
        display: block;
        width: 100%;
    }

    p {
        max-width: 600px;
        width: inherit;
        color: rgba(255, 255, 255, 0.75);
        font-size: 18px;
        letter-spacing: 0.85px;
        font-weight: 400;
        line-height: 25px;
        margin-bottom: 40px;
        text-align: center;

        a {
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: color 100ms ease;
            pointer-events: initial;

            &:hover {
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }
`;
