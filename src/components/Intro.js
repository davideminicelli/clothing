import React from 'react';
import Card from './Card';

const Intro = ()=> {

    const shoppingShortcutsData = [
        {
            Name: 'Shoes',
            image: '',
            url: ''
        },

        {
            Name: 'Clothing',
            image: '',
            url: ''
        },

        {
            Name: 'Accessories',
            image: '',
            url: ''
        }
    ];

    const shortcuts = shoppingShortcutsData.map(
            (category) => <Card name={category.Name} />
        );


    return (
        <section id='intro-container'>
            <h2>When adventure calls, be prepared</h2>
            
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature
            </p>

            <div id='shopping-shortcuts-container'>
                {shortcuts}
            </div>

        </section>
    )
}

export default Intro;