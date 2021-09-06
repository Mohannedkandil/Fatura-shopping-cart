<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">Add New Item</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Item</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" class="px-3">
          <v-text-field
            v-model="title"
            label="Title"
            prepend-icon="folder"
            required
          ></v-text-field>
          <v-textarea
            v-model="description"
            label="Description"
            prepend-icon="edit"
            required
          ></v-textarea>
          <v-text-field
            v-model="price"
            label="Price"
            prepend-icon="money"
            required
          ></v-text-field>
          <v-text-field
            v-model="image"
            label="Image"
            prepend-icon="Image"
            required
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn flat @click="submit" class="success mx-0 mt-3"
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
  data() {
    return {
      title: null,
      description: null,
      price: null,
      image: null,
      items: [],
      menu: false,
    };
  },

  methods: {
    async submit() {
      console.log(this.image);
      await ItemService.insertItem(
        this.image,
        this.title,
        this.price,
        this.description
      )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
