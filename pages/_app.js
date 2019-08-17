import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import Layout from 'components/Layout';



export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const className = this.props.router.pathname.split('/')[1].toLowerCase();

        return (
            <React.Fragment>
                <Head>
                    <title>My new cool app</title>
                </Head>
                <Layout
                    className={className && `Page--${className}`}>
                    <Component
                        {...pageProps}
                    />
                </Layout>
            </React.Fragment>
        )
    }
}