import Link from "next/link.js";
import { volumes } from "../../resources/lib/data.js";
import Image from "next/image.js";

export default function TheTwoTowers({ children }) {
  const volume = volumes.find(
    ({ slug }) => slug === "the-two-towers"
  );

  const books = volume.books;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {`${book.ordinal} : 
            ${book.title}`}
          </li>
        ))}
      </ul>
      <Image src={volume.cover} width={140} height={230} alt={volume.title}/>
    </>
  );
}