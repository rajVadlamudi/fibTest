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
	<table class="table table-striped"
			:class="[{'table-dark':false}, 'table-bordered']">
		<thead class="thead-dark">
			<th>#</th>
			<th>Name</th>
			<th>Email</th>
			<th>Gender</th>
			<th>Date Visited</th>
			<th>Time</th>
		</thead>
		<tbody v-cloak>
			<tr v-for="(a,index) in guests"
			:key="a.id"
			:class="{highlight:isMissingData(a), 'shadow-sm':true}">
				<td>{{indexes(index)}}</td>
				<td>{{fullName(a.first_name,a.last_name)}}</td>
				<td>{{a.email}}</td>
				<td>{{a.gender}}</td>
				<td>{{dateVisited(a.visited)}}</td>
				<td>{{timeVisited(a.visited)}}</td>
			</tr>
		</tbody>
	</table>
</div>
</template>

<script type="text/javascript">
export default {
	name: "guestList",
	props: ['guests'],
	data(){
		return {
			showSummary:true
		};
	},
	computed: {
		numGuests(){
			return this.guests.length;
		}
	},
	methods: {
		isMissingData(a){
			return (!a.id);
		},
		indexes(i){
			return (i+1+".");
		},
		fullName(first,last){
			return (first+" "+last);
		},
		dateVisited(d){
			return d.split(" ")[0];
		},
		timeVisited(t){
			return t.split(" ")[1];
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
	}
</style>