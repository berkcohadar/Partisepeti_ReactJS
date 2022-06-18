import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Rating from '~/components/elements/Rating';

import AccountMenuSidebar from './modules/AccountMenuSidebar';

const UserComments = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [commentIndex, setCommentIndex] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleOpenLightbox = (e, commentIndex, photoIndex) => {
        e.preventDefault();
        setCommentIndex(commentIndex);
        setPhotoIndex(photoIndex);
        setIsOpen(true);
    };

    const comments = [
        { title: "Muazzam bir urun!", text: "Urunu bir haftadir kullaniyorum gercekten cok guzelmis. Oglum cok mutlu oldu.", rating: "5.0", images: ["https://m.media-amazon.com/images/I/71+wWkCgF4L.webp"] },
        { title: "Cok kullanisli!", text: "Bu kadar kullanisli olmasini beklemiyordum. Tam bir fiyat performans urunu.", rating: "4.5", images: ["https://media.reviews.co.uk/resize/create?format=jpg&height=300&width=300&crop=1&src=https%3A%2F%2Fd19ayerf5ehaab.cloudfront.net%2Fassets%2Fupload-0d5b1c4c7f720f698946c7f6ab08f687-1645095628.jpg", "https://s3-eu-west-1.amazonaws.com/reviewscouk/assets/upload-0d5b1c4c7f720f698946c7f6ab08f687-1645010448.jpg", "https://images.loox.io/uploads/2021/8/29/4yjGK04Ws.jpg", "https://images.loox.io/uploads/2021/9/9/4yMrlemGo.jpg"] },
        { title: "Pek begenemedim!", text: "Urun kullanisli ancak ben tasarimi pek begenemedim.", rating: "3.0", images: ["https://i.etsystatic.com/15259090/r/il/d68a8a/3724415469/il_fullxfull.3724415469_8gil.jpg"] },
        { title: "1 Gunde elime ulasti!", text: "Bu kadar hizli kargolamalari cok guzel. Ayrica urunu de cok begendim.", rating: "4.0", images: [""] },
    ];

    let lightboxView;
    if (isOpen) {
        lightboxView = (
            <Lightbox
                mainSrc={comments[commentIndex].images[photoIndex]}
                nextSrc={comments[commentIndex].images[(photoIndex + 1) % comments[commentIndex].images.length]}
                prevSrc={comments[commentIndex].images[(photoIndex + comments[commentIndex].images.length - 1) % comments[commentIndex].images.length]}
                onCloseRequest={() => {
                    setIsOpen(false);
                }}
                onMovePrevRequest={() => {
                    setPhotoIndex(
                        (photoIndex + comments[commentIndex].images.length - 1) % comments[commentIndex].images.length
                    );
                }}
                onMoveNextRequest={() => {
                    setPhotoIndex((photoIndex + 1) % comments[commentIndex].images.length);
                }}
            />
        );
    }

    return (
        <section className="ps-my-account ps-page--account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ps-page__left">
                            <AccountMenuSidebar data={null} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-section--account-setting">
                            <div className="ps-section__header">
                                <h3>Değerlendirmelerim</h3>
                            </div>
                            {/* {!loading ? */}
                            <div className="ps-section__content">
                                {comments.map((comment, index) => {
                                    return (
                                        <div className="ps-product-comments" key={index}>
                                            <div className="ps-product-comment__header">
                                                <h3>{comment.title}</h3>
                                                <div className="ps-product-comment__buttons">
                                                    <a className="ps-product-comment__edit ps-btn"> Düzenle</a>
                                                    <a className="ps-product-comment__delete ps-btn ps-btn--danger"> Sil</a>

                                                </div>
                                            </div>
                                            <div className="ps-product-comment__body">
                                                <Rating value={comment.rating}></Rating>
                                                <p>{comment.text}</p>
                                                <div className="ps-product-comment__images">
                                                    {comment.images.map((image, index2) => {
                                                        return (
                                                            <div onClick={(e) => handleOpenLightbox(e, index, index2)}>
                                                                <img src={image} key={index2} ></img>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                {lightboxView}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserComments;
