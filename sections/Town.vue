<template>
	<section id="town">
		<div class="container">
			<b-row>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-town-rotonde"
								imgTitle="La Rotonde"
								imgTitlePos="tr"
								imgText="En av de lokala pubarna som även erbjuder gratis Wifi."
								color="granit"/>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-town-center"
								imgTitle="Centrum"
								imgTitlePos="bl"
								imgText="Mitt emot La Rotonde finns fler barer och små butiker."
								color="granit"/>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-town-store"
								imgTitle="Butik"
								imgTitlePos="br"
								imgText="En av de små, lokala butikerna i Sigeans centrum."
								color="granit"/>
				</b-col>
			</b-row>
		</div>
	</section>
</template>
<script>
import CImage from '@/components/Image.vue'

export default {
	components: {
		CImage
	}
}
</script>
