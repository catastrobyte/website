<script setup>
import QuotesWrapper from "../components/QuotesWrapper.vue"
import catPaw from "../assets/cat_paw.png"
</script>
<template>
  <v-container fluid>
    <v-row justify="center" align-items="center" align="center">
      <v-col cols="auto">
        <v-card color="secondary" rounded="lg">
          <v-card-item>
            <p>
              <i>
                A common catastrophic day is made of...
              </i>
            </p>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align-items="center" align="center">
      <v-col cols="auto">
        <v-card color="secondary" rounded="lg" width="160">
          <v-card-item class="text-center">
            <v-img :src="catPaw" width="125" />
          </v-card-item>
          <v-card-item class="text-center pt-0">
            <p>Pressing keys</p>
            <p><i>BEEP! BOOP!</i></p>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align-items="center" align="center">
      <v-col cols="auto">
        <v-card color="secondary" rounded="lg" width="160">
          <v-card-item class="text-center">
            <v-img :src="catPaw" width="125" />
          </v-card-item>
          <v-card-item class="text-center pt-0">
            <p>Smashing bugs</p>
            <p><i>(and still counting!)</i></p>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align-items="center" align="center">
      <v-col cols="auto">
        <v-card color="secondary" rounded="lg" width="160">
          <v-card-item class="text-center">
            <v-img :src="catPaw" width="125" />
          </v-card-item>
          <v-card-item class="text-center pt-0">
            <p>Worship the cat</p>
            <p><i>(the evil one!)</i></p>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align-items="center" align="center">
      <v-col cols="auto">
        <v-card color="secondary" rounded="lg" width="160">
          <v-card-item class="text-center">
            <v-img :src="catPaw" width="125" />
          </v-card-item>
          <v-card-item class="text-center pt-0">
            <p>Enjoy the catastrophy!</p>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
