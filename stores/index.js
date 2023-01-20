import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      showForm: false,
      listInvoice: [],
      darkMode: true,
      formData: {
        formAddress: "",
        formCity: "",
        formPost: "",
        formCountry: "",
        name: "",
        billAddress: "",
        billStreet: "",
        billCity: "",
        billPost: "",
        billCountry: "",
        due_date: "",
        billTerms: "",
        perojectDesign: "",
        amount: 0,
        items: [],
      },
    };
  },
  actions: {
    setShowForm() {
      this.showForm = !this.showForm;
    },
    setDarkMode() {
      this.darkMode = !this.darkMode;
    },
    setListInvoice(payload) {
      this.listInvoice = payload;
    },
    async filterInvoice(payload) {
      const { data } = payload
        ? await useFetch(
            `https://tada-test-be.vercel.app/invoices?status=${payload}`
          )
        : await useFetch(`https://tada-test-be.vercel.app/invoices`);

      this.listInvoice = data.value;
    },
    setFormData(name, value) {
      this.formData[name] = value;
    },
    async addInvoice() {
      this.formData.amount = this.formData.items.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.qty * currentValue.price,
        0
      );

      const { data } = await useFetch(
        `https://tada-test-be.vercel.app/invoices`,
        {
          method: "POST",
          body: JSON.stringify(this.formData),
        }
      );
      const { data: listInvoice } = await useFetch(
        `https://tada-test-be.vercel.app/invoices`
      );

      this.listInvoice = listInvoice.value;
      this.showForm = false;
    },
    async deleteInvoice() {
      this.formData.amount = this.formData.items.filter(
        (item) => item.qty * item.price
      );

      const { data } = await useFetch(
        `https://tada-test-be.vercel.app/invoices`,
        {
          method: "POST",
          body: JSON.stringify(this.formData),
        }
      );
      const { data: listInvoice } = await useFetch(
        `https://tada-test-be.vercel.app/invoices`
      );

      this.listInvoice = listInvoice.value;
      this.showForm = false;
    },
  },
});
