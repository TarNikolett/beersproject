<template>
<div class="table-div">
  <v-data-table
    :headers="headers"
    :items="beers"
    item-key="name"
    dense
    :search="search"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
    >
    <template v-slot:item.image_url="{ item }">
      <img :src="item.image_url">
    </template>
    <template v-slot:top>
      <v-row class="first-row">
        <v-col>
          <v-text-field
            class="search-filter-input"
            v-model="search"
            label="Search"
          >
          </v-text-field>
        </v-col>
        <v-col> 
          <v-text-field
            class="search-filter-input"
            v-model="abv"
            type="number"
            label="ABV less than:"
          >
          </v-text-field>
        </v-col>
      </v-row> 
    </template>
  </v-data-table>
</div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        abv: '',
        beers: [{}],
      }
    },
    computed: {
      headers () {
        return [
          { text: 'Beers name', value: 'name', width: 30},
          { text: 'Image', value: 'image_url', width: 30 },
          { text: 'Tagline', value: 'tagline', width: 35 },
          { text: 'ABV-Alcohol By Volume', value: 'abv', 
            filter: value => {
              if (!this.abv) return true
              return value < parseInt(this.abv)
            }, width: 50},
          { text: 'Description', value: 'description', width: 20, align: 'center'},
          { text: 'Food pairing', value: 'food_pairing', width: 80, align: 'center'},
        ]
      },
    },
    mounted() {
      fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => res.json())
      .then((data) => this.beers = data)
      .catch((err) => {console.log(err.message)})     
    }
  }
</script>

<style>

th{
  font-family: 'Akaya Telivigala', cursive;
  font-size: 20px !important;
  letter-spacing: 2px;
  color: #1f2224 !important;
  background-color:#BBDEFB;
  border: 0.5px solid #90bee4b6;
}

td{
  font-family: 'Roboto Mono', monospace;
  font-size: 18px !important;
  font-weight: 600;
  border: 0.5px solid #90bee4b6;
}

tbody{
  background-image: linear-gradient(180deg, #E3F2FD, #BBDEFB);
  color: #3E2723;
}

label{
  font-size: 20px !important;
  color: #3E2723 !important;
  font-family: 'Akaya Telivigala', cursive;
}

img{
  width: 50px;
  padding: 10px 0;
} 

.search-filter-input{
  font-size: 20px !important;
  margin: 0 !important;
  padding: 10px 20px;
  background-color:#BBDEFB;
  border-radius: 10px;
}

.table-div{
 width: 95%;
 margin: auto;
}

.first-row{
  margin: 0 !important;
  height: 100px;
}

.v-data-footer {
  font-size: 15px !important;
  background-color:#BBDEFB;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>