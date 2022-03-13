<template>
  <div>
    <!-- <iframe width="420" height="315" :src="posts[0].video"> </iframe> -->
    <div>
      <ol>
        <li>
          <div>
            <h3>Как Олжас ведет урок?</h3>
            <div class="flex items-center my-2">
              <input type="radio" name="first" class="mx-2" @click="first = 1, setFirst()">
              <p>Отлично</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="first" class="mx-2" @click="first = 2, setFirst()">
              <p>Шикарно</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="first" class="mx-2" @click="first = 3, setFirst()">
              <p>Превосходно</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="first" class="mx-2" @click="first = 4, setFirst()">
              <p>Грандиозно</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h3>Кто такой Расул?</h3>
            <div class="flex items-center my-2">
              <input type="radio" name="second" class="mx-2" @click="second = 1, setSecond()">
              <p>Пофиг</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="second" class="mx-2" @click="second = 2, setSecond()">
              <p>Без разницы</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="second" class="mx-2" @click="second = 3, setSecond()">
              <p>Все равно</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="second" class="mx-2" @click="second = 4, setSecond()">
              <p>Не важно</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h3>Диме подойдет имя:</h3>
            <div class="flex items-center my-2">
              <input type="radio" name="third" class="mx-2" @click="third = 1, setThird()">
              <p>Гена</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="third" class="mx-2" @click="third = 2, setThird()">
              <p>Данила</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="third" class="mx-2" @click="third = 3, setThird()">
              <p>Олежа</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="third" class="mx-2" @click="third = 4, setThird()">
              <p>Толик</p>
            </div>
          </div>
        </li>
      </ol>
      <p v-if="first != 0 && second != 0 && third != 0">Результат: {{ result }} из 3</p>
    </div>
    <form action="">
      <input v-model="form.name" class="block border border-black my-2" type="text" placeholder="Enter name..">
      <input v-model="form.email" class="block border border-black my-2" type="email" placeholder="Enter email..">
      <input v-model="form.phone" class="block border border-black my-2" type="number" placeholder="Enter phone..">
      <input v-model="form.pass" class="block border border-black my-2" type="password" placeholder="Enter pass..">
      <p @click="submitUser()">Submit</p>
    </form>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
      <p>{{ user.pass }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: 0,
      second: 0,
      third: 0,
      result: 0,
      firstBool: false,
      secondBool: false,
      thirdBool: false,
      users: [],
      form: {
        name: '',
        email: '',
        phone: null,
        pass: ''
      }
    };
  },
  methods: {
    submitUser() {
      this.users.push(this.form);
    },
    setFirst() {
      if (this.first === 1 && this.firstBool === false) {
        this.result = this.result + 1;
        this.firstBool = true;
      } else if (this.first === 1 && this.firstBool === true) {
        this.result = this.result;
      } else if (this.first != 1 && this.firstBool === true) {
        this.result = this.result - 1;
        this.firstBool = false;
      }
    },
    setSecond() {
      if (this.second === 3 && this.secondBool === false) {
        this.result = this.result + 1;
        this.secondBool = true;
      } else if (this.second === 3 && this.secondBool === true) {
        this.result = this.result;
      } else if (this.second != 3 && this.secondBool === true) {
        this.result = this.result - 1;
        this.secondBool = false;
      }
    },
    setThird() {
      if (this.third === 2 && this.thirdBool === false) {
        this.result = this.result + 1;
        this.thirdBool = true;
      } else if (this.third === 2 && this.thirdBool === true) {
        this.result = this.result;
      } else if (this.third != 2 && this.thirdBool === true) {
        this.result = this.result - 1;
        this.thirdBool = false;
      }
    }
  }
};
</script>