/** @format */

import React from "react";
import Carousel from "../../Componenets/Carousels/Carousel";
import Header from "../../Componenets/Header/header";
import { TestimonialsContainter } from "./styles/homePage.styled";
import Container from "react-bootstrap/Container";
import Cardcontainer from "../../Componenets/cardContainer/CardContainer";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productsSlice";

const HomePage = () => {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get("http://localhost:5009/api/products")
			.then(function (response) {
				// handle success
				console.log(response.data);
				dispatch(productActions.getProducts(response.data));
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
		axios
			.post("http://localhost:5009/api/auth/login", {
				email: "sara@gmail.com",
				password: "1234567",
			})
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		axios
			.post("http://localhost:5009/api/auth/register", {
				username: "sara",
				email: "sara@gmail.com",
				password: "1234567",
			})
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	console.log(products);
	const NavMenuItems = [
		{
			Furniture: [
				"Gaming furniture",
				"Sofas & armchairs",
				"Wardrobes",
				"Café furniture",
			],
		},
		{
			Lighting: [
				"Smart lighting",
				"Decorative lighting",
				"Integrated lighting",
				"Outdoor lighting",
			],
		},
		{
			Decoration: [
				"Frames & pictures",
				"Plants & flowers",
				"Mirrors",
				"Vases & bowls",
			],
		},
		{
			"Rugs, mats & flooring": [
				"Rugs",
				"Outdoor flooring",
				"Door mats",
				"Bath mats",
			],
		},
		{
			"Working from home": [
				"Desks & computer desks",
				"Work lamps",
				"Drawer units",
				"Desk chairs",
			],
		},
		{
			"Kitchen & appliances": [
				"Kitchen cabinets",
				"Kitchen worktops",
				"Appliances",
				"Pantry",
			],
		},
		{ Outdoor: ["Chairs", "Dining Furniture", "Accessories"] },
		{ "BABY & KIDS": ["Kids", "Baby "] },
	];
	const fullscreenCarouselItems = [
		{
			imgSrc:
				"https://images.unsplash.com/photo-1593708797232-4c87f1f4bda9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			header: "Beauty & Brains",
			text: "Sprints take your desgin skills to a new level",
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
			header: "Simply Prada",
			text: "Discover our wonderful Prada new items",
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
			header: "Summer dress collection",
			text: "This summer is different and so is our collection!",
		},
	];

	const testimonialsItems = [
		{
			text: "I've purchased hundreds and hundreds of files over the past 7 years. But there is nothing close to this support and professionalism. Not only is theme, simple , useful and modern, but again the support is remarkable.  Very happy I got this theme! Thank you!",
			author: "- Charle Laron",
		},
		{
			text: "I am a web developer for many years i haven't seen anything clear clean coded like journal it makes my live so much easier thanks for the great work you have done.",
			author: "- Larry Elon",
		},
		{
			text: "Great toolkit for Opencart. As a base platform, Opencart can be a nightmare to modify and get looking good. Journal takes away all the pain.",
			author: "- kellyhorne",
		},
		{
			text: "This shop is just amazing. With the new version J3 everything has become much easier to adjust. It's indeed, as the author says, not possible to mention all the posibilities, because it's just to much. Great value for the price!",
			author: "- TBNWorld",
		},
		{
			text: "Amazing ways to customize so you dont end up with a site looking like everyone elses :) Unique sites are much better than clone sites, as they keep the customers interest and the bounce rate is alot lower. Great Job A+",
			author: "- sacredcirclegifts",
		},
	];
	return (
		<>
			<Header items={NavMenuItems} />
			<Carousel
				type='fullscreen'
				items={fullscreenCarouselItems}
				interval={null}
				subHeader={true}
			/>
			<Cardcontainer />
			<TestimonialsContainter>
				<Container>
					<Carousel
						type='testimonials'
						items={testimonialsItems}
						interval={null}
					/>
				</Container>
			</TestimonialsContainter>

			<Carousel type='brands' />
			<div
				style={{ background: "rgb(46 46 46)", width: "100%", height: "500px" }}
			></div>
		</>
	);
};

export default HomePage;
