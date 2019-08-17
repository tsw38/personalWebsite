import Head from 'next/head'

import {
    Header,
    Blurb,
    BlurbText,
    Portrait,
    Current,
    Skills,
    Wrapper,
    SkillSection,
    SkillTitle,
    SkillDescription,
    SkillList,
    SkillListItem
} from 'styles/about';

const AboutPage = () => {
    const yearsExperience = new Date().getFullYear() - 2015;

    const text = {
        header: {
            line1: 'Passion. Cutting Edge Technologies. Interaction. Creativity. Performant Code. Modern Architecture.',
            line2: 'You deserve it all.'
        },
        blurb: {
            line1: 'Hello,',
            line2: `I am a driven full-stack developer with ${yearsExperience} years of professional experience currently working as a Software Engineer @ Footlocker. Ages ago, I graduated from Cornell University with a degree in Information Science and another in Fine Arts.`
        }
    }

    const skills = {
        section: [
            {
                title: 'Development',
                subsections: [
                    {
                        description: 'Each project is a unique flower and deserves the correct care. I am most familiar with the following technologies. However, I am always open to new technologies if I can see benefits for your project.',
                        list: ['Javascript', 'Webpack', 'React', 'Nodejs', 'Wordpress', 'DigitalOcean', 'Java', 'PHP', 'Jquery', 'CSS3', 'HTML5', 'MySQL', 'PostgreSQL', 'Handlebarsjs', 'Gulp', 'LESS/SASS', 'Angularjs', 'Bootstrap', 'AWS', 'Python']
                    },
                    {
                        description: 'Techniques & patterns I\'m following during the development of each project.',
                        list: ['Agile', 'Object Oriented Programming', 'Performance Optimization Techniques', 'MVC architecture', 'CSS Regression Testing', 'Flux Application Architecture', 'Responsive Web Design']
                    }
                ]
            },
            {
                title: 'Design',
                subsections: [
                    {
                        description: 'I have been in love with the arts since I was in the 4th grade and am always looking for new trends. It\'s more likely than not that I have one of the following applications open at any given time on my computer.',
                        list: ['Adobe Photoshop CS6', 'Adobe Illustrator CS6', 'Adobe Premiere CS6']
                    }
                ]
            },
            {
                title: 'Resume',
                subsections: [
                    {
                        description: 'I have been in love with the arts since I was in the 4th grade and am always looking for new trends. It\'s more likely than not that I have one of the following applications open at any given time on my computer.',
                        promo: 'If you were at all impressed with my background, please feel free to take a peek at my <a target="_blank" href="/static/resume.pdf">resume</a>.'
                    }
                ]
            }

        ]
    }


    return (
        <React.Fragment>
            <Header>
                <h1>{text.header.line1}</h1>
                <p>{text.header.line2}</p>
            </Header>

            <Blurb>
                <BlurbText>
                    <h2>{text.blurb.line1}</h2>
                    <p>{text.blurb.line2}</p>
                </BlurbText>

                <Portrait />
            </Blurb>

            <Current>
                <p>
                    Currently I am specializing in developing interactive,
                    {' '}
                    <span className="bold">
                        easy-to-maintain, responsive e-commerce websites
                    </span>
                    {' '}
                    that can scale on demand and are accessible across all devices.
                    Along with writing and reviewing code for efficiency, I also
                    {' '}
                    <span className="bold">
                        debug on the fly
                    </span>
                    {', '}
                    collaborate across several teams at Macy's and continue to build side projects to help increase team workflow.
                </p>

                <p>
                    Prior to my current job at Macy's, I worked at a small digital agency called
                    {' '}
                    <span className="bold">Dressler</span>
                    {' '}
                    where I was fortunate enough to learn a lot about web development and got to work
                    for clients like
                    {' '}
                    <span className="bold">The 911 Museum & Memorial</span>
                    {', '}
                    <span className="bold">The Children's Museum of Manhattan</span>
                    {' and '}
                    <span className="bold">Wiley Efficient Learning</span>
                    {' '}
                    just to name a few.
                </p>

                <p>
                    Besides my full-time job, I am always programming smaller projects or freelancing. I know I should relax some more, I just have a love of learning.
                    If you are looking for unique website or web app design, <span className="bold">I would enjoy working together.</span>
                </p>
            </Current>


            <Skills>
                <h2>Skills</h2>
                <Wrapper>
                    {skills.section.map((section, index) => (
                        <SkillSection
                            key={index}>
                            <SkillTitle>{section.title}</SkillTitle>
                            {section.subsections.map((subsection, subindex) => (
                                <React.Fragment
                                    key={`subsection-${subindex}`}>
                                    <SkillDescription>{subsection.description}</SkillDescription>
                                    {!!subsection.list &&
                                        <SkillList>
                                            {subsection.list.map((item, itemIndex) => (
                                                <SkillListItem key={`${section.title}-item-${itemIndex}`}>{item}</SkillListItem>
                                            ))}
                                        </SkillList>
                                    }
                                    {!!subsection.promo &&
                                        <SkillDescription
                                            dangerouslySetInnerHTML={{__html: subsection.promo}}
                                        />
                                    }
                                </React.Fragment>
                            ))}
                        </SkillSection>
                    ))}
                </Wrapper>
            </Skills>
        </React.Fragment>
    );
}

AboutPage.getInitialProps = async ({ req }) => {
    return {
        title: 'About'
    }
}

export default AboutPage;