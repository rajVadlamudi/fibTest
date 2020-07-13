<!-- Vue component for displaying guests in a list form -->
<template> 
<div class="Card mt-5">
	<transition name="shooting-star">
		<div class="m3" style="position:absolute; left:125px;top:200px" v-cloak v-if="numGuests > 0 && showSummary">
			<p>Showing {{numGuests}} guests</p>
		</div>
	</transition>
	<div class="m3" style="position:absolute; left:125px;top:225px">
		<a href="#" @click="showSummary=!showSummary">Show/Hide Summary</a>
	</div>
	<div class="row">
		<div v-for="(a,index) in guests"
			:key="a.id"
			class="card ml-5 mb-5" style="width: 18rem;">
			<div class="card-body text-justify">
				<h5 class="card-title text-bold">{{index+1+"."}}</h5>
				<p class="card-text">{{fullName(a.first_name,a.last_name)}}</p>
				<p class="card-text">{{getEmail(a.email)}}</p>
				<p class="card-text">{{getGender(a.gender)}}</p>
				<p class="card-text">{{dateVisited(a.visited)}}</p>
				<p class="card-text">{{timeVisited(a.visited)}}</p>
			</div>
		</div>
	</div>
</div>
</template>

<script type="text/javascript">
export default {
	name: "guestGrid",
	props: ['guests'],
	data(){
		return {
			showSummary:true
		};
	},
	computed: {
		numGuests: function(){
			return this.guests.length;
		}
	},
	methods: {
		isMissingData(a){
			return (!a.id);
		},
		getEmail(e){
			return (`Email: ${e}`);
		},
		getGender(g){
			return (`Gender: ${g}`);
		},
		fullName(first,last){
			return (`Name: ${first} ${last}`);
		},
		dateVisited(d){
			return ("Date: "+d.split(" ")[0]);
		},
		timeVisited(t){
			return ("Time: "+t.split(" ")[1]);
		}
	}
}

</script>

<style type="text/css">
	.highlight{
		border: solid 3px red;
		color: red;
	}
	.shooting-star-leave-to, .shooting-star-enter{
		transform: translateX(150px) rotate(30deg);
		opacity: 0;
	}
	.shooting-star-enter-active, .shooting-leave-active{
		transition: all .5s ease;
		display: flex;
	}
</style>