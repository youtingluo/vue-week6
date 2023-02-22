<template>
  <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
    >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5" id="staticBackdropLabel">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">標題</label>
            <input type="text" class="form-control" id="title"
            v-model="tempCoupon.title" placeholder="輸入標題">
          </div>
          <div class="mb-3">
            <label for="percent" class="form-label">百分比</label>
            <input type="number" class="form-control" id="percent"
            v-model.number="tempCoupon.percent" placeholder="輸入百分比">
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">到期日</label>
            <input type="date" class="form-control" id="due_date"
            v-model="due_date" >
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">優惠碼</label>
            <input type="text" class="form-control" id="code"
            v-model="tempCoupon.code" placeholder="輸入優惠碼">
          </div>
          <div class="mb-3">
              <div class="form-check">
                <label class="form-check-label" for="is_enabled"
                  >是否啟用</label
                >
                <input
                  id="is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  v-model="tempCoupon.is_enabled"
                  :true-value="1"
                  :false-value="0"
                />
              </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-primary" @click="$emit('update')">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['isNew', 'coupon'],
  data () {
    return {
      tempCoupon: {},
      due_date: ''
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      const formatDate = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T')[0]
      this.due_date = formatDate
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
