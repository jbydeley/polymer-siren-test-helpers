import parser from 'siren-parser';

export async function load(href, element) {
    const entities = await fetch( href )
        .then( res => res.json() )
    
    element.href = href;
    element.entity = parser(entities);

    return element;
}