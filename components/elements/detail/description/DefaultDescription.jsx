import React, { useState } from 'react';
import { Tabs } from 'antd';
import Rating from '~/components/elements/Rating';
import Lightbox from 'react-image-lightbox';

const { TabPane } = Tabs;

const DefaultDescription = ({product}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [commentIndex, setCommentIndex] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);
    // const [productImages, setProductImages] = useState([]);

    const comments = [
        {title:"Muazzam bir urun!", text: "Urunu bir haftadir kullaniyorum gercekten cok guzelmis. Oglum cok mutlu oldu.", rating:"5.0", images:["https://m.media-amazon.com/images/I/71+wWkCgF4L.webp"]},
        {title:"Cok kullanisli!", text: "Bu kadar kullanisli olmasini beklemiyordum. Tam bir fiyat performans urunu.", rating:"4.5", images:["https://media.reviews.co.uk/resize/create?format=jpg&height=300&width=300&crop=1&src=https%3A%2F%2Fd19ayerf5ehaab.cloudfront.net%2Fassets%2Fupload-0d5b1c4c7f720f698946c7f6ab08f687-1645095628.jpg", "https://s3-eu-west-1.amazonaws.com/reviewscouk/assets/upload-0d5b1c4c7f720f698946c7f6ab08f687-1645010448.jpg", "https://images.loox.io/uploads/2021/8/29/4yjGK04Ws.jpg", "https://images.loox.io/uploads/2021/9/9/4yMrlemGo.jpg"]},
        {title:"Pek begenemedim!", text: "Urun kullanisli ancak ben tasarimi pek begenemedim.", rating:"3.0", images:["https://i.etsystatic.com/15259090/r/il/d68a8a/3724415469/il_fullxfull.3724415469_8gil.jpg"]},
        {title:"1 Gunde elime ulasti!", text: "Bu kadar hizli kargolamalari cok guzel. Ayrica urunu de cok begendim.", rating:"4.0", images:[""]},
    ]

    const QAs = [
        {question:"Agriya geliomu",answer:"Evet efendim. Urunlerimiz tum Turkiye geneline kargolanmaktadir."},
        {question:"Urun elime gecmezse iade edebilir miyim?",answer:"Evet efendim, iade icin bizimle iletisime gecmeniz yeterli olacaktir."},
        {question:"Urunun boyutlari nedir?",answer:"Efendim urun boyutlarina, urun detay sayfasindan ulasabilirsiniz. Bu urunun yuksekligi 33 cm, kalinligi ise 12 cm."},
        {question:"",answer:""},
        {question:"",answer:""},
    ]

    const handleOpenLightbox = (e, commentIndex, photoIndex) => {
        e.preventDefault();
        setCommentIndex(commentIndex);
        setPhotoIndex(photoIndex);
        setIsOpen(true);
    };

    let lightboxView;
    if (isOpen) {
        lightboxView = (
            <Lightbox
                mainSrc={comments[commentIndex].images[photoIndex]}
                nextSrc={comments[commentIndex].images[(photoIndex+1) % comments[commentIndex].images.length]}
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
                    setPhotoIndex((photoIndex+1) % comments[commentIndex].images.length);
                }}
            />
        );
    }

    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs className="ps-product__tabs"defaultActiveKey="1">
                <TabPane tab="Ürün Açıklaması" key="1">
                    {/* <PartialDescription /> */}
                    <div className="ps-document"> 
                        <p>{"product.item.description"}</p>
                    </div>
                </TabPane>
                <TabPane tab="Özellikler" key="2">
                    <h1>Yakında</h1>
                </TabPane>
                <TabPane tab="Yorumlar" key="4">
                    {comments.map((comment,index)=>{
                        return (
                            <div className="ps-product-comments" key={index}>
                                <h3>{comment.title}</h3>
                                <div className="ps-product-comment__body">
                                    <Rating value={comment.rating}></Rating>
                                    <p>{comment.text}</p>
                                    <div className="ps-product-comment__images">
                                        {comment.images.map((image,index2)=> {
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
                </TabPane>
                <TabPane tab="Soru ve Cevaplar" key="5">
                {QAs.map((QA,index)=>{
                        return (
                            <div className="ps-product-comments" key={index}>
                                <h4>Soru: {QA.question}</h4>
                                <div className="ps-product-comment__body">
                                    <p><strong>Cevap: </strong>{QA.answer}</p>              
                                </div>
                            </div>
                        );
                    })}
                </TabPane>
                {/* <TabPane tab="Specification" key="2">
                    <PartialSpecification />
                </TabPane>
                <TabPane tab="Vendor" key="3">
                    <PartialVendor />
                </TabPane>
                <TabPane tab="Reviews (1)" key="4">
                    <PartialReview />
                </TabPane>
                <TabPane tab="Questions and Answers" key="5">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="More Offers" key="6">
                    <PartialOffer />
                </TabPane> */}
            </Tabs>
        </div>
    );
};

export default DefaultDescription;
