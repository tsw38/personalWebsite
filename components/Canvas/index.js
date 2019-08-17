import React from 'react'

import Canvas from 'components/Canvas/styles'
import Particles from 'libraries/Particles';

export default class StyledCanvas extends React.Component {
    componentDidMount() {
        Particles.init();
    }

    render() {
        return (
            <Canvas id="canvas" />
        )
    }
}