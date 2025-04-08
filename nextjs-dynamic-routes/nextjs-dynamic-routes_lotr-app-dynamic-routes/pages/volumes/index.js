import Link from "next/link";
import { volumes } from "../../lib/data";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {

  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let randomVolume = getRandomElement(volumes);
  let randomVolumePage = `volumes/${randomVolume.slug}`;
  console.log(randomVolumePage);

  function handleRandomVolume () {
    router.push(randomVolumePage)
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
              <li key={volume.title}>
                <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
              </li>
          );
        })}
      </ul>
      <button onClick={handleRandomVolume}>Go to a random volume</button>
    </>
  );
}
