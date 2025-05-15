<script setup>
import { users } from "../../db/mock.users.js";
import { ref } from "vue";

const ui = ref(0);
const user = ref(users[ui.value]);

const nextUser = function() {
    ui.value += 1;
    user.value = users[ui.value];
}

</script>

<template>
    <div class="w-full h-full flex flex-col items-center justify-between">
        <!-- 
            settings/filter button on top right 

            main content will be the profile preview

            bottom action row, "like" or "reject"
        -->

        <div class="w-full flex flex-row items-center justify-end">
            <img src="./assets/filter.svg" height="16px" width="16px"/>
        </div>

        <div class="w-full flex flex-col items-center">
            <img :src="user.images" width="100%" class="border"/>
            <p>
                <b>{{ user.first_name + " " + user.last_name }}</b>
            </p>
        </div>
        
        <div class="flex flex-row items-center justify-center gap-[50px]">
            <span class="text-2xl" @click="nextUser">Reject</span>
            <span class="text-2xl" @click="nextUser">Like</span>
        </div>

        <div>&nbsp;</div>

    </div>
</template>
