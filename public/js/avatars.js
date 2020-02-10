var app = new Vue({
  el: '#app',
  data: {
    // title: 'Еноты',
    current: 0,
    show: false,
    groups: [{ name: '', title: 'Еноты', people: [] }],
    currentGroup: 0
  },
  mounted() {
    axios
      .get('./docs/group.json')
      .then(response => (this.groups = response.data.groups));
  },
  computed: {
    people() {
      return this.groups[this.currentGroup].people;
    },
    title() {
      return this.groups[this.currentGroup].title;
    },
    showPeople() {
      return this.people.slice(this.current, this.current + 3);
    }
  },
  methods: {
    nextAvatar() {
      this.show = false;
      if (this.current > this.people.length - 4) this.current = 0;
      else this.current++;
    },
    changeGroup(index) {
      this.currentGroup = index;
    }
  }
});
