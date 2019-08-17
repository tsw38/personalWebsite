import {
    Home,
    Wrapper,
    Icons,
    Icon
} from 'styles/homepage';

const Homepage = (props) => {
    const icons = [
        {
            title: "Linkedin",
            href: "https://www.linkedin.com/in/tylerscottwilliams",
            imageSrc: "/static/linkedin_white.png"
        },
        {
            title: "Github",
            href: "https://github.com/tsw38",
            imageSrc: "/static/github_white.png"
        },
        {
            title: "Instagram",
            href: "http://instagram.com/tylerscottt",
            imageSrc: "/static/instagram_white.png"
        }
    ]

    return (
        <Home>
            <Wrapper>
                <h1>Hey, I'm Tyler Williams.</h1>
                <h2>I'm a full-stack developer working in Chicago, IL.</h2>
                <p>
                    I craft unique <span className="bold"> digital experiences </span>
                    through modern, <span className="bold"> responsive websites &amp; web apps </span> built using
                    <span className="bold"> ReactJS </span> and <span className="bold"> Javascript/Jquery, HTML5, SASS </span> on the frontend, and
                    <span className="bold"> Wordpress, PHP, MySQL, MongoDB </span> on the backend. Where and when I can, I try to <span className="bold">optimize</span> and <span className="bold">minimize</span> codebases left and right.
                </p>

                <Icons>
                    {icons.map(icon => (
                        <Icon key={icon.title}>
                            <a target="_blank" title={icon.title} href={icon.href}>
                                <img src={icon.imageSrc} alt={icon.title} />
                            </a>
                        </Icon>
                    ))}
                </Icons>
            </Wrapper>
        </Home>
    );
}


Homepage.getInitialProps = async ({ req }) => {
    return {
        title: 'Home'
    }
}

export default Homepage;