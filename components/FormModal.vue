<template>
  <div class="form-modal">
    <div @click="homeStore.setShowForm()" class="form-modal-backdrop" />
    <div class="form-modal-container">
      <div class="form-title">
        {{ data?.id ? `Edit ${data?.id}` : "Create new invoice" }}
      </div>
      <div class="form-modal-container-section">
        <div class="section-title">Bill From</div>
        <div class="form-input">
          <div class="form-input-title">Street Address</div>
          <input
            v-model="formState.formAddress"
            @change="
              homeStore.setFormData('formAddress', formState.formAddress)
            "
            type="text"
          />
        </div>
        <div class="input-wrap">
          <div class="form-input">
            <div class="form-input-title">City</div>
            <input
              v-model="formState.formCity"
              @change="homeStore.setFormData('formCity', formState.formCity)"
              type="text"
            />
          </div>
          <div class="middle form-input">
            <div class="form-input-title">Postal Code</div>
            <input
              v-model="formState.formPost"
              @change="homeStore.setFormData('formPost', formState.formPost)"
              type="text"
            />
          </div>
          <div class="form-input">
            <div class="form-input-title">Country</div>
            <input
              v-model="formState.formCountry"
              @change="
                homeStore.setFormData('formCountry', formState.formCountry)
              "
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="form-modal-container-section">
        <div class="section-title">Bill To</div>
        <div class="form-input">
          <div class="form-input-title">Client's Name</div>
          <input
            v-model="formState.name"
            @change="homeStore.setFormData('name', formState.name)"
            type="text"
          />
        </div>
        <div class="form-input">
          <div class="form-input-title">Client's Address</div>
          <input
            type="text"
            v-model="formState.billAddress"
            @change="
              homeStore.setFormData('billAddress', formState.billAddress)
            "
          />
        </div>
        <div class="form-input">
          <div class="form-input-title">Street Address</div>
          <input
            type="text"
            v-model="formState.billStreet"
            @change="homeStore.setFormData('billStreet', formState.billStreet)"
          />
        </div>
        <div class="input-wrap">
          <div class="form-input">
            <div class="form-input-title">City</div>
            <input
              type="text"
              v-model="formState.billCity"
              @change="homeStore.setFormData('billCity', formState.billCity)"
            />
          </div>
          <div class="middle form-input">
            <div class="form-input-title">Postal Code</div>
            <input
              type="text"
              v-model="formState.billPost"
              @change="homeStore.setFormData('billPost', formState.billPost)"
            />
          </div>
          <div class="form-input">
            <div class="form-input-title">Country</div>
            <input
              type="text"
              v-model="formState.billCountry"
              @change="
                homeStore.setFormData('billCountry', formState.billCountry)
              "
            />
          </div>
        </div>
        <div class="input-wrap two-items">
          <div class="form-input">
            <div class="form-input-title">Invoice Date</div>
            <input
              type="date"
              v-model="formState.due_date"
              @change="homeStore.setFormData('due_date', formState.due_date)"
            />
          </div>
          <div class="form-input">
            <div class="form-input-title">Payment Terms</div>
            <select
              v-model="formState.billTerms"
              @change="homeStore.setFormData('billTerms', formState.billTerms)"
            >
              <option value="next-month">Next 30 Days</option>
            </select>
          </div>
        </div>
        <div class="form-input">
          <div class="form-input-title">Project Design</div>
          <input
            type="text"
            v-model="formState.perojectDesign"
            @change="
              homeStore.setFormData('perojectDesign', formState.perojectDesign)
            "
          />
        </div>
      </div>
      <div class="form-modal-container-section">
        <div class="item-list">
          <div class="item-list-header">
            <div class="name">Item Name</div>
            <div class="qty">Qty.</div>
            <div class="price">Price</div>
            <div class="total">Total</div>
            <div class="without-background" />
          </div>
          <div v-for="(item, index) in itemList" class="item-list-row">
            <div class="with-background name">{{ item.itemName }}</div>
            <div class="with-background qty">{{ item.qty }}</div>
            <div class="with-background price">{{ item.price }}</div>
            <div class="without-background total">
              {{ item.price * item.qty }}
            </div>
            <div class="without-background">
              <i @click="itemList.splice(index, 1)" class="material-icons"
                >delete</i
              >
            </div>
          </div>
        </div>
        <div
          @click="
            {
              itemList.push({
                itemName: 'Banner Design',
                qty: 1,
                price: 100,
              });

              homeStore.setFormData('items', itemList);
            }
          "
          class="button-add-item"
        >
          <i class="material-icons">add</i>
          Add New Item
        </div>
      </div>
      <div class="form-modal-container-section footer">
        <div @click="homeStore.setShowForm()" class="button-form cancel">
          Cancel
        </div>
        <div @click="homeStore.addInvoice()" class="button-form save">Save</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~~/stores";

const { data, openForm } = defineProps(["data"]);
const homeStore = useHomeStore();

const itemList = useState(() => []);

const formState = useState("formState", () => {
  return {
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
    status: "pending",
    items: itemList,
  };
});
</script>

<style lang="scss" scoped></style>
