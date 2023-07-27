import { Component } from 'react';
import img1 from "../../images/image-equilibrium.jpg";
import img2 from "../../images/image-avatar.png";
export default class Card extends Component {

    render() {
        const { imgUrl, title, author, description, price } = this.props.cardinfo;
        const { increaseprice, deleteProduct, index } = this.props;
        return (
            <>
                <div className="my-card text-white p-3 rounded-3 me-3" >
                    <img src={imgUrl} />
                    <h2 className='pt-3'>{title}</h2>
                    <p>{description}</p>
                    <div className="card-info d-flex justify-content-between">
                        <span>{price} ETH</span>
                        <span><i className="fa-regular fa-clock"></i> 3 days left</span>
                    </div>
                    <button className='btn btn-success w-100 mt-3' onClick={() => { increaseprice(index) }}>Icrease price</button>
                    <button className='btn btn-danger w-100 mt-3' onClick={() => { deleteProduct(index) }}>Delete Product</button>
                    <div className="card-footer d-flex  align-items-center mt-3">
                        <img src={img2} />
                        <p className='mb-0 ms-3'>
                            creation of <a href="https://facebook.com" target='_blank'>{author}</a>
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

