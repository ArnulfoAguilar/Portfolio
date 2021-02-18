import React, {Component} from 'react';
export default class DeviceNotificacion extends Component{
    render(){
        return(
            <div className="device-notification">
                <a className="device-notification--logo" href="#0">
                    <img src="assets/img/logo.png" alt="Global" />
                    <p>Global</p>
                </a>
                <p className="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
            </div>
        )
    }
}