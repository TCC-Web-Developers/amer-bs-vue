<template>
    <div class="card">
        <!-- <slot name="card-img"> </slot>
            <i class="card-img"><slot name="card-img"></slot></i> -->

        <slot></slot>

        <!-- <div class="card-body">

                
                <h5 class="card-title my-3 fw-bold">
                    <slot name="card-title"></slot>
                </h5>
                <p class="card-text">
                    <slot name="card-text"></slot>
                </p>
            </div> -->
    </div>
</template>

<style lang="scss" scoped>
.card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    border-radius: 10px;
    height: 100%;
}
</style>
