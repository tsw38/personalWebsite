import React from 'react'
import classNames from 'classnames';

import Header from 'components/Header';
import Body from 'components/Body';
import Canvas from 'components/Canvas';
import Reset from 'components/Layout/reset';
import Fonts from 'components/Layout/fonts';
import Layout from 'components/Layout/styles';

import { initGA, logPageView } from 'libraries/analytics';

export default class LayoutWrapper extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
          logPageView()
    }

    render() {
        return (
            <React.Fragment>
                <Reset />
                <Fonts />
                <Header />
                <Layout>
                    <Body className={classNames(
                        'Page',
                        this.props.className
                    )}>
                        {this.props.children}
                    </Body>
                    <Canvas />
                </Layout>
            </React.Fragment>
        )
    }
};
