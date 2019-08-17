import styled from 'styled-components';

export default styled.header`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;

    display: flex;
    justify-content: flex-end;
    padding: 0 5vw;
    align-items: center;
    height: 100px;
    pointer-events: none;
    user-select: none;
    font-family: 'Rubik', sans-serif;

    a {
        color: white;
        pointer-events: all;
        text-decoration: none;
        padding: 0 5px;

        position: relative;
        display: inline-block;
        margin: 15px 25px;
        outline: none;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
        text-shadow: 0 0 1px rgba(255,255,255,0.3);

        &:hover, &:focus {
            outline: none;
        }

        &:not(:last-of-type) {
            margin-right: 8px;
        }

        &::before,
        &::after {
            display: inline-block;
            opacity: 0;
            -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
            -moz-transition: -moz-transform 0.3s, opacity 0.2s;
            transition: transform 0.3s, opacity 0.2s;
        }

        &::before {
            margin-right: 10px;
            content: '[';
            -webkit-transform: translateX(20px);
            -moz-transform: translateX(20px);
            transform: translateX(20px);
        }

        &::after {
            margin-left: 10px;
            content: ']';
            -webkit-transform: translateX(-20px);
            -moz-transform: translateX(-20px);
            transform: translateX(-20px);
        }

        &:hover::before,
        &:focus::before,
        &:hover::after,
        &:focus::after,
        &.Link--active::before,
        &.Link--active::after {
            opacity: 1;
            -webkit-transform: translateX(0px);
            -moz-transform: translateX(0px);
            transform: translateX(0px);
        }
    }
`;

