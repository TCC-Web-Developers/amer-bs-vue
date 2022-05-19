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
    <BaseCardAtomic class="card-services">
        <i class="card-img"> <component :is="serviceIcon"></component></i>
        <BaseCardTitle class="my-3 fw-bold"
            ><slot name="card-title"></slot
        ></BaseCardTitle>
        <BaseCardText><slot name="card-text"></slot></BaseCardText>
    </BaseCardAtomic>
</template>

<style lang="scss" scoped>
.card-services {
    background: linear-gradient(to left, transparent 50%, #1bbca3 50%);
    background-position: right;
    background-size: 200%;
    transition: 0.3s;

    .card-img {
        font-size: 46px;
        background-color: #1bbca3;
        color: #fff;
        padding: 10px 15px;
        border-radius: 50%;
        transition: 0.3s;
    }

    .card-title {
        color: #425451;
    }
    &:hover {
        background-position: left;
        color: #fff;

        .card-img {
            background-color: #fff;
            color: #1bbca3;
        }
        .card-title {
            color: #fff;
        }
    }
}
</style>
