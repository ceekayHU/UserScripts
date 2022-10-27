// ==UserScript==
// @name         Twitch Player view & Alt+T
// @version      1.1
// @description  automatically click chat layout and enable theater mode
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @include      https://www.twitch.tv/*
// @exclude      https://www.twitch.tv/*/videos
// @icon         https://www.twitch.tv/favicon.ico
// ==/UserScript==

setTimeout(function() {
    document.querySelector('a[data-a-target="channel-home-tab-Chat"]').click();
}, 2000)

setTimeout(function() {
    document.querySelector('button[class^="ScCoreLink-sc-udwpw5-0"], button[class$="tw-link"]').click();
    setTimeout(
      document.querySelector('a[class^="ScInteractableBase-sc-awmohi-0"], a[class*="ScInteractableDefault-sc-awmohi-1"], a[class$="tw-interactable"]').click(),
      1000)
}, 5000)

setTimeout(function() {
    document.querySelector('button[data-a-target="player-theatre-mode-button"]').click();
}, 7000)
