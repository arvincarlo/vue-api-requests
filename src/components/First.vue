<script>
    export default {
        data() {
            return {
                formData: {
                    name: "",
                    message: ""
                }
            }
        },
        methods: {
            async submitForm() {
                const response = await fetch('http://119.9.108.155/apitest/index.php?c=create', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'apikey': '2025frontdeveloper'
                    },
                    body: JSON.stringify(this.formData)
                });
                
                const result = await response.json();

                console.log(result);
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
            <textarea type="text" v-model="formData.message" required/>
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
