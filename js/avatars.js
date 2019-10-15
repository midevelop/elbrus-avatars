var app = new Vue({
  el: "#app",
  data: {
    title: "Еноты",
    current: 0,
    show: false,
    people: [],
    info: ""
  },
  mounted() {
    axios
      .get("./docs/raccoons.json")
      .then(response => (this.people = response.data));
  },
  computed: {
    showPeople() {
      return this.people.slice(this.current, this.current + 3);
    }
  },
  methods: {
    nextAvatar() {
      this.show = false;
      if (this.current > this.people.length - 4) this.current = 0;
      else this.current++;
    }
  }
});
