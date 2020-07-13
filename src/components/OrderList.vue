<!-- Vue component for displaying orders in a list form -->
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
	<table class="table table-striped"
			:class="[{'table-dark':false}, 'table-bordered']">
		<thead class="thead-dark">
			<th>#</th>
			<th>Guest Id</th>
			<th>Products</th>
			<th>Price</th>
			<th>Quantity</th>
			<th>Total</th>
		</thead>
		<tbody v-cloak>
			<tr v-for="(a,index) in orders"
			:key="a.id"
			:class="{highlight:isMissingData(a), 'shadow-sm':true}">
				<td>{{indexes(index)}}</td>
				<td>{{a.guest_id}}</td>
				<td>{{a.name}}</td>
				<td>{{formatCurrency(a.price)}}</td>
				<td>{{a.quantity}}</td>
				<td>{{formatCurrency(a.price * a.quantity)}}</td>
			</tr>
		</tbody>
	</table>
</div>
</template>

<script type="text/javascript">
export default {
	name: "orderList",
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
		isMissingData: function(a){
			return (!a.id);
		},
		indexes(i){
			return (i+1+".");
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
	}
</style>