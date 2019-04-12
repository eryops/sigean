<template>
	<footer class="page-footer">
		<div class="container text-center">
			<p>Webbplatsen är skapad av <a href="mailto:johanna.liljecrantz@gmail.com">Johanna Liljecrantz</a></p>
			<p>Webbplatsen är skyddad under upphovsrättslagen och inget material på webbplatsen får användas utan tillåtelse.</p>
		</div>
	</footer>
</template>
<style lang="scss">
@import "~bootstrap/scss/functions";
@import '../assets/sass/variables';

.page-footer {
	background-color: rgba($color-orange, 0.9);
	padding-top: $space;
	padding-bottom: $space;
	p {
		padding-bottom: 0;
		font-size: 0.9rem;
	}
}
</style>
