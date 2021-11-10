<template>
    <div>
        <h1>Galería de dispositivos</h1>
    </div>
</template>




<script>
import { firestore } from '@/utils/firebase.js'
import { collection, getDocs } from "firebase/firestore";
export default {
    name: 'Devices',
    components:{
    },
    data () {
        return {
            loading: false,
            userName: null,
            error: null
        }
    },
    created () {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData();
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData',
    },
    methods: {
        async fetchData () {

            this.error = this.post = null;
            this.loading = true;

        //We make the assumption that there is a Collection userProfiles
        //with documents with ids equal to the userIds

            

            const querySnapshot = await getDocs(collection(firestore, "devices"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            });

            
        }
    } 
}
</script>