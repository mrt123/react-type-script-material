import React from 'react'
import StandardPage from "../common/navigation/StandardPage";

interface Props {

}

export default() => {

    const breadcrumbs = [
        {
            location: '/',
            title: 'Home',
            navigable: true
        },
        {
            location: '/page1',
            title: 'Page1',
            navigable: false
        }
    ]

    return (
        <StandardPage breadcrumbs={breadcrumbs}>
            <p>Page1</p>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at delectus ea eligendi est eveniet, fugiat
                inventore modi necessitatibus odio officiis perferendis quam repellat similique, sit suscipit ullam unde
                voluptate!
            </div>
            <div>Ab dolore, explicabo, illo incidunt labore magni modi quo quos rem reprehenderit, sed tempore veritatis
                voluptates? Aliquid, aperiam atque consequatur, ex impedit incidunt iusto minus, quis recusandae tempora
                veniam voluptatem.
            </div>
            <div>Asperiores aut eos repellendus velit? Ad debitis dicta doloribus enim expedita id iusto laboriosam
                quibusdam quidem voluptatibus. Ab cum est eum hic id laudantium nesciunt, quasi, quos, tenetur unde
                voluptates.
            </div>
        </StandardPage>
    )
}