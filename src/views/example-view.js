import { LitElement, html } from 'lit-element';

class ExampleView extends LitElement {
  render() {
    return html`
      <p>example-view</p>
    `;
  }
}

customElements.define('example-view', ExampleView);
