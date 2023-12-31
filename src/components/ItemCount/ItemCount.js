import { useState } from 'react'
import './ItemCount.css'
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, inicio, agregado}) => {

    const [cantidad, setCantidad] = useState(inicio)

    const agregar = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const quitar = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className='Contador'>
            <div className='Controles'>
                <Button variant='primary' onClick={quitar}>-</Button>
                <h4 className='Numero'>{cantidad}</h4>
                <Button variant='primary'  onClick={agregar}>+</Button>
            </div>
            <div>
                <Button variant='primary' onClick={() => agregado(cantidad)} disabled={!stock}>
                    Agregar al carro
                </Button>
            </div>
        </div>
    )
}

export default ItemCount