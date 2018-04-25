<template>
<section class="section container">

    <div v-if="erreurs.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(erreur,index) in erreurs" :key="index">{{ erreur }}</li>
      </ul>
    </div>
    <br>
  <form @submit="checkForm" >
  <b-field >
      <b-radio v-model="title"
                native-value="Mr">
                Mr
            </b-radio>
          <b-radio v-model="title"
                native-value="Mrs">
                Mrs
            </b-radio>
  </b-field>

   <b-field label="First name">
      <b-input type="text" id="firstname" v-model="firstname"></b-input>
 
   </b-field>
    <b-field label= "Last name">
      <b-input type="text" name="lastname" id="lastname" v-model="lastname"></b-input>
    </b-field>


    <b-field label="Country of citizenship">

      <b-select name="country" id="movie" v-model="country">
        <option> France</option>
        <option>Brazil</option>

      </b-select>
    </b-field>

<b-field label="PassportID">
      <b-input type="text" name="passportID" id="passportID" v-model="passportID"></b-input>
</b-field>

    <b-field label="Email">
     
      <b-input type="email" name="email" id="email" v-model="email"></b-input>
    </b-field>



    <p>
      <input type="submit" value="Submit" class="button is-primary">
    </p>

  </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      erreurs: [],
      title: null,
      firstname: null,
      lastname: null,
      country: null,
      passportID: null,
      email: null
    };
  },

  methods: {
    checkForm(e) {
      this.erreurs = [];
      if (!this.firstname) this.erreurs.push("Firstname required");
      if (!this.lastname) this.erreurs.push("Lastname required");
      if (!this.email) this.erreurs.push("Email required");

      if (this.country) {
        if (this.passportID) {
          !this.validPassportID() && this.erreurs.push("invalid passportID");
        } else {
          this.erreurs.push("PassportID required");
        }
      } else {
        this.erreurs.push("Country required");
      }
      if (!this.erreurs.length) return true;
      e.preventDefault();
    },
    validPassportID() {
      let unambiguous = [
        "C",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "R",
        "T",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      let arrID = this.passportID.split("");
      let filterFrance = arrID.filter(
        e => unambiguous.indexOf(e) !== -1 || (e <= 9 && e >= 0)
      );
      let filterBrazil = arrID.slice(2).filter(e => e <= 9 && e >= 0);
      if (this.country == "France") {
        return filterFrance.length === 9;
      } else if (this.country == "Brazil") {
        return (
          unambiguous.indexOf(this.passportID[0]) !== -1 &&
          unambiguous.indexOf(this.passportID[1]) !== -1 &&
          filterBrazil.length === 6
        );
      }
    }
  }
};
</script>

<style>
.section {
  padding: 3rem 20rem;
}
</style>

