import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import * as Styled from './styles'
import ReviewItem from './components/ReviewItem/ReviewItem'
import Container from "components/Container/Container";

interface HomeReviewsSectionProps {
  className?: string
}

const HomeReviewsSection: FC<HomeReviewsSectionProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Container>
        <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log('slide change')}>
          <SwiperSlide>
            <ReviewItem
              text='Это лучшее приложение для обмена рекомендациями с друзьями. Мессенджеры, до свидания!'
              name='Андрей'
              deal=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              text='Раньше я сохранял места для посещения, которые советовали друзья, по одному. Теперь один клик - и все сразу у меня!'
              name='Марина'
              deal=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              text='Спасибо за регулярные подборки крутых локаций. Это идеально, когда не знаешь, куда сходить!'
              name='Костя'
              deal=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              text='Я часто путешествую. Раньше на отправку точек друзьям уходила уйма времени. Теперь одна ссылка - и моя карта у них.'
              name='Джон'
              deal=''
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Styled.Root>
  )
}

export default HomeReviewsSection
