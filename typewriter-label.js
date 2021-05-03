import { LitElement, html, css } from 'lit-element';

export class TypewriterLabel extends LitElement {
  static get properties() {
    return {
      text: String,
      _text: String,
      _textIndex: Number,
      _timer: Object,
    };
  }

  static get styles() {
    return css`
      :host {        
      }

     
     
    `;
  }

  constructor() {
    super();
    this._text = '';
    this._textIndex = 0;
  }

  firstUpdated() {
    this._text = '';
    this._textIndex = 0;
    this._showNextCharacter();
  }

  render() {
    return html`
    <div>
      ${this._text}
    </div>
    `;
  }

  _showNextCharacter() {
    let nextChar = this.text.charAt(this._textIndex);
    if (!nextChar) {
      return;
    }

    let minimumWait = 0;
    let maximumWait = 0;
    switch (nextChar) {
      case " ":
        minimumWait = 300;
        maximumWait = 500;
        break;
      case "a":
      case "e":
      case "s":
      case "m":
      case "o":
        minimumWait = 50;
        maximumWait = 150;
        break;
      default:
        minimumWait = 150;
        maximumWait = 400;
        break;
    }

    this._text = this._text + nextChar;
    this._textIndex++;

    let wait = Math.random() * (maximumWait - minimumWait) + minimumWait;
    this._timer = setTimeout(() => { this._showNextCharacter() }, wait);
  }
}


customElements.define('typewriter-label', TypewriterLabel);
