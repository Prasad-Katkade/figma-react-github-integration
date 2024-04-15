# Figma Token Studio Integration with GitHub and Tailwind

Welcome to the Figma Token Studio showcase! This project explores the seamless integration between Figma's design tokens and your development workflow, leveraging GitHub and Tailwind CSS. 

[Watch Demo Here](https://www.linkedin.com/feed/update/urn:li:activity:7181523390397071360/)

## 🎨 Expanding Figma's Reach into Development!

Delve into Figma's latest plugin, "Figma Token Studio," which facilitates seamless integration between your Figma styles and variables with platforms like GitHub. Essentially, it generates a .json file of your styles and pushes it to a remote repository, allowing you to sync your design values with your codebase effortlessly.

## 🔍 What is Figma Token Studio?

In a nutshell, Figma Token Studio bridges the gap between your Figma file's style tokens and your codebase. Imagine having a primary button with a blue background, but later deciding to change it to purple. Normally, you'd have to manually update the corresponding code. But with Figma Token Studio, any alterations made in the design file automatically propagate to your codebase, saving you time and effort.

## 🛠️ What Have We Implemented?

We've put together a small demo utilizing React & Tailwind. By integrating the token JSON values into the `tailwind.config`, we've been able to use them as custom colors. During the demo, we showcased how updating colors in the design file seamlessly reflects those changes in the project.

### Demo Code for `tailwind.config` File

```javascript
/** @type {import('tailwindcss').Config} */
import tokens from "./css/tokens.json";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        success: tokens.global.success.green.value,
        error: tokens.global.error.red.value,
        primary: tokens.global.primary.base.value,
      },
      borderRadius: {
        custom: tokens.global.custom.value + "px",
      },
    },
  },
  plugins: [],
};
```
### Demo Code for Using Custom Colors in Tailwind
Referencing the same names bg-primary and rounded-custom from tailwind.config file 
```javascript
<button className="bg-primary rounded-custom">
  Primary
</button>
```
## Support
Follow me on [LinkedIn](https://www.linkedin.com/in/prasad-katkade/) and [Twitter](https://twitter.com/_prasadd_) for better reach and opportunities. Your support is appreciated!
