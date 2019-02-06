import SirenParse from 'siren-parser';

export default async function SirenFixture(href, element) {
    const entities = await fetch( href )
        .then( res => res.json() )
    
    element.href = href;
    element.entity = SirenParse(entities);

    return element;
}