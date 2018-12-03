import Vue from 'vue';
import _ from 'lodash';
import data from '../assets/data/data.js';

export default new Vue({
	data:{
		building : null
	},
	created(){
		this.building = data;
	}, 
	methods: {
		getImages(){
			return this.building.images;
		}
	}
})