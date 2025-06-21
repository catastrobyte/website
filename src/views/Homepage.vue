<script setup>
import catPaw from "../assets/cat_paw.png"
import catKeyboard from "../assets/cat_keyboard.png"
import catSpaceship from "../assets/cat_spaceship.png"
import catExplosion from "../assets/cat_explosion.png"

</script>
<template>
  <v-container fluid>
    <v-row justify="center" align-items="center" align="center">
      <v-col cols="auto" xs="12">
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
    <v-row justify="center" align-items="center" align="center" class="ga-sm-0 ga-md-4 ga-lg-8">
      <v-col cols="auto" xs="6" sm="3" md="2" lg="1" class="d-flex justify-center">
        <v-card color="secondary" rounded="lg" min-width="150" max-width="150">
          <v-card-item class="text-center">
            <v-img :src="catKeyboard" width="125" />
          </v-card-item>
          <v-card-item class="text-center pt-0">
            <p>Pressing keys</p>
            <p><i>BEEP! BOOP!</i></p>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="auto" xs="6" sm="3" md="2" lg="1" class="d-flex justify-center">
        <v-card color="secondary" rounded="lg" min-width="150" max-width="150">
          <v-card-item class="text-center">
            <v-img :src="catPaw" width="125" />
          </v-card-item>
          <v-card-item class="text-center pt-0">
            <p>Smashing bugs</p>
            <p><i>(still counting!)</i></p>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="auto" xs="6" sm="3" md="2" lg="1" class="d-flex justify-center">
        <v-card color="secondary" rounded="lg" min-width="150" max-width="150">
          <v-card-item class="text-center">
            <v-img :src="catSpaceship" width="125" />
          </v-card-item>
          <v-card-item class="text-center pt-0">
            <p>Launch time!</p>
            <p><i>(spacecats?!)</i></p>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="auto" xs="6" sm="3" md="2" lg="1" class="d-flex justify-center">
        <v-card color="secondary" rounded="lg" min-width="150" max-width="150">
          <v-card-item class="text-center">
            <v-img :src="catExplosion" width="125" />
          </v-card-item>
          <v-card-item class="text-center pt-0">
            <p>Enjoy the catastrophy!</p>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
