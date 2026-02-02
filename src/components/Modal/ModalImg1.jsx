import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const ModalImg1 = ({ closeModalImg1, images, activeIndex }) => {
    return (
        <div className="modalImg1" onClick={() => closeModalImg1()}>
            <div className="modalImg1__block" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => closeModalImg1()}>×</button>

                <Swiper
                    initialSlide={activeIndex}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="modalSwiper"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="modal__slider">
                            <img src={img} alt={`Image ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ModalImg1