import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                <div className="container">
                    <h1> CRUD - react, redux, REST API & Axios</h1>
                </div>

                <a href="/productos/nuevo"
                    className="btn btn-danger nuevo-post d-block d-md-inline-block"
                >Agregar Producto &#43;</a>
            </nav>
        )
    }
}

export default Header;