import { ref } from "vue";

const useHelloWorld = () => {
  const value = ref("Hello, World!");

  const setValue = (newValue) => {
    value.value = newValue;
  };

  return {
    value,
    setValue,
  };
};

export default useHelloWorld;
