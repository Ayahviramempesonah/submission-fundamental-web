class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: space-between;
           align-items: center;
          padding: 1rem;
          margin: 1rem;
          
    
          
          
          }

        h1 {
          margin: 0;
          font-family: 'Kaushan Script', serif; 
          font-weight: 400;
        }

        nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          font-family: 'Kaushan Script', serif; 
        }

        nav li {
          margin-left: 1rem;
        }

        nav a {
          text-decoration: none;
          color: #333;
        }
      </style>

      <h1>NotedApp</h1>
      <hr/>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('my-header', MyHeader);