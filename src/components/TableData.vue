<template>
<!-- <v-card>
    <v-card-title class="search-input">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search beers"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-simple-table
  :custom-filter="filteredbyABV">
    <template v-slot:default >
      <thead>
        <tr>
          <th>
            Beer Name
          </th>
          <th>
            Images
          </th>
          <th>
            Tagline
          </th>
          <th id="filtered-column">
            ABV-Alcohol By Volume
            <v-text-field
              v-model="abv"
              type="number"
              label="Less than"
            ></v-text-field>
          </th>
          <th>
            Description
          </th>
          <th class="food-list">
            Food pairing
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in searchedBeers"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td><img :src="item.image_url"></td>
          <td>{{ item.tagline }}</td>
          <td id="abv-column">{{ item.abv }}</td>
          <td>{{ item.description }}</td>
          <td class="food-list">
          <ul v-for="food in item.food_pairing"
          :key="food">
            <li>{{food}}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card> -->
<div class="table-div">
    <v-data-table
      :headers="headers"
      :items="beers"
      item-key="name"
      class="elevation-1"
      dense
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
        class="search-input"
          v-model="search"
          label="Search"
        ></v-text-field>
      </template>
      <template class="table">
        <tr>
          <td></td>
          <td>
            <v-img :src="beers.image_url"></v-img>
          </td>

            <v-text-field
              v-model="calories"
              type="number"
              label="Less than"
            ></v-text-field>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        calories: '',
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
            /* filter: value => {
              if (!this.calories) return true

              return value < parseInt(this.calories)
            }, */
          },
          { text: 'Tagline', value: 'tagline' },
          { text: 'ABV-Alcohol By Volume', value: 'abv' },
          { text: 'Description', value: 'description' },
          { text: 'Food pairing', value: 'food_pairing' },
        ]
      },
    },
/*     methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
  } */
    mounted() {
      fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => res.json())
      .then((data) => this.beers = data)
      .catch((err) => {console.log(err.message)})     
    }
  }
  /* export default {
    name: 'TableData',
    data: () => {
      return{
        search: '',
        abv: '',
        beers: [],
      }
    },
    computed: {
      searchedBeers(){
        return this.beers.filter(beer => beer.name.includes(this.search))
      },
      filteredbyABV(){
        return this.beers.map(beer => {
          if (beer.abv < this.abv){
            this.searchedBeers.push(beer)
          }}
        )}
    },
    mounted() {
      fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => res.json())
      .then((data) => this.beers = data)
      .catch((err) => {console.log(err.message)})     
    }
}; */
</script>

<style>
th{
  font-family: 'Akaya Telivigala', cursive;
  color: #1f2224 !important;
  font-size: 18px !important;
  letter-spacing: 1px;
  margin: 0 150px !important;
  background-color:#BBDEFB;
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
  padding-left: 10px !important;
  background-color:#BBDEFB;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.table-div{
 width: 95%;
 margin: auto;
}


</style>