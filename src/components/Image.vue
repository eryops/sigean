<template>
	<div :class="[{ 'flipper': imgText }, 'pb-default pt-default']" v-if="bgImg">
		<div :class="[{ 'flipper-card': imgText }, 'image-component-container', 'ratio-' + imgRatio]">
			<div :class="[bgImg, { 'front': imgText },'image-component']">
				<h3 v-if="imgTitle" :class="[color + '-before-corner', imgTitlePos, 'img-per-row-' + imgPerRow]">{{ imgTitle }}</h3>
			</div>
			<div v-if="imgText" :class="['image-component back', color + '-bg']">
				<p>{{ imgText }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		bgImg: {
			default: () => false
		},
		imgRatio: {
			default: () => '16-9'
		},
		imgTitle: {
			default: () => false
		},
		imgTitlePos: {
			default: () => 'tl'
		},
		imgText: {
			default: () => false
		},
		imgPerRow: {
			default: () => '3'
		},
		color: {
			default: () => 'orange'
		}
	}
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";

@import '../assets/sass/variables';

@import "~bootstrap/scss/mixins/breakpoints";
@import "~bootstrap/scss/mixins/grid-framework";
@import "~bootstrap/scss/mixins/grid";
@import "~bootstrap/scss/grid";

.image {
	&-component {
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		top: 0;
		bottom: 0;
		&-container {
			position: relative;
		}
		h3 {
			margin: 0;
			position: absolute;
			z-index: 1;
			font-size: 4vw;
			line-height: 1;
			@include media-breakpoint-up(sm) {
				font-size: 2vw;
			}
			@include media-breakpoint-up(lg) {
				font-size: 1.6vw;
			}
			@include media-breakpoint-up(xl) {
				font-size: 1.2rem;
			}

			&:before {
				content: '';
				position: absolute;
				z-index: -1;
				border-style: solid;
			}
			&.tl {
				top: 0;
				left: 0;
				padding-left: 0.7rem;
				padding-top: 0.7rem;
				&:before {
					top: 0;
					left: 0;
					border-width: 13vw 58vw 0 0;
					@include media-breakpoint-up(sm) {
						border-width: 6.5vw 39vw 0 0;
					}
					@include media-breakpoint-up(xl) {
						border-width: 4rem 21rem 0 0;
					}
				}
				&.img-per-row-3 {
					&:before {
						@include media-breakpoint-up(lg) {
							border-width: 5vw 24vw 0 0;
						}
						@include media-breakpoint-up(xl) {
							border-width: 4rem 21rem 0 0;
						}
					}
				}
				&.img-per-row-4 {
					&:before {
						@include media-breakpoint-up(lg) {
							border-width: 6.5vw 22vw 0 0;
						}
						@include media-breakpoint-up(xl) {
							border-width: 4rem 15rem 0 0;
						}
					}
				}

			}
			&.tr {
				top: 0;
				right: 0;
				padding-right: 0.7rem;
				padding-top: 0.7rem;
				&:before {
					right: 0;
					top: 0;
					border-width: 0 58vw 13vw 0;
					@include media-breakpoint-up(sm) {
						border-width: 0 39vw 6.5vw 0;
					}
					@include media-breakpoint-up(xl) {
						border-width: 0 21rem 4rem 0;
					}
				}
				&.img-per-row-3 {
					&:before {
						@include media-breakpoint-up(lg) {
							border-width: 0 24vw 5vw 0;
						}
						@include media-breakpoint-up(xl) {
							border-width: 0 21rem 4rem 0;
						}
					}
				}
				&.img-per-row-4 {
					&:before {
						@include media-breakpoint-up(lg) {
							border-width: 0 6.5vw 22vw 0;
						}
						@include media-breakpoint-up(xl) {
							border-width: 0 4rem 15rem;
						}
					}
				}

			}
			&.br {
				bottom: 0;
				right: 0;
				padding-right: 0.7rem;
				padding-bottom: 0.7rem;
				&:before {
					bottom: 0;
					right: 0;
					border-width: 0 0 13vw 58vw;
					@include media-breakpoint-up(sm) {
						border-width: 0 0 6.5vw 39vw;
					}
					@include media-breakpoint-up(xl) {
						border-width: 0 0 4rem 21rem;
					}
				}
				&.img-per-row-3  {
					&:before {
						@include media-breakpoint-up(lg) {
							border-width: 0 0 5vw 24vw;
						}
						@include media-breakpoint-up(xl) {
							border-width: 0 0 4rem 21rem;
						}
					}
				}
				&.img-per-row-4 {
					&:before {
						@include media-breakpoint-up(lg) {
							border-width: 0 0 6.5vw 22vw;
						}
						@include media-breakpoint-up(lg) {
							border-width: 0 0 4rem 15rem;
						}
					}
				}

			}
			&.bl {
				bottom: 0;
				left: 0;
				padding-left: 0.7rem;
				padding-bottom: 0.7rem;
				&:before {
					bottom: 0;
					left: 0;
					border-width: 13vw 0 0 58vw;
					@include media-breakpoint-up(sm) {
						border-width: 6.5vw 0 0 39vw;
					}
					@include media-breakpoint-up(xl) {
						border-width: 4rem 0 0 21rem;
					}
				}
				&.img-per-row-3  {
					&:before {
						@include media-breakpoint-up(lg) {
							border-width: 5vw 0 0 24vw;
						}
						@include media-breakpoint-up(xl) {
							border-width: 4rem 0 0 21rem;
						}
					}
				}
				&.img-per-row-4 {
					&:before {
						@include media-breakpoint-up(lg) {
							border-width: 6.5vw 0 0 22vw;
						}
						@include media-breakpoint-up(xl) {
							border-width: 4rem 0 0 15rem;
						}
					}
				}
			}
		}
		p {
			padding: 1rem;
			text-align: center;
		}
	}
}
</style>
