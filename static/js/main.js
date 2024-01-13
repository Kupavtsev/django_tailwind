window.addEventListener('DOMContentLoaded', function() {
    'use strict';

let menu_button = this.document.querySelector('#user-menu-button')
let menu_element = this.document.querySelector('.origin-top-right')

let button_small_screen_profile = this.document.querySelector('#button_profile_menu_sm')
let small_screen_profile = this.document.querySelector('#profile_menu_sm')

let top_right_mobile_button = this.document.querySelector('#top_right_mobile_button')
let mobile_menu = this.document.querySelector('#mobile-menu')

console.log(small_screen_profile)
console.log(small_screen_profile.length)



function toggle(el) {
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }


menu_button.addEventListener('click', function(event) {
    toggle(menu_element)
})

button_small_screen_profile.addEventListener('click', function(event) {
    // console.log('click')
    toggle(small_screen_profile)
})

top_right_mobile_button.addEventListener('click', function(event) {
    // console.log('click')
    toggle(mobile_menu)
})

});