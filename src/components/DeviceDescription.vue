<template>
    <div>
        <div class="loading" v-if="loading">
        Loading...
        </div>

        <div v-if="error" class="error">
        {{ error }}
        </div>

        <div v-if="userName" class="content">
        <h2>{{ userName }}</h2>
        </div>
    </div>
</template>



<script>

import { firestore } from '@/utils/firebase.js'
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
    name: 'DeviceDescription',

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

            const routeId = this.$route.params.id

            const idQuery = query(collection(firestore, "devices"), where("idDev", "==", routeId));

            const querySnapshot = await getDocs(idQuery);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                if (doc.id) {
                    this.loading = false;
                    this.userName = doc.data().owner
                }
            });

            
        }
    } 
}
</script>