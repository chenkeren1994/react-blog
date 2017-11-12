import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css';


export default class Footer extends Component {

    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return(
            <div className={style.footer}>
                <p className={style.copyright}>&copy; A Seal's Blog: <a href="https://github.com/chenkeren1994" target="blank">Github</a>.</p>
            </div>
        )
    }

}
