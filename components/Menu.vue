<template>
<transition name="fade">
  <div
    v-if="showMenu"
    class="menu w-full h-screen pr-[2%] grid grid-cols-2 transition-default"
    @wheel.prevent="showMenu"
    @touchmove.prevent="showMenu"
    @scroll.prevent="showMenu"
  >
    <div class="w-full h-full">
        <!-- <nuxt-img
            src=""
            class=""
            preload
        /> -->
    </div>
    <div class="w-full h-full pt-[9vh] pr-[5rem] flex items-start justify-end">
        <ul
            class="text-right relative translate-x-5 opacity-0 transition-ease"
            :class="{ '!translate-x-0 opacity-100': showMenu }"
        >
            <li
                v-for="item in items"
                :key="item.name"
                class="p-4 transition-linear"
                :class="[
                    { 'translate-x-3': selected === item },
                ]"
                @mouseenter="selected = item"
                @mouseleave="selected = ''"
            >
                <nuxt-link
                    :to="{
                        name: item.url
                    }"
                    class="menu-link"
                >
                    {{ item.name }}
                </nuxt-link>
                <div
                    v-if="selected === item"
                    class="absolute top-0 right-[100%] opacity-0 pr-12 w-max"
                    :class="{ 'right-[95%] opacity-100': selected === item }"
                >
                    <ul class="text-right">
                        <li
                            v-for="item in selected.items"
                            :key="item.name"
                            class="p-4"
                        >
                            <nuxt-link
                                :to="item.url"
                                class="menu-link"
                            >
                                {{ item.name }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
  </div>
</transition>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        showMenu: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selected: '',
            items: [
                {
                    name: 'modely',
                    items: [
                        {
                            name: 'gravel',
                            url: {
                                name: 'model',
                                params: {
                                    slug: 'gravel'
                                }
                            },
                            img: '',
                        },
                        {
                            name: '9g',
                            url: {
                                name: 'model',
                                params: {
                                    slug: '9g'
                                }
                            },
                            img: '',
                        },
                        {
                            name: 'fs',
                            url: {
                                name: 'model',
                                params: {
                                    slug: 'fs'
                                }
                            },
                            img: '',
                        },
                        {
                            name: 'prototype',
                            url: {
                                name: 'model',
                                params: {
                                    slug: 'prototype'
                                }
                            },
                            img: '',
                        },
                    ]
                },
                {
                    name: 'stavby',
                    items: [
                        {
                            name: 'ridley',
                            url: {
                                name: 'custom',
                                params: {
                                    slug: 'ridley'
                                }
                            },
                            img: '',
                        },
                        {
                            name: 'eddy merckx',
                            url: {
                                name: 'custom',
                                params: {
                                    slug: 'eddy'
                                }
                            },
                            img: '',
                        },
                        {
                            name: 'ritchey',
                            url: {
                                name: 'custom',
                                params: {
                                    slug: 'ritchey'
                                }
                            },
                            img: '',
                        },
                    ]
                },
                {
                    name: 'rámy',
                    url: 'frames'
                },
                {
                    name: 'novinky',
                    url: 'news'
                },
                {
                    name: 'o nás',
                    url: 'about'
                },
                {
                    name: 'kontakt',
                    url: 'contact'
                },
                {
                    name: 'shop',
                    url: 'shop'
                },
            ]
        }
    }
}
</script>