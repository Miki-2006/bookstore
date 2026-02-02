import axios from "axios"
import { useEffect, useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import type { book } from "../../../hooks/interfaces"
import BookCard from "../../../components/BookCard"
import { Navigation, Scrollbar } from "swiper/modules"

const Bestseller = () => {
    const [bestsellers, setBestsellers] = useState<book[]>([])

    useEffect(() => {
        const fetchBestsellers = async () => {
            try {
                const res = await axios.get('https://bookstore-server-sigma.vercel.app/api/books/bestsellers')
                if (res.data) {
                    setBestsellers(res.data?.content.map((b: {book: book}) => b.book))
                }
            } catch (error) {
                console.error(`Error in fetching bestsellers: ${error}`);
            }
        }
        fetchBestsellers()
    }, [])

  return (
    <section className="container text-[#1c2024]">
        <h2 className="my-5 text-2xl text-center font-bold">Best Seller Books</h2>
        <Swiper spaceBetween={40} modules={[Navigation, Scrollbar]} navigation scrollbar={{draggable: true}} slidesPerGroup={3} slidesPerView="auto">
            {
                bestsellers && bestsellers.map((b: book) => (
                    <SwiperSlide key={b.id} style={{width: "max-content"}}>
                        <BookCard bookData={b} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default Bestseller