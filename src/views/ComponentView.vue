<script setup lang="ts"></script>

<template>
  <h1>Header</h1>
  <div class="h-line"></div>
  <div class="spacer-1"></div>
  <code>
    &lt;div&nbsp;class=&quot;header&quot;&gt;
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class=&quot;header-content&quot;&gt;
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&nbsp;class=&quot;header-title&quot;&gt;Header&nbsp;Title&lt;/p&gt;
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class=&quot;header-links&quot;&gt;
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;RouterLink&nbsp;to=&quot;/button&quot;&gt;Buttons&lt;/RouterLink&gt;
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;RouterLink&nbsp;to=&quot;/input&quot;&gt;Input&lt;/RouterLink&gt;
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;RouterLink&nbsp;to=&quot;/text&quot;&gt;Text&lt;/RouterLink&gt;
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />&nbsp;&nbsp;&lt;/div&gt;
  </code>
  <div class="spacer-2"></div>
  <div class="header">
    <div class="header-content">
      <p class="header-title">Header Title</p>
      <div class="header-links">
        <RouterLink to="/button">Buttons</RouterLink>
        <RouterLink to="/input">Input</RouterLink>
        <RouterLink to="/text">Text</RouterLink>
      </div>
    </div>
  </div>
  <div class="spacer-2"></div>
  <p>Der Header streckt sich normalerweise über 100% der Bildschirmbreite</p>
  <div class="spacer-3"></div>
</template>

<style scoped></style>
