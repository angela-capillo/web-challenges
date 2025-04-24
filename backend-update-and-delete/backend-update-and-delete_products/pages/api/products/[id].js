import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  if (request.method === "PUT") {
    const productToUpdate = request.body;

    await Product.findByIdAndUpdate(id, productToUpdate);
    response.status(200).json({ message: "Product successfully updated."});
    return;
  }

  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    response.status(200).json({ message: "Product successfully deleted."});
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
