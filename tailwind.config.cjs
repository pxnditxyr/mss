/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: {
        'main': "url('https://png.pngtree.com/background/20210714/original/pngtree-educational-book-bifurcation-background-picture-image_1219963.jpg')",
        'first': "url('https://i.pinimg.com/originals/8a/56/ae/8a56aea57b4cc4106cc32c51631a4d74.jpg')",
        'second': "url('https://sendaudit.net/wp-content/uploads/2018/08/Grafo1.png')",
        'final': "url('https://wallpapercave.com/wp/wp7604243.jpg')",
        'first-index': "url('https://www.pixelstalk.net/wp-content/uploads/wallpapers/Landscape-Wallpapers-Full-HD.jpg')",
        'emi': "url('https://ejercito.mil.bo/then3wpag/pictures/ima_institutos/emi.jpg')",
      }
    },
	},
	plugins: [],
}
