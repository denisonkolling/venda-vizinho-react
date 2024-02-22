import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Categories from '../pages/Categories';
import Offers from '../pages/Offers';

const RoutesApp = () => {

	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
          <Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/produtos" element={<Products />} />
					<Route path="/categorias" element={<Categories />} />
					<Route path="/ofertas" element={<Offers />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);

};

export default RoutesApp;