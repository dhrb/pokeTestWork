import './../../../assets/styles/product.scss'
import {useState, useEffect} from 'react';

function Product(props) {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <div className="product">
            <div className="productWrapper">
                <div className="item">
                    <div className="itemHeader">
                        <img src='props.posts.pokemonImg' alt="pokeImg"/>
                        <p className="productName">{props.name}</p>
                    </div>
                    <div className="itemBody">
                        <p className="pokemonClass">Strength</p>
                        <p className="pokemonPower">10</p>
                        <p className="pokeHealth">17</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;