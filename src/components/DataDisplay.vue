<script>
import axios from 'axios';
import Pagination from './Pagination.vue';

export default {
  components: {
    Pagination
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      totalPages: 1,
      limit: 10
    };
  },
  async created() {
    await this.fetchData(this.currentPage);
  },
  methods: {
    async fetchData(page) {
      try {
        const response = await axios.get('/api/apitest/index.php?c=read', {
          params: {
            page: page,
            limit: this.limit,
            order: 1
          },
          headers: {
            'apikey': '2025frontdeveloper'
          }
        });
        this.items = response.data.data;
        console.log(response.data);
        this.totalPages =12
        this.currentPage = page;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>

<template>
    <div>
        <table border="1" cellpadding="10">
            <tr>
                <th><underline>Name</underline></th>
                <th><underline>Message</underline></th>
            </tr>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.name }}</td>
            </tr>
        </table>
      <pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="fetchData"
      />
    </div>
  </template>