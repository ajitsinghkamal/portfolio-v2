<!--
----------------
my original codepen https://codepen.io/AjitsinghKamal/pen/EXoaNJ
---------------
-->

<div class="pen">
	<div class="spot">
		<div class="head">
			<div class="hair">
				<div class="hair-lock" />
			</div>
			<div class="face">
				<div class="tiara">
					<svg class="twinkle" id="small">
						<path
							d="M 0 20 Q 20 20 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 "
						/>
					</svg>
					<div class="tiara--jewel" />
				</div>
				<div class="eyebrows">
					<div class="brow--left" />
					<div class="brow--right" />
				</div>
				<div class="eyes">
					<div class="eye" />
					<div class="eye" />
				</div>
				<div class="nose" />
				<div class="lips" />
			</div>
		</div>
		<div class="neck" />
		<div class="torso">
			<div class="hand" />
			<div class="armor">
				<svg class="plate">
					<path
						d="M 0 0 Q 0 20 30 20 Q 60 60 20 160 L 0 160 Q 50 50 5 30 Q 0 40 0 10 Z"
					/>
					<path
						d="M 130 0 Q 120 20 110 20 Q 110 80 110 160 L 140 160 Q 110 80 120 40 Q 120 30 130 30 Z"
					/>
				</svg>
				<div class="signia">
					<svg>
						<path
							d="M 20 30 Q 40 0 60 20  Q 70 -10 80 20 Q 95 0 110 30"
						/>
					</svg>
				</div>
			</div>
			<div class="hand" />
		</div>
	</div>
</div>

<style lang="scss">
	$color_skin: #eacda2;
	$color_hair: #3c3a3a;
	$color_shadow: #595959;
	$color_gold: #debb63;

	@mixin model($height, $width, $color) {
		width: $width;
		height: $height;
		background-color: $color;
	}

	@mixin flex($direction) {
		display: flex;
		flex-flow: $direction nowrap;
	}

	.pen {
		width: 100%;
		height: 100%;
		opacity: 0.7;
		@keyframes twinkle {
			0% {
				transform: scale(0) rotate(0deg);
				opacity: 0;
			}

			10% {
				transform: scale(1) rotate(180deg);
				opacity: 1;
			}
			20% {
				transform: scale(0) rotate(360deg);
				opacity: 0;
			}
			100% {
				transform: scale(0) rotate(0deg);
				opacity: 0;
			}
		}

		@keyframes faceup {
			0% {
				height: 94px;
			}
			50% {
				height: 84px;
			}
			100% {
				height: 84px;
			}
		}
		@media (hover: hover) {
			&:hover {
				.hair {
					height: 84px;
				}
			}
		}
	}
	.spot {
		transform: scale(0.4);
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		transform-origin: top;
		top: 30px;
	}
	.head {
		position: relative;
		@include model(170px, 160px, $color_skin);
		@include flex(column);
		border-radius: 0 0 90px 90px;

		&:before {
			position: absolute;
			content: "";
			@include model(280px, 150px, $color_shadow);
			z-index: -1;
		}

		.hair {
			@include model(94px, 160px, $color_hair);
			border-radius: 5px 5px 60% 0;
			margin-top: -40px;
			z-index: 2;
			will-change: height;
			transition: height 0.3s ease-in;
			&:before {
				@include model(330px, 30px, $color_hair);
				content: "";
				position: absolute;
				left: -20px;
				border-radius: 48px 0 0 40px;
			}

			&:after {
				@include model(330px, 30px, $color_hair);
				content: "";
				position: absolute;
				right: -20px;
				border-radius: 0 60px 40px 0;
			}
		}

		.face {
			z-index: 1;
			.eyes,
			.eyebrows {
				width: 100%;
				@include flex(row);
				justify-content: space-around;
			}
		}
	}

	.neck {
		@include model(50px, 37px, $color_skin);
		margin-top: -26px;
	}

	.tiara {
		@include model(30px, 100%, null);
		background-image: linear-gradient(
			to right,
			$color_gold,
			#fad579 40%
		);
		margin-top: -10px;
		border: 2px solid #a69261;

		&--jewel {
			position: relative;
			margin: 0 20px 0 60px;
			top: -10px;
			@include model(40px, 40px, $color_gold);
			border: 7px solid #a69261;
			transform: rotate(45deg);
		}
	}

	.eye {
		@include model(6px, 6px, #fff);
		border-radius: 50%;
		box-shadow: 2px 5px 0 5px $color_hair;
		margin-top: 4px;
		padding: 4px;
		margin-left: -4px;
	}

	%brow {
		@include model(0px, 30px, $color_hair);
		border: 2px solid $color_hair;
		border-radius: 4px;
	}
	.brow--left {
		@extend %brow;
		transform: rotate(10deg);
	}
	.brow--right {
		@extend %brow;
		transform: rotate(-10deg);
	}
	.nose {
		position: relative;
		height: 0;
		width: 0;
		border-right: 0px solid transparent;
		border-left: 6px solid $color_gold;
		border-bottom: 6px solid transparent;
		border-top: 6px solid transparent;
		margin-top: 20px;
		left: 50%;
		transform: translateX(100%);
	}

	.lips {
		position: relative;
		@include model(0, 18px, #9b4e4e);
		border: 4px solid #9b4e4e;
		left: 50%;
		transition: 0.4s linear;
		transform: translateX(-30%);
		margin-top: 15px;
		border-radius: 90% 70% 90% 90%;
	}

		.torso {
			@include model(160px, 210px, $color_skin);
			@include flex(row);
			margin-top: -5px;
			border-radius: 10px 10px 0 0;
			align-items: center;
			justify-content: center;
			.armor {
				position: relative;
				top: 38px;
				overflow-x: hidden;
				@include model(180px, 140px, #a21e1e);
				border-radius: 20% 20% 0 0;
				.signia {
					position: absolute;
					top: 0px;
					max-width: 100%;
					@include flex(row);
					justify-content: center;
					svg {
						path {
							fill: none;
							stroke: #debb63;
							stroke-width: 14;
							color: #a69261;
						}
					}
				}
			}
		}

		.hand {
			background-color: white;
		}

		.plate {
			position: absolute;
			bottom: 0px;
			max-width: 100%;
			path {
				fill: #842626;
				stroke-width: 4;
				stroke: #8e2828;
			}
		}

		.hair-lock {
			position: absolute;
			width: 30px;
			left: -30px;
		}

		#small {
			position: absolute;
			fill: white;
			z-index: 4;
			width: 50px;
			left: 40px;
			height: 50px;
			transition: 2.3s;
			transform-origin: 20px 20px;
		}

		.twinkle {
			animation: twinkle 4s infinite;
		}
</style>
