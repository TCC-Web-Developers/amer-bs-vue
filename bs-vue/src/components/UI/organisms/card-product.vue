<script setup>
import BaseCardAtomic from '../card/base-card-atomic.vue';
import BaseCardTitle from '../card/base-card-title.vue';
import BaseCardText from '../card/base-card-text.vue';

const props = defineProps({
    serviceIcon: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <BaseCardAtomic class="card-product text-center">
        <BaseCardTitle class="my-3 fw-bold"
            ><slot name="card-title"></slot
        ></BaseCardTitle>
        <BaseCardText><slot name="card-text"></slot></BaseCardText>
    </BaseCardAtomic>
</template>

<style lang="scss" scoped>
.card-product {
    background: #1bbca3;
    transition: 0.3s;
    color: #fff;

    .card-title {
        color: #fff;
        transition: 0.3s;
    }

    &:hover {
        background: #94e8db;
        transform: scale(1.05);
        color: #425451;

        .card-title {
            color: #425451;
        }
    }
}
</style>
