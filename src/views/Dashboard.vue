<template>
  <div id="app">
  <v-app id="inspire" >
    <section style="height: 20vh; padding:0">
    <v-parallax dark src="https://townshipcanada.com/static/pattern.svg">
      <v-layout white--text align-center column justify-center style="margin-top: 8.5em;">
        <img src="../assets/fatura-logo.png" height="150"></img>
        <h3 class=" display-3 ma-2 text-xs-center">Fatura</h3>
        <h4 class="subheading"> A fast-scaling tech startup </h4>
        <v-flex row wrap text-xs-center>
          <v-btn dark large color="blue lighten-2" class="mt-4 elevation-0">login</v-btn>
          <v-btn dark large color="blue lighten-2" class="mt-4 elevation-0">signup</v-btn>
        </v-flex>
      </v-layout>
    </v-parallax>
    </section>
  </v-app>
</div>
</template>


<script>
export default {};
