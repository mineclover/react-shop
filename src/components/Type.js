import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Options from './Options';
import Product from './Products';

const Type = ({ orderType }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		loadItems();
	}, []);

	const loadItems = async () => {
		try {
			const response = await axios.get(`http://localhost:4000/${orderType}`);
			console.log(response.data);
			setItems(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const ItemComponent = orderType === 'products' ? Product : Options;
	const optionItems =
		orderType === 'options'
			? items.map(item => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />)
			: null;

	return (
		<div>
			<h2>주문 종류</h2>
			<p>하나의 가격</p>
			<p>총 가격</p>
			<div
				style={{
					display: 'flex',
					flexDirection: orderType === 'options' ? 'column' : 'row',
				}}
			>
				{optionItems}
			</div>
		</div>
	);
};

export default Type;
