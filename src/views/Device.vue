<template>
    <div>
        <h1>Show unique device</h1>
        <DeviceDescription/>
    </div>
</template>

<script>
import DeviceDescription from '@/components/DeviceDescription.vue'

export default {
    name:'Device',
    components:{
        DeviceDescription
    }
}
</script>