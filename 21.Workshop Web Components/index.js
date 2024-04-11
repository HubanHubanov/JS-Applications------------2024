import {html, render} from "./node_modules/lit-html/lit-html.js"

class MyButton extends HTMLElement {
    constructor(text) {
          super();
        this._root = this.attachShadow({mode: "closed"})

    }

    connectedCallback() {
        this.createTemplate()
    }

    disconnectedCallback() {
        console.error("onDestroy")
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.text = oldValue;
        if(newValue) {
            this.text = newValue;
        }
        render(this.template(value), this._root, {host: this});
    }   

    createTemplate() {

       render(this.template(), this._root, {host:this});
      
    }

     template(text) { 
        return html`
        <div>${text}</button>
        </div>
       `;
     }

  static get observedAttributes() {
    return ['text']
  }

}

class MyCustomButton extends HTMLButtonElement {
    constructor() {
      self = super();
      self.textContent = "My custom btn";
    }
    connectedCallback() {
        console.error("Created")
    }
}



window.customElements.define("my-button", MyButton);
window.customElements.define("my-button2", MyCustomButton, {extends: "button"});
