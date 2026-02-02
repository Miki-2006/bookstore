import type { FC } from "react";
import type { book } from "../hooks/interfaces";
import { FaCartPlus } from "react-icons/fa";

interface prop {
  bookData: book;
}

const BookCard: FC<prop> = ({ bookData }) => {
  return (
    <div className="flex flex-col rounded-xl justify-center bg-[#eef2ff] p-4">
      <div className="flex justify-center items-center bg-[#f0ffff] rounded-lg w-50 h-50">
        <img
          src="https://blog-cdn.reedsy.com/directories/gallery/86/large_7017d79e938f37d39aa3becaeb950cdf.jpg"
          alt="cover"
          className="rounded-lg w-[60%] h-[80%] object-cover"
        />
      </div>
      <div className="flex flex-col my-3 max-w-50">
        <b className="line-clamp-1">{bookData.title}</b>
        <div className="flex gap-3 text-sm items-center">
          <span className="text-[#818cf8]">{bookData.author}</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((el: number) => (
              <img
                key={el}
                className="size-4"
                src="/icons/star.svg"
                alt="star"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="max-w-50 text-sm mb-7 line-clamp-2">{bookData.description}</p>
      <button type="button" className="flex gap-3 justify-center items-center w-50 bg-[#18181b] py-2 rounded">
        <FaCartPlus color="white" size={20}/>
        <span className="text-white font-semibold">Add To Cart</span>
      </button>
    </div>
  );
};

export default BookCard;
