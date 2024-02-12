import 'swiper/css';
import car1 from '../assets/car-1.jpg';
function Product({productImg, productTitle}) {
    return(
        <div className='relative drop-shadow-md'>
            <a href="#"><h1 className='absolute font-fontBold text-[50px] text-white text-center top-[30%]'>{productTitle}</h1></a>
            <img src={productImg} alt={productTitle} />
        </div>
    )
}
export default Product;
