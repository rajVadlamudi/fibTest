<!-- Vue component for displaying tabs for Guests and Oders-->
<template>
	<div class="container">
        <br>
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-item">
            <a class="nav-link" @click.prevent="setActive('guest')" :class="{ active: isActive('guest') }" href="#guest">Guests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="setActive('order')" :class="{ active: isActive('order') }" href="#order">Orders</a>
          </li>
        </ul>
        <div class="tab-content py-3" id="myTabContent">
            <div class="tab-pane fade" :class="{ 'active show': isActive('guest') }" id="guest">
                <!-- Drop down menu -->
                <div style="position:absolute; right:125px;top:180px"><LABEL>Views:</LABEL><br><select v-model="viewGuestOption"><option value="0">ListView</option><option value="1">CardView</option></select></div>
                <div v-if="viewGuestOption=='0'"><GuestList :guests="guestCollection"/></div>
                <div v-if="viewGuestOption=='1'"><GuestGrid :guests="guestCollection"/></div>
            </div>
          <div class="tab-pane fade" :class="{ 'active show': isActive('order') }" id="order">
                <!-- Drop down menu -->
                <div style="position:absolute; right:125px;top:180px"><LABEL>Views:</LABEL><br><select v-model="viewOrderOption"><option value="0">ListView</option><option value="1">CardView</option></select></div>
                <div v-if="viewOrderOption=='0'"><OrderList :orders="orderCollection"/></div>
                <div v-if="viewOrderOption=='1'"><OrderGrid :orders="orderCollection"/></div>
          </div>
        </div>
  </div>
</template>
<script type="text/javascript">
import GuestList from './GuestList.vue'
import OrderList from './OrderList.vue'
import GuestGrid from './GuestGrid.vue'
import OrderGrid from './OrderGrid.vue'

export default {
	name:"tab",
    props: ['guestCollection','orderCollection'],
    data() {
        return {activeItem: 'guest',viewGuestOption: "0",viewOrderOption: "0" };
    },
    components:{GuestList,OrderList,GuestGrid,OrderGrid},
    methods: {
        isActive (menuItem) {
          return this.activeItem === menuItem
        },
        setActive (menuItem) {
          this.activeItem = menuItem
        }
    }
}
</script>
