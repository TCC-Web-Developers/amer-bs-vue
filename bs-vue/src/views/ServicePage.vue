<script setup>
import TheNav from '../components/layout/TheNav.vue';
import BaseTitle from '../components/UI/base-title.vue';
import BaseCard from '../components/UI/base-card.vue';
import CardServices from '../components/UI/organisms/card-services.vue';
import CardProduct from '../components/UI/organisms/card-product.vue';
import { BIconDribbble } from 'bootstrap-icons-vue';
import { BIconFileEarmark } from 'bootstrap-icons-vue';
import { BIconSpeedometer2 } from 'bootstrap-icons-vue';
import { BIconGlobe } from 'bootstrap-icons-vue';
</script>

<template>
    <TheNav />
    <section class="service">
        <div class="container">
            <BaseTitle>
                Our Services
                <template #description>
                    Magnam dolores commodi suscipit. Necessitatibus eius
                    consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                    velit. Quisquam quos quisquam cupiditate. Et nemo qui
                    impedit suscipit alias ea. Quia fugiat sit in iste officiis
                    commodi quidem hic quas.
                </template>
            </BaseTitle>

            <div class="row g-3">
                <BaseCard>
                    <template #card-img><BIconDribbble /></template>
                    <template #card-title>Lorem Ipsum</template>
                    <template #card-text
                        >Voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi</template
                    >
                </BaseCard>
                <BaseCard>
                    <template #card-img><BIconFileEarmark /></template>
                    <template #card-title>Sed ut perspiciatis</template>
                    <template #card-text
                        >Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore</template
                    >
                </BaseCard>
                <BaseCard>
                    <template #card-img><BIconSpeedometer2 /></template>
                    <template #card-title>Magni Dolores</template>
                    <template #card-text
                        >Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia</template
                    >
                </BaseCard>
                <BaseCard>
                    <template #card-img><BIconGlobe /></template>
                    <template #card-title>Nemo Enim</template>
                    <template #card-text
                        >At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis</template
                    >
                </BaseCard>
            </div>

            <BaseTitle>
                Atomic Cards
                <template #description>
                    Magnam dolores commodi suscipit. Necessitatibus eius
                    consequatur ex aliquid fuga eum quidem.
                </template>
            </BaseTitle>

            <div class="row g-3 mt-4">
                <div class="col-lg-4 col-md-6">
                    <CardServices :service-icon="BIconDribbble">
                        <template #card-title>Lorem Ipsum</template>
                        <template #card-text
                            >Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias excepturi</template
                        ></CardServices
                    >
                </div>
                <div class="col-lg-4 col-md-6">
                    <CardServices :service-icon="BIconFileEarmark">
                        <template #card-title>Sed ut perspiciatis</template>
                        <template #card-text
                            >Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore</template
                        >
                    </CardServices>
                </div>
                <div class="col-lg-4 col-md-6">
                    <CardServices :service-icon="BIconFileEarmark">
                        <template #card-title>Sed ut perspiciatis</template>
                        <template #card-text
                            >Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore</template
                        >
                    </CardServices>
                </div>
            </div>
            <div class="row mt-4 g-3">
                <div class="col-lg-4 col-md-6">
                    <CardProduct
                        ><template #card-title>Nemo Enim</template>
                        <template #card-text
                            >At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis</template
                        ></CardProduct
                    >
                </div>
                <div class="col-lg-4 col-md-6">
                    <CardProduct>
                        <template #card-title>Magni Dolores</template>
                        <template #card-text
                            >Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia</template
                        ></CardProduct
                    >
                </div>
                <div class="col-lg-4 col-md-6">
                    <CardProduct>
                        <template #card-title>Lorem Ipsum</template>
                        <template #card-text
                            >Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias excepturi</template
                        ></CardProduct
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
