<template>
  <div>
    {{ value }} <br />

    Date: {{ date.toString() }} <br />
    Day: {{ getDay() }} <br />
    Month: {{ getMonth() }} <br />

    <input type="text" v-model="input" />
    <button @click="changeTheWorld">Change The World</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import useHelloWorld from "./custom-hooks/useHelloWorld.js";

const useDate = () => {
  const date = new Date();

  const getDay = () => {
    return date.getDay();
  };

  const getMonth = () => {
    return date.getMonth();
  };

  return { date, getDay, getMonth };
};

export default {
  setup() {
    const posts = ref([]);
    const input = ref("");
    const { value, setValue } = useHelloWorld();
    const { date, getDay, getMonth } = useDate();

    onMounted(async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?limit=5"
        );
        const data = await response.json();

        console.log(data);
        posts.value = data;
      } catch (error) {
        console.log(error);
      }
    });

    const handleChange = ({ target }) => {
      input.value = target.value;
    };

    const changeTheWorld = () => {
      setValue(input.value);
    };

    return {
      posts,
      value,
      date,
      getDay,
      getMonth,
      input,
      handleChange,
      changeTheWorld,
    };
  },
};
</script>
