import _Footer from './Footer.jsx';

class HelloWorld {
    constructor() {
        this.title = 'Hello World';
        this.subtitle = 'using Mithril.js';
    }

    view() {
        const Footer = new _Footer();
        return (
            <div className="HelloWorld">
                <h1 className="HelloWorld__title">{this.title}</h1>
                <h3 className="HelloWorld__subtitle">{this.subtitle}</h3>
                <Footer />
            </div>
        );
    }
}

export default HelloWorld;