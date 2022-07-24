import './../../assets/styles/body.scss';
import Product from './Product/Product';
import Sorting from './Sorting/Sorting';


function Body ({posts}) {
    const poke = posts.map((item) => {
        return (

            <Product name={item.name} url={item.url} />
        )
    });
    return(
        <div className='body'>
            <div className='wrapper'>
                <div className='sorting'>
                    <Sorting />
                </div>
                <div className='product'>
                    {poke}
                </div>
            </div>
        </div>
    )
};

export default Body;