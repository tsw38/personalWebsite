import styled from 'styled-components';

export const Homepage = styled.div`
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
    align-items: flex-start;
    height: inherit;
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    color: white;

    h1 {
        font-size: 40px;
        font-weight: 400;
        margin: 10px 0;
        text-align: left;
        display: block;
        width: 100%;
    }

    h2 {
        font-weight: 300;
        font-size: 18px;
        display: block;
        width: 100%;
    }

    p {
        display: block;
        position: relative;
        font-size: 16px;
        font-weight: 400;
        margin: 40px 0;
        line-height: 24px;
        color: #848383;
        letter-spacing: 0.5px;
        max-width: 810px;
        align-self: flex-start;

        .bold {
            font-weight: 900;
            letter-spacing: 0.5px;
            font-size: 17px;
            color: white;
        }
    }
`;

export const Icons = styled.ul`
    list-style: none;
    padding: 0;
`;
export const Icon = styled.li`
    display: inline-block;

    &:nth-of-type(even) {
        margin: 0 16px;
    }

    a {
        pointer-events: initial;
    }

    img {
        width: 40px;
        height: 40px;
        transition: opacity 800ms;

        &:hover {
            opacity: 0.5;
        }
    }
`;