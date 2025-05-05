import dbConnect from "@/db/connect";
import Product from "@/db/models/product";

export default async function handler(request, response) {

	await dbConnect();
	const { id } = request.query;
	
	console.log("request method", request.method)
	
	if (request.method === "GET") {
		const products = await Product.findById(id).populate("reviews");
	
		if (!products) {
		response.status(404).json({ status: "Not found." });
		return;
	}
	
	response.status(200).json(products);
	return;
  }

response.status(405).json({ status: "Method not allowed." });
}
