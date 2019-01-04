<template>
	<section id="house">
		<div class="container">
			<b-row>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-entrence"
								imgTitle="Entré"
								imgTitlePos="bl"
								imgText="Framför entrén till huset finns en innergård med grill och matbord."/>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-entrence-yard"
								imgTitle="Innegården"
								imgTitlePos="tl"
								imgText="Över innegården slingrar det sig vinrankor."/>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-livingroom"
								imgTitle="Vardagsrum"
								imgTitlePos="br"
								imgText="Innanför köket, på bottenvångingen finns ett rymligt och bekvämt vardagsrum."/>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" sm="6" lg="3">
					<c-image 	bgImg="bg-img-component-kitchen"
								imgTitle="Köket"
								imgTitlePos="br"
								imgText="Köket med utsikt över innergården."
								imgPerRow="4"
								imgRatio="3-4"/>
				</b-col>
				<b-col cols="12" sm="6" lg="3">
					<c-image 	bgImg="bg-img-component-diningplace"
								imgTitle="Matplats"
								imgTitlePos="bl"
								imgPerRow="4"
								imgRatio="3-4"/>
				</b-col>
				<b-col cols="12" sm="6" lg="3">
					<c-image 	bgImg="bg-img-component-bathroom-shower"
								imgTitle="Dusch"
								imgTitlePos="tl"
								imgPerRow="4"
								imgRatio="3-4"/>
				</b-col>
				<b-col cols="12" sm="6" lg="3">
					<c-image 	bgImg="bg-img-component-bathroom-toilet"
								imgTitle="Toalett"
								imgTitlePos="tl"
								imgText="En av två toaletter i huset."
								imgPerRow="4"
								imgRatio="3-4"/>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-bedroom-first"
								imgTitle="Sovrum"
								imgTitlePos="br"
								imgText="Det ena stora sovrummet ligger på andra vångingen."/>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-terrace-second-floor"
								imgTitle="Terrass"
								imgTitlePos="br"
								imgText="Terrassen på andra våningen har utsikt över innegården."/>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<c-image 	bgImg="bg-img-component-bedroom-second"
								imgTitle="Sovrum"
								imgTitlePos="tl"
								imgText="Det andra stora sovrummet ligger på tredje vångingen."/>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-terrace"
								imgRatio="8-9"
								imgTitle="Taktterass"
								imgTitlePos="br"
								imgText="På takterassen finns plats för vila och umgänge, med plats för matbord."/>
				</b-col>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-terrace-view"
								imgRatio="8-9"
								imgTitle="Utsikt"
								imgTitlePos="tr"
								imgText="Utsikt över taken från takterassen."/>
				</b-col>
				<b-col cols="12" sm="6" lg="4">
					<c-image 	bgImg="bg-img-component-terrace-indoor"
								imgRatio="8-9"
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
