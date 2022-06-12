<template>
    <table class="table" id="parceltable">
        <thead>
            <tr>
                <th v-for="th in tableHeader" :key="th">
                    <div class="between:flex center:items">
                        <span>{{th.text}}</span>
                        <span>
                            +
                        </span>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="td in tableData" :key="td">
                <td>{{td.parcel_id}} </td>
                 <td>{{td.location_state}}</td>
                 <td>{{td.location_city_or_town}}</td>
                 <td>{{td.location_lga}}</td>
                 <td>{{td.location_parcel_number}}</td>
                 <td>{{td.location_streetname}}</td>
                 <td>{{td.location_coord_latitude}}</td>
                 <td>{{td.location_coord_longitude}}</td>
                 <td>{{td.type_property_occupancy_type}}</td>
                 <td>{{td.location_ward}}</td>
                 <td>{{td.parcel_main_use}}</td>
                 <td>{{td.parcel_main_use_others}}</td>
                 <td>{{td.parcel_title_type}}</td>
                 <td>{{td.parcel_title_type_others}}</td>
                  <td>{{td.parcelfenced}}</td>
                 <td>{{td.parcel_have_swimming_pool}}</td>
                 <td>{{td.parcel_have_generator}}</td>
                 <td>{{td.parcel_area}}</td>
                 <td>{{td.parcel_main_water_supply}}</td>
                 <td>{{td.parcel_main_electricity_supply}}</td>
                 <td>{{td.parcel_waste_disposal_system}}</td>
                 <td>{{td.parcel_main_sewage}}</td>
                 <td>{{td.owner_type}}</td>
                 <td>{{td.owner_name}}</td>
                 <td>{{td.parcellegalentityname}}</td>
                 <td>{{td.parcel_owner_nin}}</td>
                 <td>{{td.parcel_owner_tin}}</td>
                 <td>{{td.owner_gender}}</td>
                 <td>{{td.parcel_owner_marital}}</td>
                 <td>{{td.parcel_owner_phone_home}}</td>
                 <td>{{td.parcel_owner_phone_mobile}}</td>
                 <td>{{td.parcel_owner_email}}</td>
                 <td>{{td.owner_parcel_number}}</td>
                 <td>{{td.owner_street_name}}</td>
                 <td>{{td.owner_ward}}</td>
                 <td>{{td.owner_lga}}</td>
                 <td>{{td.owner_state}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'TableData', 
    props: {
        columns: Array,
        entries: Array
    },
    computed: {
        tableHeader() {
            return this.columns || []
        },
        tableData() {
        return this.entries || []
        }
    }
    
}
</script>
