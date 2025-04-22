import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`);

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
    <li key={data.id}>
      <p>Name: {data.name}</p>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price}
        {data.currency}
      </p>
      <p>Category: {data.category}</p>
    </li>
  );
}
