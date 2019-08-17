import { useRouter } from 'next/router'
import classNames from 'classnames';

export default ({ children, href, className }) => {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} className={classNames(
            'Link',
            {'Link--active': router.pathname === href},
            className
        )}>
            {children}
        </a>
    )
}