import { Component } from "react";

const style = {
    detalle: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 7,
    },
    lista: {
        margin: 0,
        padding: 0
    },
    elemento: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class Detalle extends Component {
    render() {
        const { carro } = this.props
        return (
            <div style={style.detalle}>
                <ul style={style.lista}>
                    {carro.map(x =>
                        <li key={x.name} style={style.elemento}>
                            <img alt={x.name} src={x.img} width='50' height='32' />
                            {x.name} <span>{x.cantidad}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default Detalle