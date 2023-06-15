import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

class MenuSistema extends React.Component {

    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <>
                <Menu inverted>

                    <Menu.Item
                        name='home'
                        active={this.state.activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/'
                    />
                    <Menu.Item
                        name='cliente'
                        active={this.state.activeItem === 'cliente'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/list-cliente'
                    />

                    <Dropdown item text='produto'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to='/list-produto'>
                                Produto
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/list-categoriaproduto'>
                                Categoria Produto
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <Menu.Item
                        name='entregador'
                        active={this.state.activeItem === 'entregador'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/list-entregador'
                    />

                    {/*<Menu.Item
                        name='material'
                        active={this.state.activeItem === 'material'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/list-material'
                    />

                    <Menu.Item
                        name='cupomDesconto'
                        active={this.state.activeItem === 'cupomDesconto'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/list-cupomDesconto'
                    />*/}

                </Menu>
            </>
        )
    }
}

export default MenuSistema;
