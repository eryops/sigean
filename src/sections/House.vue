<template>
	<section id="house">
		<div class="container">
			<b-row>
				<b-col cols="12" sm="6">
					<c-image 	bgImg="bg-img-component-entrence"
								imgTitle="Entré"
								imgTitlePos="bl"
								imgText="Framför entrén till huset finns en innergård med grill och matbord."
								imgPerRow="2"/>
				</b-col>
				<b-col cols="12" sm="6">
					<c-image 	bgImg="bg-img-component-entrence-yard"
								imgTitle="Innegården"
								imgTitlePos="tl"
								imgText="Över innegården slingrar det sig vinrankor."
								imgPerRow="2"/>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-terrace"
								imgRatio="ratio-8-9"
								imgTitle="Takterass"
								imgTitlePos="br"
								imgText="På takterassen finns plats för vila och umgänge, med plats för matbord."/>
				</b-col>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-terrace-view"
								imgRatio="ratio-8-9"
								imgTitle="Utsikt"
								imgTitlePos="tr"
								imgText="Utsikt över taken från takterassen."/>
				</b-col>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-terrace-indoor"
								imgRatio="ratio-8-9"
								imgTitle="Inomhus"
								imgTitlePos="br"
								imgText="Takterassen har även en inomhusdel med skjutdörrar i glas så man kan njuta av utsikten även en dag när vädret inte är det bästa."/>
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
