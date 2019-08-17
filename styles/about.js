import styled from 'styled-components';

export const Header = styled.section`
    position: sticky;
    top: 100px;
    height: 200px;
    z-index: 5;
    /* pointer-events: none; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    h1, p {
        position: relative;
        z-index: -1;
    }

    h1 {
        color: white;
        text-align: center;
        text-transform: uppercase;
        display: block;
        font-size: 40px;
        font-weight: 300;
        max-width: 768px;
        letter-spacing: 3px;
    }

    p {
        margin-top: 16px;
        color: rgba(255, 255, 255, 0.75);
        letter-spacing: 2px;
        font-weight: 300;
        font-size: 18px;
        -webkit-font-smoothing: antialiased;
        text-align: center;
    }
`;

const section = styled.section``;

export const Body = styled.section`
    background-color: white;
    border-radius: 8px;
    padding: 36px;
    position: relative;
    z-index: 20;
    margin: 48px 0;
`;


export const Blurb = styled(Body)`
    display: grid;
    grid-template-areas: 'blurb portrait';
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
`;

export const BlurbText = styled.div`
    grid-area: blurb;

    h2 {
        font-size: 47px;
        color: #333333;
        font-weight: 700;
        margin: 10px 0;
    }

    p {
        font-size: 29px;
        font-weight: 500;
        line-height: 34px;
        margin: 10px 0 0 0;
        color: #333333;
    }
`;

export const Portrait = styled.div`
    grid-area: portrait;
    width: 100%;
    padding-top: 100%;
    background: url('/static/profile.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Current = styled(Body)`
    p {
        &:nth-of-type(even) {
            margin: 16px 0;
        }

        display: inline-block;
        letter-spacing: 0.75px;
        color: #333333;
        font-size: 18px;
        font-weight: 300;
        line-height: 21px;
        text-align: justify;
    }

    .bold {
        color: black;
        font-weight: 700;
        font-size: 17px;
    }
`;

export const Skills = styled(Body)`
    h2 {
        margin: 40px 0 10px 0;
        font-size: 40px;
        font-weight: 400;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
`;

export const SkillSection = styled.div`
    &:nth-of-type(2n+1) {
        margin-top: 16px;
    }
`;

export const SkillTitle = styled.span`
    font-size: 18px;
    font-weight: 700;
`;

export const SkillDescription = styled.p`
    color: #333333;
    font-size: 16px;
    margin: 16px 0;
    font-weight: 300;
    line-height: 24px;
`;

export const SkillList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8px;
    grid-row-gap: 4px;
`;

export const SkillListItem = styled.li`
    display: block;
    margin-bottom: 5px;
`;