<template>
  <v-dialog max-width="600px">
    <v-btn class="mx-auto" flat icon slot="activator" color="success">
      <v-icon large>edit</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Edit an Item</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            v-model="title"
            label="Title"
            prepend-icon="folder"
          ></v-text-field>
          <v-textarea
            v-model="description"
            label="Description"
            prepend-icon="edit"
          ></v-textarea>
          <v-text-field
            v-model="price"
            label="Price"
            prepend-icon="money"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn flat @click="update" class="success mx-0 mt-3"
            >Add Project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ItemService from "../ItemService";
export default {
  props: ["itemid", "itemslist"],
  data() {
    return {
      items: [],
      title: "",
      description: "",
      price: "",
      menu: false,
    };
  },
  methods: {
    async update() {
      console.log(this.title);

      await ItemService.updateItem(
        this.itemid,
        this.title,
        this.price,
        this.description,
        {
          title: this.title,
          price: this.price,
          description: this.description,
        }
      );
      return (this.items = await ItemService.getItems());
      //console.log(this.itemid);
      //console.log(this.itemslist[0].title);
    },
  },
};
</script>
