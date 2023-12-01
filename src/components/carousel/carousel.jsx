import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';
import Link from '../../img/link-line.svg'
import { useState } from 'react';


export const Caorusel = ({ main }) => {
  const [isFocus, setFocus] = useState(false)

  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {
        main &&
        main.map((el) => {
          return (
            <>
              <SwiperSlide key={el.id}>
                <img
                  src={el.workImage}
                  alt="link"
                  style={isFocus ?
                    { opacity: '0.2', transition: 'all .3s linear' }
                    : { opacity: '1', transition: 'all .3s linear' }}
                />
                <a
                  className='link tr'
                  href={el.workLink}
                  target='_blank'
                  onMouseOver={() => setFocus(true)}
                  onMouseOut={() => setFocus(false)}
                >
                  <img src={Link}></img>
                </a>
              </SwiperSlide>
            </>
          )
        })
      }
    </Swiper>
  )
}