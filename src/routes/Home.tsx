import React from 'react'
import StandardPage from "../common/navigation/StandardPage";

interface Props {

}

export default() => {

    const breadcrumbs = [
        {
            location: '/',
            title: 'Home',
            navigable: false
        },
        {
            location: '/test',
            title: 'Test',
            navigable: false
        }
    ]

    return (
        <StandardPage breadcrumbs={breadcrumbs}>
            <p>Home</p>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur consequuntur cupiditate
                facere iste magnam necessitatibus nemo quibusdam sed unde. Accusantium adipisci corporis culpa iusto
                laboriosam nostrum quas sapiente tenetur!
            </div>
            <div>Adipisci animi corporis cupiditate earum maxime necessitatibus non obcaecati officiis quaerat tempore.
                Aperiam dolor est odio praesentium. Asperiores, eaque eligendi eos fugiat impedit ipsum maiores nemo qui
                quos saepe tempora!
            </div>
            <div>Accusantium adipisci corporis deserunt eos expedita facilis hic illum in, incidunt iste labore libero
                magnam magni minima nemo nobis nostrum quaerat qui quia quisquam quo, repellat sint sunt ut veritatis.
            </div>
            <div>Aliquam cumque debitis delectus doloremque harum id, laudantium numquam, odio officia quasi quia quibusdam
                quo, recusandae repudiandae vitae! Aperiam debitis eveniet facere, illo maxime molestias natus nostrum
                ratione saepe similique.
            </div>
            <div>Animi, autem cum est explicabo facilis illum ipsa minima molestiae nobis quas quasi quidem, ratione
                tempore, unde veniam voluptas voluptate voluptatem. Ad alias, at delectus doloribus ipsum libero molestiae
                totam.
            </div>
            <div>Beatae blanditiis consequatur cupiditate debitis ea, eveniet ex facere fugit ipsa modi, nam odit placeat
                repellat rerum sed sequi tempora tenetur veritatis voluptas voluptate. Autem beatae magnam non quibusdam
                repudiandae?
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae culpa cum delectus ducimus et,
                eveniet illo, laudantium magnam minima mollitia nostrum nulla officiis quia quidem quod saepe sed totam.
            </div>
            <div>Accusamus aliquid consequuntur, corporis eaque earum error et, facilis ipsum itaque laudantium, minus nam
                necessitatibus nemo possimus quas quasi ratione rem reprehenderit similique sint sunt tempora unde. Atque,
                quibusdam, saepe?
            </div>
            <div>Alias dolore, ducimus enim eveniet explicabo fuga fugit in modi necessitatibus, nostrum numquam odio
                pariatur perferendis praesentium quam quis quo ratione repellat totam ullam unde vel voluptate! Facilis, hic
                temporibus?
            </div>
            <div>Architecto at illo itaque minus necessitatibus. Cum deleniti ducimus enim et fuga fugit iste nisi obcaecati
                quisquam voluptatum. Eligendi, hic laudantium natus necessitatibus pariatur quibusdam temporibus voluptate
                voluptatum. Esse, unde?
            </div>
            <div>Aliquam consectetur eveniet ex fuga, ipsum sed voluptatibus. Aliquam aspernatur autem consectetur, culpa
                dicta doloribus eius error esse explicabo ipsam minus necessitatibus nemo nisi, nostrum officia saepe totam
                voluptatibus voluptatum.
            </div>
            <div>Animi, quod suscipit. Ab dolorem enim esse explicabo incidunt laudantium magni molestiae, placeat quisquam
                rerum? Aliquam asperiores culpa cumque dolores eligendi explicabo, harum illo omnis porro sint, tenetur unde
                voluptatibus?
            </div>
            <div>Ad aspernatur consequatur dicta dolores eius eum id impedit ipsa iste iusto laudantium libero maiores neque
                nisi optio perspiciatis placeat quas quasi, qui quod rem repellat sequi sunt tenetur voluptatum?
            </div>
            <div>Consequuntur delectus, distinctio doloremque dolores doloribus eius esse, impedit ipsam ipsum laboriosam
                laudantium modi mollitia nam nesciunt nulla optio, porro quos recusandae repellat saepe ullam voluptate
                voluptatibus. Deleniti, necessitatibus quibusdam.
            </div>
            <div>Ad, cupiditate dolorem ducimus eligendi explicabo, incidunt neque officiis pariatur praesentium quos sunt
                tempore totam vitae voluptas voluptatum! Aliquid atque laudantium nisi quasi veritatis. Expedita laudantium
                possimus quod reiciendis vitae?
            </div>
            <div>Corporis cumque cupiditate distinctio earum, id neque nesciunt, pariatur porro qui reiciendis saepe
                similique totam. Asperiores eum, facilis fugiat harum, id inventore magnam molestiae nam obcaecati possimus
                sint soluta sunt.
            </div>
            <div>Aliquam aliquid consequuntur dolorem excepturi, iusto magni nostrum officia perspiciatis possimus
                praesentium quae saepe sit voluptatem. Blanditiis debitis dignissimos distinctio expedita nostrum!
                Asperiores exercitationem molestias odit officia rem totam ut!
            </div>
            <div>A aperiam commodi, consequuntur dolore harum inventore labore laboriosam molestiae nihil nisi nulla optio
                quaerat quisquam reiciendis rem rerum vero voluptates. Consequuntur debitis deserunt illum ipsam ipsum
                laborum saepe suscipit.
            </div>
        </StandardPage>
    )
};