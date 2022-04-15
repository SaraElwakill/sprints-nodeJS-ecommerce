/** @format */

import "./card.scss";

export default function Card() {
	return (
		<div className='card'>
			<div className='flip-card'>
				<div className='flip-card-inner'>
					<div className='flip-card-front'>
						<img
							src='a1.jpg'
							alt='Avatar'
							style={{ width: "300px", height: "300px" }}
						/>
					</div>
					<div className='flip-card-back'>
						<img
							src='a2.jpg'
							alt='Avatar'
							style={{ width: "300px", height: "300px" }}
						/>
						<button> ADD TO CART </button>
					</div>
				</div>
			</div>
			<div className='card-title'>
				<h3> crystal light </h3>
				<h3> 550$ </h3>
			</div>
		</div>
	);
}
