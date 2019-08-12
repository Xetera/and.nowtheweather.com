export const random = array => array[Math.floor(Math.random() * array.length)];

const corsFreeUrl = "https://cors-anywhere.herokuapp.com";
export const request = url => fetch(`${corsFreeUrl}/${url}`);

export const parseTranscript = url =>
  request(url)
    .then(r => r.text())
    .then(data => {
      const el = document.createElement("html");
      el.innerHTML = data;
      console.log(el);
      console.log(url);
      return el.querySelector("#content article .copy");
    });

export const LOADING_TRANSCRIPT = "dab";
