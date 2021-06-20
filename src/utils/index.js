export const imageUrl = (url, width, height) => {
    return `https://media.meete.co` + '/cache/' + Math.round(width) + 'x' + Math.round(height) + '/' + url;
  };
