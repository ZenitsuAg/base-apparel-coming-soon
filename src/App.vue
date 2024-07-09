<script setup>
import { ref } from 'vue'
import logo from '../images/logo.svg'
import desktopHero from '../images/hero-desktop.jpg'
import mobileHero from  '../images/hero-mobile.jpg'
import arrowIcon from '../images/icon-arrow.svg'
import errorIcon from '../images/icon-error.svg'

let showError = ref(false)
const emailValue = ref('')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const validateEmail = () => {
    if (!emailRegex.test(emailValue.value)) {
        console.log("Bad email")
        showError.value = true;
    } else {
        console.log("Good email")
        showError.value = false;
    }
}
</script>

<template>
    <header class="p-8 md:p-0 md:hidden">
        <img :src="logo" alt="logo">
    </header>

    <main class="pb-8 md:p-0 w-[375px] mx-auto md:w-auto font-josefin bg-gradient-to-b from-desaturated-red/10 to-desaturated-red/5 md:flex md:flex-row-reverse md:bg-desktop-banner md:bg-repeat-y ">            
            <div class=" max-lg:basis-1/2">
                <img :src="mobileHero" alt="mobile-hero" class="h-64 overflow-clip md:hidden">
                
                <div class="bg-[url('../images/hero-desktop.jpg')] w-full h-full bg-no-repeat hidden md:max-lg:block"></div>
                <img :src="desktopHero" alt="desktop-hero" class="hidden lg:block">
            </div>
        
        <div class="p-8 text-center basis-1/2 md:p-0 max-lg:mb-16">
            
            <article class="md:ml-[5rem] md:mr-[7.5rem] md:mt-[8rem] lg:ml-[10.3125rem] lg:mr-[13.75rem] lg:mt-16 md:text-left">
                <div class="hidden p-8 md:p-0 md:block">
                    <img :src="logo" alt="logo">
                </div>
                <h1 class="text-4xl lg:font-semibold uppercase tracking-[.5rem] md:text-5xl lg:text-6xl md:mt-[8.5rem] lg:tracking-[.9rem]">
                    <span class="font-light text-desaturated-red">We're</span> coming soon
                </h1>
                <p class="my-3 text-sm text-desaturated-red md:leading-6 md:mt-7 md:mb-8">
                    Hello fellow shoppers! We're currently building our new fashion store. 
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>

                <div class="border rounded-full border-desaturated-red focus-within:border-soft-red focus-within:border-2">
                    <form @submit.prevent="validateEmail" class="flex items-center justify-between ml-5">
                        <input type="email" v-model="emailValue" placeholder="Email Address" class="w-full h-12 text-sm bg-transparent text-desaturated-red placeholder:text-desaturated-red focus:outline-none">
                        <img :src="errorIcon" alt="error" v-if="showError">
                        <button type="submit"class="p-5 text-3xl font-medium text-white duration-200 ease-in-out rounded-full px-7 bg-gradient-to-l from-soft-red to-soft-red/30 hover:translate-x-7 hover:shadow-lg hover:shadow-desaturated-red hover:bg-desaturated-red lg:px-12 lg:hover:from-pink-200 lg:hover:to-pink-200">
                            <img :src="arrowIcon" alt="arrow">
                        </button>
                    </form>
                </div>
                <p class="mt-2 ml-5 text-sm text-desaturated-red" v-if="showError" >Please provide a valid email</p>
            </article>
        </div>
    </main>
 
</template>

