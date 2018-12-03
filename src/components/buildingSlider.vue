<template>
	<div class="slider">
		<div class="slider__slide">
			<img v-bind:src="actaualImagePath" class="slider__poster">
			<div class="slider__arrow slider__arrow--right" v-on:click="nextSlide">
				<div class="arrow__wrapp">
					<div class="arrow arrow__left"></div>
				</div>
			</div>
			<div class="slider__arrow slider__arrow--left" v-on:click="previosSlide">
				<div class="arrow__wrapp">
					<div class="arrow arrow__right"></div>
				</div>
			</div>
			
		</div>
		<div class="slider__nav">
			<ul class="slider__nav-list">
				<li v-for="image in images">
					<img v-bind:src="path + image" v-on:click="showImage" class="slider__nav-img">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			images:{
				type: Array,
				required: true
			} 			
		},
		data(){
			return {
				path: './src/assets/img/',
				displayedImage: this.images[0]
			}
		},
		computed:{
			actaualImagePath(){
				return this.path + this.displayedImage;
			}
		},
		methods:{
			showImage(event){
				this.displayedImage = event.toElement.src.split('/').pop();
			},
			nextSlide(){
				let actualIndex = this.images.indexOf(this.displayedImage);
				this.displayedImage = actualIndex >= this.images.length-1 ? this.images[0] : this.images[++actualIndex];
			},
			previosSlide(){
				let actualIndex = this.images.indexOf(this.displayedImage);
				this.displayedImage = actualIndex <= 0 ? this.images[this.images.length-1] : this.images[--actualIndex];
			}
		}
	}
</script>

<style lang="scss" scoped>
.slider{
	display: grid;
	grid-template-columns: minmax(400px, 4fr) minmax(100px, 1fr);
	grid-column-gap: 10px;
	max-width: 768px; 
	overflow-y: hidden;
	&__poster{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__slide{
		display: block;
		position: relative;
		min-height: 300px;
		max-height: 320px;
	}
	&__nav-list{
		display: flex;
		flex-direction: column;
		list-style: none;
		margin: 0;
		padding: 0;
		overflow-y: scroll;
		min-height: 300px;
		max-height: 320px;
		&:nth-child{
			margin-bottom: 5px;
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
	&__nav-img{
		max-height: 100px;
		width: 100%;
		cursor: pointer;
	}
	&__arrow{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 40px;
		height: 40px;
		border: 3px solid white;
		border-radius: 50%;
		cursor: pointer;
		&--left{
			left: 20px;
		}
		&--right{
			right: 20px;
		}
	}
}

.arrow {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 0;
	height: 0;
	border: 10px solid transparent;
	&__right{
		border-right-color: white;
  	border-left: 0;
  	transform: translate(-65%,-50%);
	}
	&__left{
		border-left-color: white;
  	border-right: 0;
  	transform: translate(-30%,-50%);
	}
	&__wrapp{
		position: relative;
		width: 40px;
		height: 40px;

	}
}
</style>