<template>
	<section id="house">
		<div class="container">
			<b-row>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-house-entrence"
								imgTitle="Entré"
								imgTitlePos="bl"
								imgText="Framför entrén till huset finns en innergård med grill och matbord."/>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-house-entrence-yard"
								imgTitle="Innergården"
								imgTitlePos="tl"
								imgText="Över innergården slingrar det sig vinrankor."/>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-house-livingroom"
								imgTitle="Vardagsrum"
								imgTitlePos="br"
								imgText="Innanför köket, på bottenvåningen finns ett rymligt och bekvämt vardagsrum."/>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" sm="6" lg="3">
					<c-image 	bgImg="bg-img-component-house-kitchen"
								imgTitle="Köket"
								imgTitlePos="br"
								imgText="Köket med utsikt över innergården."
								imgPerRow="4"
								imgRatio="3-4"/>
				</b-col>
				<b-col cols="12" sm="6" lg="3">
					<c-image 	bgImg="bg-img-component-house-diningplace"
								imgTitle="Matplats"
								imgTitlePos="bl"
								imgPerRow="4"
								imgRatio="3-4"/>
				</b-col>
				<b-col cols="12" sm="6" lg="3">
					<c-image 	bgImg="bg-img-component-house-bathroom-shower"
								imgTitle="Dusch"
								imgTitlePos="tl"
								imgPerRow="4"
								imgRatio="3-4"/>
				</b-col>
				<b-col cols="12" sm="6" lg="3">
					<c-image 	bgImg="bg-img-component-house-bathroom-toilet"
								imgTitle="Toalett"
								imgTitlePos="tl"
								imgText="En av två toaletter i huset."
								imgPerRow="4"
								imgRatio="3-4"/>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="6">
					<c-image 	bgImg="bg-img-component-house-bedroom-first"
								imgTitle="Sovrum"
								imgTitlePos="br"
								imgPerRow="2"
								imgText="Det ena stora sovrummet ligger på andra våningen."/>
				</b-col>
				<b-col cols="12" md="6">
					<c-image 	bgImg="bg-img-component-house-terrace-second-floor"
								imgTitle="Terrass"
								imgTitlePos="br"
								imgPerRow="2"
								imgText="Terrassen på andra våningen har utsikt över innergården."/>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="6">
					<c-image 	bgImg="bg-img-component-house-bedroom-second"
								imgTitle="Sovrum"
								imgTitlePos="tl"
								imgPerRow="2"
								imgText="Det andra stora sovrummet ligger på tredje våningen."/>
				</b-col>
				<b-col cols="12" md="6">
					<c-image 	bgImg="bg-img-component-house-bedroom-extra"
								imgTitle="Bäddsoffa"
								imgTitlePos="bl"
								imgPerRow="2"/>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-house-terrace"
								imgRatio="8-9"
								imgTitle="Takterrass"
								imgTitlePos="br"
								imgText="På takterrassen finns plats för vila och umgänge, med plats för matbord."/>
				</b-col>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-house-terrace-view"
								imgRatio="8-9"
								imgTitle="Utsikt"
								imgTitlePos="tr"
								imgText="Utsikt över taken från takterrassen."/>
				</b-col>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-house-terrace-indoor"
								imgRatio="8-9"
								imgTitle="Inomhus"
								imgTitlePos="br"
								imgText="Takterrassen har även en inomhusdel med skjutdörrar i glas så man kan njuta av utsikten även en dag när vädret inte är det bästa."/>
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
