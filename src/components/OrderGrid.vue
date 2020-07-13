<!-- Vue component for displaying orders in a Card form -->
<template> 
<div class="Card mt-5">
	<transition name="shooting-star">
		<div class="m3" style="position:absolute; left:125px;top:200px" v-cloak v-if="numOrders > 0 && showSummary">
			<p>Showing {{numOrders}} orders</p>
		</div>
	</transition>
	<div class="m3" style="position:absolute; left:125px;top:225px">
		<a href="#" @click="showSummary=!showSummary">Show/Hide Summary</a>
	</div>
	<div class="row">
		<div v-for="(a,index) in orders"
			:key="a.id"
			class="card ml-5 mb-5" style="width: 18rem;">
			<div class="card-body text-justify">
				<h5 class="card-title text-bold">{{indexes(index)}}</h5>
				<p class="card-text">{{guestId(a.guest_id)}}</p>
				<p class="card-text">{{product(a.name)}}</p>
				<p class="card-text">{{price(a.price)}}</p>
				<p class="card-text">{{quantity(a.quantity)}}</p>
				<p class="card-text">{{total(a.price,a.quantity)}}</p>
			</div>
		</div>
	</div>
</div>
</template>

<script type="text/javascript">
export default {
	name: "orderGrid",
	props: ['orders'],
	data(){
		return {
			showSummary:true
		};
	},
	computed: {
		numOrders: function(){
			return this.orders.length;
		}
	},
	methods: {
		isMissingData(a){
			return (!a.id);
		},
		indexes(i){
			return (i+1+".");
		},
		guestId(g){
			return (`Guest Id: ${g}`); 
		},
		product(p){
			return (`Products: ${p}`); 
		},
		quantity(q){
			return (`Quantity: ${q}`); 
		},
		price(p){
			return ("Price: "+ this.formatCurrency(p)); 
		},
		total(p,q){
			return ("Total: "+ this.formatCurrency(p*q)); 
		},
		formatCurrency(c){
			return ((c>0) ? ("£"+c) : ("£"+c));
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
	.summary{
		position: absolute; 
		left: 100px;
		top: 275px;
	}
</style>