module.exports = {
    productes: [
        {
            id: 1,
            nom: "Sobrassada",
            descripcio: `<p>La sobrassada &eacute;s un embotit fet amb carn i xulla &ndash;cansalada&ndash; de porc, que es trempa amb sal i pebre bord dol&ccedil; i coent. S&apos;embut a dins els budells del mateix porc.</p>
            <p>Amb els budells prims es fan les llonganisses, i els gruixats reben el nom anat&ograve;mic (culana, bufeta, bisbe, poltr&uacute;).</p>
            <p>&Eacute;s tradicional la sobrassada de Mallorca, regulada com a Indicaci&oacute; Geogr&agrave;fica Protegida. Dins la cuina mallorquina, se sol consumir fregida el mateix dia de les matances o poc despr&eacute;s. La llonganissa se sol menjar torrada durant l&apos;hivern, i les sobrassades s&apos;utilitzen per escampar a damunt el pa o per menjar crua quan &eacute;s curada. La sobrassada s&apos;elabora i &eacute;s t&iacute;pica tamb&eacute; a Menorca, on acostuma a ser menys greixosa, i a les Piti&uuml;ses.</p>
            <p>Al Pa&iacute;s Valenci&agrave; es coneixen dues varietats: la sobrassada mallorquina -la feta a Mallorca- i la marina o marineta, t&iacute;pica de la comarca de La Marina, m&eacute;s suau, una mica m&eacute;s greixosa i amb un lleuger toc d&apos;all en la seva elaboraci&oacute;. &Eacute;s probable que la tradici&oacute; valenciana de fer sobrassades a la comarca de La Marina Alta provingui del fet que, arran de l&apos;expulsi&oacute; dels moriscs, algunes valls van ser repoblades amb mallorquins.</p>
            <p>Tot i aix&iacute;, l&apos;origen de la sobrassada sembla trobar-se a Sic&iacute;lia, on es practicava una t&egrave;cnica anomenada sopressa, que significa &quot;picat&quot;, aplicat a la carn per embotir. De Sic&iacute;lia pass&agrave; a Val&egrave;ncia mitjan&ccedil;ant el comer&ccedil; mar&iacute;tim, i de Val&egrave;ncia a Mallorca, on ja al segle xvi gaudia de tradici&oacute; la seva elaboraci&oacute;. El mot sobrassada, aix&iacute;, podria provenir de la t&egrave;cnica del picat o sopressa, o m&eacute;s b&eacute; del resultat de la seva aplicaci&oacute; amb el mot &ldquo;sopressata&rdquo;, i d&apos;aqu&iacute; soprassata i despr&eacute;s sobrassada.</p>
            <p>En un lloc fresc i sec poden durar un parell d&apos;anys, per&ograve; el m&eacute;s habitual &eacute;s consumir la llonganissa durant el primer hivern, les sobrassades a la primavera/estiu, i les m&eacute;s grosses (bisbe) se solen consumir quan es fa la matan&ccedil;a (es fan a l&apos;hivern) de l&apos;any seg&uuml;ent.</p>
            <p>Tamb&eacute; s&apos;empra per a cuinar i en rebosteria.</p>`,
            imatge: "sobrassada.jpg",
            background: "sobrassada_bg.jpg",
            comercos: [
                1
            ],
            ingredients: ['carn','pebre bord', 'sal'],
            etiquetes: ['embotit','carn']
        },
        {
            id: 2,
            nom: "Panada",
            descripcio: `<p>La panada ??s una pasta cuita normalment de farina, en forma d'una capsa rodona o triangular, farcida de carn, de peix o de verdura.</p>
            <p>Les panades eren elaboracions molt preuades a l'??poca moderna. De la mateixa manera que les coques de recapte, admetien tot tipus de variacions. Es farcien amb carn, peix i sobretot verdures, ja que era l'opci?? m??s econ??mica. En aquell temps, els espinacs a la catalana, amb panses i pinyons, ja eren molt populars i era freq??ent utilitzar-los per farcir els panadons.</p>
            <p>Ja s'esmenten en el Llibre de Sent Sov??del segle xiv, el primer receptari conegut de cuina catalana. Concretament descriu tres receptes en els cap??tols 134, 138 i 139 que elaborava el panicer com s'anomenava a l'??poca al forner. Eren preparacions molt populars als Pa??sos Catalans i a tot Europa fins a final del segle xvii. Apareixen per exemple als receptaris antics Arte de Cozina de Diego Granado (1599) o b?? Le pastissier fran??ois (1653)</p>
            <p>Els panadons es condimentaven amb esp??cies per aconseguir sabors m??s intensos i tamb?? admetien opcions dolces, com els de fruites. Aquestes menges eren f??cils de conservar i transportar, i es podien prendre tant calentes com fredes, caracter??stiques que resultaven molt pr??ctiques per als viatgers de l'??poca.</p>`,
            imatge: "panada.jpg",
            background: "panada_bg.jpeg",
            comercos: [
                1, 2
            ],
            ingredients: ['carn','farina','verdura'],
            etiquetes: ['forn','carn']
        },
        {
            id: 3,
            nom: "Rubiol",
            descripcio: `<p>El rubiol &eacute;s una pasta t&iacute;pica de Mallorca i Menorca consistent en una pe&ccedil;a de pasta de farina fina, pastada amb oli, sa&iuml;m i ou, doblegada en forma semicircular i amb un farcit dol&ccedil; o salat.</p>
            <p>A Mallorca, els rubiols s&oacute;n dol&ccedil;os i poden estar farcits de brossat, flam, confitura o altres dol&ccedil;os. Els rubiols a Menorca s&oacute;n salats i es mengen t&iacute;picament per festes majors. Aquests poden ser de sofregit, de peix, de carn o d&apos;espinacs, que solen tenir tamb&eacute; panses i pinyons.</p>
            <p>&Eacute;s tamb&eacute; una menja t&iacute;pica de les festes de Pasqua</p>`,
            imatge: "rubiol.jpg",
            background: "rubiols_bg.jpg",
            comercos: [
                2
            ],
            ingredients: ['farina','xolocate', 'confitura'],
            etiquetes: ['forn','reposteria','dol??']
        }
    ],
    comercos: [
        {
            id: 1,
            nom: 'Carnisseria alt',
            descripcio: 'Desde 1978 tots els productes carnics',
            logo: 'carnisseria1.png',
            direccio: 'Carrer del General Barcel?? 07260 Porreres',
            coordenades: [39.5145835,3.021983]
        },
        {
            id: 2,
            nom: 'Forn de pla??a',
            descripcio: 'Forn de poble de tota la vida',
            logo: 'forn1.png',
            direccio: 'Carrer de sa Galla 07260 Porreres',
            coordenades: [39.515823, 3.022227]
        },
    ]
};