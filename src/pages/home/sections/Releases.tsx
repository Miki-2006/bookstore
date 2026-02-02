import axios from "axios"
import { useEffect, useState } from "react"
import { Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import type { book } from "../../../hooks/interfaces"
import BookCard from "../../../components/BookCard"

const Releases = () => {
    const [newReleases, setNewReleases] = useState<book[]>([])

    useEffect(() => {
        const fetchNewReleases = async () => {
            try {
                const res = await axios.get('https://bookstore-server-sigma.vercel.app/api/books/newreleases')
                if (res.data) {
                    setNewReleases(res.data?.content.map((b: {book: book}) => b.book))
                }
            } catch (error) {
                console.error(`Error in fetching new releases: ${error}`);
            }
        }
        fetchNewReleases()
    }, [])

  return (
    <section className="container text-[#1c2024]">
        <h2 className="my-5 text-2xl text-center font-bold">New Releases</h2>
        <Swiper spaceBetween={40} modules={[Navigation, Scrollbar]} navigation scrollbar={{draggable: true}} slidesPerGroup={3} slidesPerView="auto">
            {
                newReleases && newReleases.map((b: book) => (
                    <SwiperSlide key={b.id} style={{width: "max-content"}}>
                        <BookCard bookData={b}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default Releases