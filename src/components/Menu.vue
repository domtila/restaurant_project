<template>
      <v-container>            
  <v-card class="mx-auto" elevation="24">
      <v-container>
      <v-row>
          <v-col cols="12" md="4" v-for="item in menuItems" :key="item">
              <v-card>
                  <v-card color="amber darken-4">
                      <v-card-item>
                          <v-card-title>{{ item.name }}</v-card-title>

                          <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                      </v-card-item>
                      <v-img height="200px" :src="item.image" ></v-img>
                    
                        <v-card-text> {{item.price  }}</v-card-text>
                        <v-btn color="black" @click="addToOrder(item)" >Order</v-btn>
            
                  </v-card>
                </v-card>
                 </v-col>
              </v-row>
       </v-container>
      </v-card>
 </v-container><v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
    


 
</template>

  
    

<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image:"/christine-von-raesfeld-Yk-PH1wFHQU-unsplash.jpg"
  
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image:"/personalgraphic-com-FuZTPFL2-V4-unsplash.jpg"
    },
    {
        name: "Burger",
        price: 50,
        
        description: "Burger in town",
        size: "None",
        offers: "None",
        image:"/eiliv-aceron-uBigm8w_MpA-unsplash.jpg"
    },
    {
        name: " Periperi chicken",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image:"/baked-chicken-drumsticks-honey-mustard-marinade.jpg"
    },
    {
        name: "American cuisine",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name: "Mexican cuisine",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name: "Classic tacos",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image:"/mexican-tacos-wooden-table.jpg"
    },{
        name: "Red crown",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image:"/side-view-red-fruit-smoothie-with-tubules-beverages-dried-lemon-drops-serving-napkins.jpg"
    },
    {
        name: "Summer breeze",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "/blue-drink-with-ice-cubes-umbrella-decorated-glass.jpg"
    },
    {
        name: "Lavender breeze",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image:"/healthy-drink-organic-blue-pea-flower-tea-with-lemon-lime.jpg"
    },
    {
        name: "Dessert",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image:"/slice-cake-served-with-cream-raspberry-chocolate-sauce.jpg"
    },
    {
       name:"Milk shake" ,
       price:200,
       description:"the best milk shake in town",
       offers:"none",
       image:"/four-different-cocktail-smoothies-with-milky-cream-top.jpg"
    }
]
//manage the current state of the order
var orderItems = []
var totalOrderAmount = 0

function calculateTotalAmout(price){
    totalOrderAmount += price
}

function addToOrder(item){
    orderItems.push(item)
    calculateTotalAmout(item.price)
}


</script>
