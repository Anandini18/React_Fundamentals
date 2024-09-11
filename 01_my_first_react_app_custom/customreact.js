function customRender(reactElement,container){

    /* 
    
    This code is not generalised, 
    let say, we have to render h1, but it dosn't have href and target attribute, 
    then this code will not  work! 

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);

    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

// rendering a tag
// This is all the info, what "React" gives to the HTML or actual dom to render. 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root');

// Now, we need a function, that will render it. 
// Needs 2 things, what needs to be injected (what is needed to be rendered) & where it shld be injected 
customRender(reactElement,mainContainer)



