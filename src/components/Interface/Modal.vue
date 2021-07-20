<template>
    <TransitionRoot :show="open" appear>
        <Dialog as="div" class="fixed z-20 inset-0" @close="close">
            <div class="min-h-screen flex items-center justify-center">
                <TransitionChild
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <TransitionChild
                    class="z-10"
                    enter="duration-200 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                    <div :class="[containerWidthClass, containerHeightClass, 'z-10 mx-auto']">
                        <slot v-if="open"></slot>

                        <!--Adding this element will prevent FocusTrap error-->
                        <button class="opacity-0 absolute bottom-0"></button>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import {
        Dialog,
        DialogOverlay,
        TransitionRoot,
        TransitionChild,
        Switch
    } from '@headlessui/vue'

    interface SpacingDictionary {
        [index: string]: string
    }

    export default defineComponent({
        name: 'Modal',

        emits: ['close'],

        props: {
            open: {
                type: Boolean,
                required: true
            },
            maxWidth: {
                type: String,
                default: () => '2xl'
            },
            maxHeight: {
                type: String,
                default: () => ''
            }
        },

        components: {
            Dialog,
            DialogOverlay,
            TransitionRoot,
            TransitionChild,
            Switch
        },

        computed: {
            containerWidthClass(): string {
                const widths = <SpacingDictionary>{
                    '300px': 'w-300px',
                    '2xl': 'w-600px',
                    '800px': 'w-800px',
                    '40': 'w-40',
                }

                return widths[this.maxWidth]
            },
            containerHeightClass(): string {
                const heights = <SpacingDictionary>{
                    '600px': 'h-600px',
                    '800px': 'h-800px',
                    '40': 'h-40',
                }

                return heights[this.maxHeight]
            }
        },

        methods: {
            close(event: boolean)
            {
                this.$emit('close', event)
            }
        }
    })
</script>