<template>
<div class="table-div">
    <v-data-table
      :headers="headers"
      :items="beers"
      item-key="name"
      class="elevation-1"
      dense
      :search="search"
    >
      <template v-slot:top>
        <v-row class="first-row">
          <v-col>
        <v-text-field
        class="search-input"
          v-model="search"
          label="Search"
        ></v-text-field>
         </v-col>
         <v-col> 
        <v-text-field
        class="search-input"
              v-model="abv"
              type="number"
              label="ABV less than:"
            ></v-text-field>
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
        beers: [{
        }],
      }
    },
    computed: {
      headers () {
        return [
          {
            text: 'Beers name',
            align: 'start',
            value: 'name',
          },
          {
            text: 'Image',
            value: 'image_url',

          },
          { text: 'Tagline', value: 'tagline' },
          { text: 'ABV-Alcohol By Volume', value: 'abv',
          filter: value => {
              if (!this.abv) return true
              return value < parseInt(this.abv)
            }},
            { text: 'Description', value: 'description' },
          { text: 'Food pairing', value: 'food_pairing' },
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
  color: #1f2224 !important;
  font-size: 18px !important;
  letter-spacing: 1px;
  margin: 0 150px !important;
  background-color:#BBDEFB;
  height: 50px !important;
  padding: 0 i !important;
}

td{
  font-family: 'Roboto Mono', monospace;
  font-size: 17px !important;
  font-weight: 600;
}

tbody{
  background-image: linear-gradient(180deg, #E3F2FD, #BBDEFB);
  color: #3E2723 !important;
}

label{
  font-size: 20px !important;
  color: #4E342E !important;
}

.search-input  {
  margin: 0 !important;
  padding: 10px 20px !important;
  background-color:#BBDEFB;
  border-radius: 10px;
}

.table-div{
 width: 95%;
 margin: auto;
}

.first-row{
  margin: 0 !important;
  padding: 0 !important;
  height: 100px !important;
}


</style>