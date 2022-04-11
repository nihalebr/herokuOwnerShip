module.exports = {
  content: ["./views/**/*{html,ejs}",
    "./views/partials**/*{html,ejs}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1C2D41',
        'secondary': '#30928a',
        'accent': '#DAF7F3',
        'white': '#FFFFFF',
        'black': '#000000',
        'gradient-stop1': '#1C2D41',
        'gradient-stop2': '#185b76',
        'gradient-stop3': '#008fa2',
        'gradient-stop4': '#1ec5bd',
        'gradient-stop5': '#76fac7',
      },
    },
  },
  plugins: [],
}