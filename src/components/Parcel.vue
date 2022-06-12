<template>
  <div class="container">

  </div>  
  <TableData v-if="username" :columns="columns" :entries="entries" />
<h3 v-if="!username"> Log in to view our electronic data </h3>
</template>


<script>
import axios from 'axios'
import TableData from '../components/table/TableData.vue'
import {mapGetters} from 'vuex'
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Parcels',
    data() {
        return {
            columns: [
                {name: 'parcel_id', text: 'ID'},
                {name: 'location_state', text: 'State'},
                {name: 'location_city_or_town', text: 'City or Town'},
                {name: 'location_lga',text: 'LGA'},
                {name: 'location_parcel_number', text: 'Parcel Number'},
                {name: 'location_streetname', text: 'Street Name'},
                {name: 'location_coord_latitude', text: 'Latitude'},
                {name: 'location_coord_longitude', text: 'Longitude'},
                {name: 'type_property_occupancy_type', text: 'Property/Occupany Type'},
                {name: 'location_ward', text: 'Ward'},
                {name: 'parcel_main_use', text: 'Main Use'},
                {name: 'parcel_main_use_others', text: 'Main Use (others)'},
                {name: 'parcel_title_type', text: 'Title type'},
                {name: 'parcel_title_type_others', text: 'Title type(Others)'},
                {name: 'parcelfenced', text: 'Fenced?'},
                {name: 'parcel_have_swimming_pool', text: 'Swimming Pool?'},
                {name: 'parcel_have_generator', text: 'Generator?'},
                {name: 'parcel_area', text: 'Area'},
                {name: 'parcel_main_water_supply', text: 'Main Water Supply'},
                {name: 'parcel_main_electricity_supply', text: 'Main Electricity Supply'},
                {name: 'parcel_waste_disposal_system', text: 'Waste Disposal System'},
                {name: 'parcel_main_sewage', text: 'Main Sewage'},
                {name: 'owner_type', text: 'Owner Type'},
                {name: 'owner_name', text: 'Owner Name'},
                {name: 'parcellegalentityname', text: 'Legal name'},
                {name: 'parcel_owner_nin', text: 'Owner NIN'},
                {name: 'parcel_owner_tin', text: 'Owner TIN'},
                {name: 'owner_gender', text: 'Gender'},
                {name: 'parcel_owner_marital', text: 'Marital Status'},
                {name: 'parcel_owner_phone_home', text: 'Mobile (Home)'},
                {name: 'parcel_owner_phone_mobile', text: 'Mobile(Work)'},
                {name: 'parcel_owner_email', text: 'Email'},
                {name: 'owner_parcel_number', text: 'Street Number'},
                {name: 'owner_street_name', text: 'Owner Street Name'},
                {name: 'owner_ward', text: 'Owner ward'},
                {name: 'owner_lga', text: 'Owner LGA'},
                {name: 'owner_state', text: 'Owner State'}
            ],
            entries: [],
            showEntries: [5,10,15,25,50,72,100],
            currentEntries: 10,
            filteredEntires: []
        }
    },
    components: {
        TableData
    },
    mounted(){
        this.getParcels().then(res => {
            this.entries = res
            $("#parceltable").DataTable();
        })
    },
    methods: {
        async getParcels(){
        const response = await axios.get('parcels/');
        return response.data
    }
    },
     computed: {
        ...mapGetters(['username'])
    }
    
}
</script>