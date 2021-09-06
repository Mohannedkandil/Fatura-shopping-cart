<template>
  <div class="item">
    <div class="cartCounter">
      <h1>Cart: {{ cart.length }}</h1>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        v-on:click="navigateTo('products')"
      >
        View Products
      </v-btn>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        v-on:click="navigateTo('cart')"
      >
        View Cart
      </v-btn>
    </div>
    <div v-if="page === 'cart'">
      <h1>Your Cart</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(item, index) in cart" :key="index">
          <br />
          <v-card>
            <v-img contain class="white--text" height="200px" :src="item.image">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <!--                   <span class="headline"></span> -->
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div class="mx-5">
                <span class="title blue--text">{{ item.title }}</span
                ><br />
                <v-rating
                  readonly
                  small
                  dense
                  background-color="orange"
                  color="orange"
                  v-model="rating"
                ></v-rating>
                <span class="title"> ${{ item.price }}</span> &nbsp
                <del class=""> ${{ item.price }}</del>
                <v-btn color="error" @click="removeItemFromCart(item)">
                  Remove from cart
                </v-btn>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="page === 'products'">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(item, index) in items" :key="index">
          <br />
          <v-card>
            <v-img contain class="white--text" height="200px" :src="item.image">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <!--                   <span class="headline"></span> -->
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div class="mx-5">
                <span class="title blue--text">{{ item.title }}</span
                ><br />
                <v-rating
                  readonly
                  small
                  dense
                  background-color="orange"
                  color="orange"
                  v-model="rating"
                ></v-rating>
                <span class="title"> ${{ item.price }}</span> &nbsp
                <del class=""> ${{ item.price }}</del>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                large
                round
                depressed
                :color="color"
                class="mx-auto"
                @click="addItemToCart(item)"
                >ADD TO CART</v-btn
              >
            </v-card-actions>
            <v-card-actions class="xs-center">
              <v-btn
                class="mx-auto"
                @click="deleteItem(item._id)"
                flat
                icon
                color="red lighten-1"
              >
                <v-icon large>delete</v-icon>
              </v-btn>
              <PopupEdit
                class="mx-auto"
                :itemid="item._id"
                :itemslist="items"
              />
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import PopupEdit from "../components/PopupEdit.vue";
import Popup from "../components/Popup.vue";
import ItemService from "../ItemService";

export default {
  components: { Popup, PopupEdit },
  name: "Team",
  data() {
    return {
      page: "products",
      cart: [],
      items: [],
      error: "",
    };
  },
  async created() {
    try {
      this.items = await ItemService.getItems();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async deleteItem(id) {
      await ItemService.deleteItem(id);
      this.items = await ItemService.getItems();
    },
    // function for adding the selected item to the cart
    addItemToCart(item) {
      this.cart.push(item); // push the item to the cart in the data
      console.log(this.cart);
    },
    removeItemFromCart(item) {
      this.cart.splice(this.cart.indexOf(item)); // splice the item from the cart list
    },
    navigateTo(page) {
      this.page = page; // set the page to the view cart page
    },
  },
};
</script>
<style scoped>
.cartCounter {
  height: 50px;
  background-color: #f5cf10;
  box-shadow: 2px 2px 5px #999;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>