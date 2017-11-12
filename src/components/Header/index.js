import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css';
const logo = require('./seal.png');

export default class Header extends Component {

    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            showLogin: false
        }
    }

    render() {
        return (
            <div className={style.header}>
                <span className={style.logo} onClick={this.props.handleLogin}>
                    <img src={logo} alt='' />
                </span>
                <h1>Seal's Blog</h1>
                <p>It &nbsp; is &nbsp; hard &nbsp; to &nbsp; fail &nbsp;, &nbsp; but &nbsp; it &nbsp; is &nbsp; worse &nbsp;
                    never &nbsp; to &nbsp; have &nbsp; tried &nbsp; to &nbsp; succeed.</p>
            </div>
        )

    }
}
