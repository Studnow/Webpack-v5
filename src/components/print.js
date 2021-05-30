console.log('the print module has loadet')

export default function printMe() {
  console.log("I get called from printMe.js")
}

customElements.define(
  "some-text",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("some-text");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);