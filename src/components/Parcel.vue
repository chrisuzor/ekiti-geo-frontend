<template>
  <v-app>
    <v-main v-if="username">
      <v-container>
        <h2>Vuetify Table</h2> 
        <v-data-table :headers="headers" :items="entries" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-container>
    </v-main>
    <h3 v-if="!username"> Log in to view our electronic data </h3>
  </v-app>
</template>


<script>
//import axios from 'axios'
import {mapGetters} from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Parcels',
    data() {
        return {
            headers: [
                {value: 'parcel_id', text: 'ID'},
                {value: 'location_state', text: 'State'},
                {value: 'location_city_or_town', text: 'City or Town'},
                {value: 'location_lga',text: 'LGA'},
                {value: 'location_parcel_number', text: 'Parcel Number'},
                {value: 'location_streetname', text: 'Street Name'},
                {value: 'location_coord_latitude', text: 'Latitude'},
                {value: 'location_coord_longitude', text: 'Longitude'},
                {value: 'type_property_occupancy_type', text: 'Property/Occupany Type'},
                {value: 'location_ward', text: 'Ward'},
                {value: 'parcel_main_use', text: 'Main Use'},
                {value: 'parcel_main_use_others', text: 'Main Use (others)'},
                {value: 'parcel_title_type', text: 'Title type'},
                {value: 'parcel_title_type_others', text: 'Title type(Others)'},
                {value: 'parcelfenced', text: 'Fenced?'},
                {value: 'parcel_have_swimming_pool', text: 'Swimming Pool?'},
                {value: 'parcel_have_generator', text: 'Generator?'},
                {value: 'parcel_area', text: 'Area'},
                {value: 'parcel_main_water_supply', text: 'Main Water Supply'},
                {value: 'parcel_main_electricity_supply', text: 'Main Electricity Supply'},
                {value: 'parcel_waste_disposal_system', text: 'Waste Disposal System'},
                {value: 'parcel_main_sewage', text: 'Main Sewage'},
                {value: 'owner_type', text: 'Owner Type'},
                {value: 'owner_name', text: 'Owner Name'},
                {value: 'parcellegalentityname', text: 'Legal name'},
                {value: 'parcel_owner_nin', text: 'Owner NIN'},
                {value: 'parcel_owner_tin', text: 'Owner TIN'},
                {value: 'owner_gender', text: 'Gender'},
                {value: 'parcel_owner_marital', text: 'Marital Status'},
                {value: 'parcel_owner_phone_home', text: 'Mobile (Home)'},
                {value: 'parcel_owner_phone_mobile', text: 'Mobile(Work)'},
                {value: 'parcel_owner_email', text: 'Email'},
                {value: 'owner_parcel_number', text: 'Street Number'},
                {value: 'owner_street_name', text: 'Owner Street Name'},
                {value: 'owner_ward', text: 'Owner ward'},
                {value: 'owner_lga', text: 'Owner LGA'},
                {value: 'owner_state', text: 'Owner State'}
            ],
            entries: []
        }
    },
    // components: {
    //     TableData
    // },
    // mounted(){
    //     this.getParcels().then(res => {
    //         this.entries = res
    //     })
    // },
    // methods: {
    //     async getParcels(){
    //     const response = await axios.get('parcels/');
    //     return response.data
    // }
    // },
     computed: {
        ...mapGetters(['username'])
    }
    
}
</script>