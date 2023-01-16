import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/krystofcernik/Desktop/coding/PROJECTS/quintbike_2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}