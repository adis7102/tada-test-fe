<template>
  <div v-if="isMobile" :class="{'invoice-card': true, 'light-mode': !homeStore.darkMode}">
    <div class="flex">
      <div class="invoice-card-content id"><span>#</span>{{ invoice.id }}</div>
      <div class="invoice-card-content">{{ invoice.name }}</div>
    </div>
    <div class="flex">
      <div class="left">
        <div class="invoice-card-content date">
          Due {{ dayjs(invoice.due_date).format("DD MMM YYYY") }}
        </div>
        <div class="invoice-card-content amount">
          {{ currencyFormatter(invoice.amount, "poundsterling") }}
        </div>
      </div>
      <div class="right">
        <div class="invoice-card-content status">
          <div
            :class="{
              'status-container': true,
              paid: invoice.status === 'paid',
              pending: invoice.status === 'pending',
            }"
          >
            <span />
            {{
              invoice.status === "paid"
                ? "Paid"
                : invoice.status === "pending"
                ? "Pending"
                : "Draft"
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else="isMobile" :class="{'invoice-card': true, 'light-mode': !homeStore.darkMode}">
    <div class="invoice-card-content id"><span>#</span>{{ invoice.id }}</div>
    <div class="invoice-card-content date">
      Due {{ dayjs(invoice.due_date).format("DD MMM YYYY") }}
    </div>
    <div class="invoice-card-content">{{ invoice.name }}</div>
    <div class="invoice-card-content amount">
      {{ currencyFormatter(invoice.amount, "poundsterling") }}
    </div>
    <div class="invoice-card-content status">
      <div
        :class="{
          'status-container': true,
          paid: invoice.status === 'paid',
          pending: invoice.status === 'pending',
        }"
      >
        <span />
        {{
          invoice.status === "paid"
            ? "Paid"
            : invoice.status === "pending"
            ? "Pending"
            : "Draft"
        }}
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { currencyFormatter } from "~/helpers/index";
import { useHomeStore } from '~~/stores';

const homeStore = useHomeStore();
const { invoice } = defineProps(["invoice"]);
const isMobile = ref();

onMounted(() => {
  isMobile.value = window.innerWidth <= 500;
});
</script>

<style lang="scss" scoped></style>
