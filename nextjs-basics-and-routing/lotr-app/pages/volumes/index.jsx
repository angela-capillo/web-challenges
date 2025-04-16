import Link from "next/link.js";
import { introduction, volumes } from "../../resources/lib/data.js";

export default function Volumes({ children }) {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={"/volumes/" + volume.slug}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
