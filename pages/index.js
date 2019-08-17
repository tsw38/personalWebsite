import {useRouter} from "next/router";

export default (props) => {
    const router = useRouter();

    console.warn('index props', props);
    return (
        <div>
            <h1>Hey, I'm Tyler Williams.</h1>
            <p className="white">I'm a full-stack developer working in Chicago, IL.</p>

            <p>
                I craft unique digital experiences through modern, responsive websites & web apps built using ReactJS and Javascript/Jquery, HTML5, SASS on the frontend, and Wordpress, PHP, MySQL, MongoDB on the backend. Where and when I can, I try to optimize and minimize codebases left and right.
            </p>
        </div>
    );
}
