<template>
	<div id="house">
		<div class="container">
			<b-row>
				<b-col cols="12" sm="6">
					<c-image 	bgImg="bg-img-component-terrace"
								imgRatio="ratio-8-9"
								imgTitle="Taktreass"
								imgText="Landjaeger ham pork belly, kielbasa pork chop sirloin cow filet mignon cupim shankle short loin chuck chicken."/>
				</b-col>
				<b-col cols="12" sm="6">
					<c-image 	bgImg="bg-img-component-terrace"
								imgRatio="ratio-8-9"
								imgTitle="Taktreass"
								imgTitlePos="tr"/>
				</b-col>
			</b-row>
		</div>
	</div>
</template>
<script>
import CImage from '@/components/Image.vue'

export default {
	components: {
		CImage
	}
}
</script>
