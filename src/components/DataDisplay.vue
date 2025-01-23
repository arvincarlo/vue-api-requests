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
      totalPages: 10,
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
        this.totalPages = this.items.length;
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
                <th><u>Id</u></th>
                <th><u>Name</u></th>
                <th><u>Message</u></th>
                <th><u>Date Submitted</u></th>
            </tr>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.msg }}</td>
                <td>{{ item.created }}</td>
            </tr>
        </table>
      <pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="fetchData"
      />
    </div>
  </template>