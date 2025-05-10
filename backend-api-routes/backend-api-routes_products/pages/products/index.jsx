import useSWR from "swr";

export default function ProductsList() {
  const { data, isLoading, error } = useSWR(`/api/products`);

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
    <ul>
      {data?.map((product) => {
        return (
          <li key={product.id}>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>
              Price: {product.price}
              {product.currency}
            </p>
            <p>Category: {product.category}</p>
          </li>
        );
      })}
    </ul>
  );
}
