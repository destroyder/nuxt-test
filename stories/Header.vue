<template>
  <header>
    <div class="storybook-header">
      <div>
        <h1>Acme</h1>
      </div>
      <div>
        <span class="welcome" v-if="user"
          >Welcome, <b>{{ user.name }}</b
          >!</span
        >
        <my-button size="small" @click="$emit('logout')" label="Log out" v-if="user" />
        <my-button size="small" @click="$emit('login')" label="Log in" v-if="!user" />
        <my-button primary size="small" @click="$emit('createAccount')" label="Sign up" v-if="!user" />
      </div>
    </div>
  </header>
</template>

<script>
import "./header.css";
import MyButton from "./Button.vue";

export default {
  name: "my-header",

  components: { MyButton },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ["login", "logout", "createAccount"],
};
</script>
