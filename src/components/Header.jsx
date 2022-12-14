import React from 'react';
import { Link } from "react-router-dom";

const Header = ({ onChangeNav }) => {
	return (
		<header className='aside__header'>
			<Link to="/">
				<div className='aside__header__logo' onClick={() => onChangeNav(0)}>
					<svg className="aside__header__logo__bee" id="swarm" version="1.1" viewBox="0 0 207.6013 193.1445" xmlns="http://www.w3.org/2000/svg">
						<g><ellipse cx="179.8058" cy="115.1445" rx="24.0004" ry="41.9981" transform="matrix(0.9136 -0.4067 0.4067 0.9136 -31.2881 83.0859)" /><path d="M138.509,130.4297c-8.9024-20.9728-10.0236-42.0272-4.2344-55.5236   c-24.3908,6.4844-42.4687,30.1016-42.4687,58.2384c0,33.1368,25.0703,60,56,60c16.3751,0,31.1091-7.5312,41.3475-19.5352   C172.2746,176.7617,150.4622,158.5937,138.509,130.4297z" /><path d="M69.8059,125.1445c0,0-26,32-22,44s50,20,50,20s-13.6485-18.0548-18-28   C74.8254,149.7577,69.8059,125.1445,69.8059,125.1445z" /><path d="M105.8059,66.1133c0,0-60.7541-88.3712-99.4181-36.8244c-21.7892,29.0508,16.1836,45.5472,53.3908,47.8712   C88.1574,78.9337,105.8059,66.1133,105.8059,66.1133z" /><ellipse cx="133.8058" cy="29.1445" rx="31.9983" ry="18.0013" transform="matrix(0.5 -0.866 0.866 0.5 41.6674 130.4554)" /></g>
					</svg>
					<h1 className='aside__header__h1'>Пчёлка</h1>
				</div>
			</Link>
		</header>
	);
};

export default Header;