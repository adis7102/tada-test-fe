<template>
  <div :class="{'home': true, 'light-mode': !homeStore.darkMode}">
    <div class="home-container">
      <div class="home-head-wrap">
        <div class="home-head-wrap-left">
          <p class="home-title">Invoices</p>
          <p class="total-item">{{ isMobile ? `${homeStore.listInvoice.length} invoices` : `There are ${homeStore.listInvoice.length} total invoices` }}</p>
        </div>
        <div class="home-head-wrap-right">
          <select v-model="filter" @change="homeStore.filterInvoice(filter)" name="filter" class="filter-status">
            <option value="">{{ isMobile ? 'Filter' : 'Filter by status' }}</option>
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
          <div @click="homeStore.setShowForm()" class="button-add">
            <div class="button-add-icon">
              <i class="material-icons">add</i>
            </div>
            {{ isMobile ? 'New' : 'New Invoice' }}
          </div>
        </div>
      </div>
      <div class="invoice-list">
        <div v-for="invoice in homeStore.listInvoice">
          <InvoiceCard :invoice="invoice" />
        </div>
      </div>
    </div>
    <div v-if="homeStore.showForm" class="form-modal">
      <FormModal />
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from '~~/stores';

const isMobile = ref();
const filter = useState('filter', () => "")
const homeStore = useHomeStore();

const { data } = await useFetch("https://tada-test-be.vercel.app/invoices");
homeStore.setListInvoice(data);


onMounted(async () => {
  isMobile.value = (window.innerWidth <= 500);
});
</script>

<style lang="scss" scoped>
</style>
