import "../styles/pen.scss";

export default function Pen() {
	return (
		<div className="pen">
			<div className="spot">
				<div className="head">
					<div className="hair">
						<div className="hair-lock"></div>
					</div>
					<div className="face">
						<div className="tiara">
							<svg className="twinkle" id="small">
								<path d="M 0 20 Q 20 20 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 "></path>
							</svg>
							<div className="tiara--jewel"></div>
						</div>
						<div className="eyebrows">
							<div className="brow--left"></div>
							<div className="brow--right"></div>
						</div>
						<div className="eyes">
							<div className="eye"></div>
							<div className="eye"></div>
						</div>
						<div className="nose"></div>
						<div className="lips"></div>
					</div>
				</div>
				<div className="neck"></div>
				<div className="torso">
					<div className="hand"></div>
					<div className="armor">
						<svg className="plate">
							<path d="M 0 0 Q 0 20 30 20 Q 60 60 20 160 L 0 160 Q 50 50 5 30 Q 0 40 0 10 Z"></path>
							<path d="M 130 0 Q 120 20 110 20 Q 110 80 110 160 L 140 160 Q 110 80 120 40 Q 120 30 130 30 Z"></path>
						</svg>
						<div className="signia">
							<svg>
								<path d="M 20 30 Q 40 0 60 20  Q 70 -10 80 20 Q 95 0 110 30"></path>
							</svg>
						</div>
					</div>
					<div className="hand"></div>
				</div>
			</div>
		</div>
	);
}
