<script>
    export default {
        data() {
            return {
                formData: {
                    name: "",
                    msg: ""
                }
            }
        },
        methods: {
            async submitForm() {
                const response = await fetch('/api/apitest/index.php?c=create', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'apikey': '2025frontdeveloper',
                    },
                    body: JSON.stringify(this.formData)
                });

                const {result, msg} = await response.json();
                console.log(result, msg);
            }
        }
    }
</script>

<template>
  <div>
    <h1>Submit a Message</h1>
    <form @submit.prevent="submitForm">
        <div>
            <label for="name">Name: </label>
            <input type="text" v-model="formData.name" required/>
        </div>
        <div>
            <label for="message">Message: </label>
            <textarea type="text" v-model="formData.msg" required/>
        </div>
        <button type="submit">Submit</button>
    </form>
  </div>

  <div class="card">
    <router-link to="/">
      <button type="button">Back to Dashboard</button>
    </router-link>
  </div>

  <p>
    Examinee: Arvin Carlo Cris
  </p>
</template>

<style scoped>
</style>
