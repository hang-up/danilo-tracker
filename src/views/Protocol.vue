<script>
export default {
  name: "Protocol Loader",
  data: () => {
    return {
      protocols: [],
      selectedProtocol: {},
      user: {}
    };
  },

  created() {
    this.user = JSON.parse(window.localStorage.getItem("user"));
  },

  methods: {
    fetchProtocols() {}
  }
};
</script>

<template>
  <div>
    <ul>
      <li>Retrieve the list of all available protocols</li>
      <li>Put that in a list</li>
      <li>When protocol is selected, load the required protocol version</li>
      <li>
        (Fetch a list of users, select the user to attach the protocol to)
      </li>
      <li>And then, input the values, save the info to the right user.</li>
    </ul>
  </div>
</template>
