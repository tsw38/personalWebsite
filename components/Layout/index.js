import classNames from 'classnames';

import Header from 'components/Header';
import Body from 'components/Body';
import Canvas from 'components/Canvas';
import Reset from 'components/Layout/reset';
import Fonts from 'components/Layout/fonts';
import Layout from 'components/Layout/styles';

export default ({children, className}) => (
    <React.Fragment>
        <Reset />
        <Fonts />
        <Header />
        <Layout>
            <Body className={classNames(
                'Page',
                className
            )}>
                {children}
            </Body>
            <Canvas />
        </Layout>
    </React.Fragment>
);
