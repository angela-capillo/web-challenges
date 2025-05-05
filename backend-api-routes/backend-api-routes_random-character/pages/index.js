import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);

  if (!data) {
    return <p>No data :/</p>;
  }

  if (isLoading) {
    return <p>Is loading</p>;
  }

  if (error) {
    console.log(error);
    return <p>Shit happened</p>;
  }

  return (
    <>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.age}</p>
      <p>{data.spiritAnimal}</p>
    </>
  );
}
