import express from "express";
import { products } from "./data";

let api = express.Router();

api.route("/products")
	.get((req, res) => {
		if (req.session){
			req.session.products = req.session.products && req.session.products.items.length > 0 
				? req.session.products  
				: products;

			res.json(req.session.products || products);
		}
		else {
			res.json(products);
		}
	})
	.delete((req, res) => {
		if (req.session){
			req.session.products = products;
			res.json(req.session.products);
		}
		else {
			res.json(products);
		}
	})
	.post((req, res) => {
		let beforeProducts = 
			req.session 
				? req.session.products
				: products;
        
		let {id} = req.body;
		let {title} = req.body;
       
		let newProducts = [...beforeProducts.items,
			{
				id,
				title
			}];
			
		if (req.session){
			req.session.products = {};
			req.session.products.items = newProducts;
			
			res.json(req.session.products);
		}
		else{

			let result = {};

			result.items = newProducts;
			
			res.json(result);
		}
	});


export default api;