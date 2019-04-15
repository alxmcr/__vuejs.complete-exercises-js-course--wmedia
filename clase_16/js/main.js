Vue.config.devtools = true;

Vue.component("candidato", {
  //   props: ["nombre", "correoe", "imagen"],
  // validations
  props: {
    // basic type check (`null` means accept any type)
    nombre: {
      type: String,
      required: true
    },
    correoe: {
      type: String,
      required: true,
      validator(value) {
        console.log("value:", value);
        if (value.length < 20) {
          console.warn("Email must be least 20 characters");
          return false;
        }
        return true;
      }
    },
    imagen: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1517019052566-797fe11415b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5eb66b07b392e09998b2e8fa22dd202&auto=format&fit=crop&w=1051&q=80"
    },
    location: {
      type: Object,
      default() {
        return {
          ciudad: "Valencia"
        };
      }
    }
  },
  template: "#candidato-template"
});

new Vue({
  el: "main",
  data: {
    candidatos: []
  },
  mounted() {
    this.obtenerCandidatos();
  },
  methods: {
    obtenerCandidatos() {
      // axios
      //   .get("https://randomuser.me/api/?results=100")
      //   .then(response => {
      //     this.candidatos = response.data.results;
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
      this.candidatos = [
        {
          "gender": "male",
          "name": {
            "title": "mr",
            "first": "daryl",
            "last": "ruiz"
          },
          "location": {
            "street": "5786 the avenue",
            "city": "bangor",
            "state": "worcestershire",
            "postcode": "BN9X 9LP"
          },
          "email": "a@mail.com",
          "login": {
            "username": "goldenpanda181",
            "password": "army",
            "salt": "vEl2jtzQ",
            "md5": "07a7ae877728fdb929926cc3d67c3ead",
            "sha1": "2345eb179be86bc669cb24023b6fc9344bdc982e",
            "sha256": "331ad96a477295e3a2afc8be719dce89f12ddf242faaf66d3b9534046da868fe"
          },
          "dob": "1967-03-21 12:08:19",
          "registered": "2002-11-21 06:51:00",
          "phone": "019467 49533",
          "cell": "0759-810-828",
          "id": {
            "name": "NINO",
            "value": "OC 14 78 32 P"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/90.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
          },
          "nat": "GB"
        }
      ]
    }
  }
});
