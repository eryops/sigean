<template>
	<div :class="{ 'flipper': imgText }" v-if="bgImg">
		<div :class="[{ 'flipper-card': imgText }, 'image-component-container', imgRatio]">
			<div :class="[bgImg, { 'front': imgText },'image-component']">
				<h3 v-if="imgTitle" :class="[color + '-before-corner', imgTitlePos]">{{ imgTitle }}</h3>
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
			default: () => 'ratio-16-9'
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
		color: {
			default: () => 'blue'
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
		background-position: bottom;
		position: absolute;
		top: 0;
		bottom: 0;
		&-container {
			position: relative;
			margin: 1rem 0;
		}
		h3 {
			margin: 0;
			position: absolute;
			z-index: 1;
			&:before {
				content: '';
				position: absolute;
				z-index: -1;
				border-style: solid;
			}
			&.tl {
				top: 0;
				left: 0;
				padding-left: 0.5rem;
				&:before {
					top: 0;
					left: 0;
					border-width: 15vw 66vw 0 0;
					@include media-breakpoint-up(sm) {
						border-width: 4.5rem 20rem 0 0;
					}
				}
			}
			&.tr {
				top: 0;
				right: 0;
				padding-right: 0.5rem;
				&:before {
					right: 0;
					top: 0;
					border-width: 0 66vw 15vw 0;
					@include media-breakpoint-up(sm) {
						border-width: 0 20rem 4.5rem 0;
					}
				}
			}
			&.br {
				bottom: 0;
				right: 0;
				padding-right: 0.5rem;
				&:before {
					bottom: 0;
					right: 0;
					border-width: 0 0 15vw 66vw;
					@include media-breakpoint-up(sm) {
						border-width: 0 0 4.5rem 20rem;
					}
				}
			}
			&.bl {
				bottom: 0;
				left: 0;
				padding-left: 0.5rem;
				&:before {
					bottom: 0;
					left: 0;
					border-width: 15vw 0 0 66vw;
					@include media-breakpoint-up(sm) {
						border-width: 4.5rem 0 0 20rem;
					}
				}
			}
		}
		p {
			padding: 1rem;
		}
	}
}
</style>
