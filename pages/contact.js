import {useRouter} from "next/router";

export default () => {
    const router = useRouter();
    const show = router.pathname === '/contact';

    return (
        <div>contact</div>
    );
}
