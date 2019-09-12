const theme = {
  resetTheme: () => {
    document.body.style = 'background-image: linear-gradient(to bottom right, #b5cbd4, #92b0bb)';
  },
  randomTheme: () => {
    const themes = ['background-image: linear-gradient(to bottom right, #b5cbd4, #92b0bb)',
    'background-image: linear-gradient(to bottom right, #a6e4e4, #a25192)',
    'background-image: linear-gradient(to bottom right, #cab5ae, #7b9c8b)',
    'background-image: linear-gradient(to bottom right, #a8f79e, #596494)'];


    document.body.style = themes[Math.floor(Math.random() * themes.length)];

  }
}

export default theme;
