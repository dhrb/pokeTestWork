import './../../../assets/styles/product.scss'

function Product(props) {
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
                        <p className="">17</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;