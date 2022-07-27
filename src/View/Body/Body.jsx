import './../../assets/styles/body.scss';
import Product from './Product/Product';
import Sorting from './Sorting/Sorting';
import Loading from './../../Components/Loading'


function Body ({posts,loading}) {
    return(
        <div className='body'>
            <div className='wrapper'>
                <div className='sorting'>
                    <Sorting />
                </div>
                <div className='product'>
                    {loading ? <Loading /> : posts.map((item) => <Product name={item.name} url={item.url} />)}
                </div>
            </div>
        </div>
    )
};

export default Body;