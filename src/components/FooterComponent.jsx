import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
         
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text=muted">All Rights Reserver 2020 @javaGuides</span>                
                </footer>
                
            </div>
        );
    }
}

export default FooterComponent;