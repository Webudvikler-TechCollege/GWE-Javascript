function getImageArray() {
    const arrImages = [
        {
            file: 'badebro_st_oeksoe.jpg',
            title: 'Badebro i St. Øksø',
            location: '‎⁨Rold Skov⁩, Nordjylland⁩, ⁨Danmark⁩',
            author: 'Heinz K'
        },
        {
            file: 'bjerg_trekking.jpg',
            title: 'Trekking udsigt i Tejeda',
            location: '‎⁨‎⁨⁨Tejeda⁩, Gran Canaria⁩, ⁨De Kanariske Øer⁩, ⁨Spanien⁩',
            author: 'Heinz K'
        },
        {
            file: 'frosne_baade.jpg',
            title: 'Frosne både',
            location: '‎Løgstør, Limfjorden, Nordjylland',
            author: 'Heinz K'
        },
        {
            file: 'frossen_kanal.jpg',
            title: 'Frossen kanal',
            location: '‎Løgstør, Limfjorden, Nordjylland',
            author: 'Heinz K'
        },
        {
            file: 'frossen_vandfald.jpg',
            title: 'Frossen vandfald i nationalparken',
            location: '‎‎⁨þingvellir nationalpark⁩, ⁨Bláskógabyggð⁩, ⁨Suðurland⁩, ⁨Island⁩',
            author: 'Heinz K'
        },
        {
            file: 'faar_rold_skov.jpg',
            title: 'Får i Rold Skov',
            location: '‎‎⁨‎⁨Skørping⁩, ⁨Nordjylland⁩, ⁨Danmark⁩',
            author: 'Heinz K'
        },
        {
            file: 'harpa_reykjavik.jpg',
            title: 'Musikhuset Harpa i Reykjavik',
            location: '‎⁨Reykjavik⁩, ⁨Island⁩',
            author: 'Heinz K'
        },
        {
            file: 'hav_agaete⁩.jpg',
            title: 'Brusende hav i Agaete',
            location: '‎⁨‎⁨⁨Agaete⁩, Gran Canaria⁩, ⁨De Kanariske Øer⁩, ⁨Spanien⁩',
            author: 'Heinz K'
        },
        {
            file: 'ishav_lgstr.jpg',
            title: 'Ishav i Løgstør',
            location: '‎Løgstør, Limfjorden, Nordjylland',
            author: 'Heinz K'
        },
        {
            file: 'istralandia.jpg',
            title: 'Badeland i Kroatien',
            location: '‎‎⁨Verteneglio⁩, ⁨Istrien⁩, ⁨Kroatien⁩',
            author: 'Heinz K'
        },
        {
            file: 'katedral_las_palmas.jpg',
            title: 'Udsigt fra katedralen i Las Palmas',
            location: '⁨Las Palmas de Gran Canaria⁩, ⁨De Kanariske Øer⁩, ⁨Spanien⁩',
            author: 'Heinz K'
        },
        {
            file: 'main_sqare_krakow.jpg',
            title: 'Mariakirken',
            location: '‎⁨Main Square⁩, ⁨Kraków⁩, ⁨Polen⁩',
            author: 'Heinz K'
        },
        {
            file: 'oeresundsbroen.jpg',
            title: 'Øresundsbroen fra Dragør',
            location: 'Dragør, ‎⁨Amager⁩',
            author: 'Heinz K'
        },
        {
            file: 'oester_hurup_havn.jpg',
            title: 'Øster Hurup Havn',
            location: 'Øster Hurup, Danmark⁩',
            author: 'Heinz K'
        },
        {
            file: '⁨piccadilly_circus_underground.jpg',
            title: 'Piccadilly Circus Trainstop',
            location: '‎⁨Piccadilly Circus⁩, ⁨London⁩, ⁨England⁩, ⁨Storbritannien⁩',
            author: 'Heinz K'
        },
        {
            file: 'rold_skov.jpg',
            title: 'Vandring i Rold Skov',
            location: '‎⁨Skørping⁩, ⁨Nordjylland⁩, ⁨Danmark⁩',
            author: 'Heinz K'
        },
        {
            file: 'rubjerg_knude_fyr.jpg',
            title: 'Rubjerg Knude Fyr',
            location: '⁨Lønstrup⁩, ⁨Nordjylland⁩, ⁨Danmark⁩',
            author: 'Heinz K'
        },
        {
            file: 'rutchebaner_istralandia.jpg',
            title: 'Vandrutchebaner i Istralandia',
            location: '‎⁨Verteneglio⁩, ⁨Istrien⁩, ⁨Kroatien⁩',
            author: 'Heinz K'
        },
        {
            file: 'snefald_rold_skov.jpg',
            title: 'Snefald i Rold Skov',
            location: 'Skørping⁩, ⁨Nordjylland⁩, ⁨Danmark⁩',
            author: 'Heinz K'
        },
        {
            file: 'solnedgang_hyde_park.jpg',
            title: 'Solnedgang i Hyde Park',
            location: '‎⁨London⁩, ⁨England⁩, ⁨Storbritannien⁩',
            author: 'Heinz K'
        },
        {
            file: 'st_oeksoe_rold_skov.jpg',
            title: 'Udsigt over St. Øksø i Rold Skov',
            location: '‎⁨Rold Skov⁩, ⁨Skørping⁩, ⁨Nordjylland⁩, ⁨Danmark⁩',
            author: 'Heinz K'
        },
        {
            file: 'tejeda⁩_gran_canaria.jpg',
            title: 'Trekking i Tejeda',
            location: '⁨Tejeda⁩, ‎⁨Gran Canaria⁩, ⁨De Kanariske Øer⁩, ⁨Spanien⁩',
            author: 'Heinz K'
        },
        {
            file: 'thingvellir_island.jpg',
            title: 'Kontinenter mødes i islandsk nationalpark',
            location: '‎⁨þingvellir nationalpark⁩, ⁨Bláskógabyggð⁩, ⁨Suðurland⁩, ⁨Island⁩',
            author: 'Heinz K'
        },
        {
            file: 'tidevand_las_palmas.jpg',
            title: 'Lavvande i Las Palmas',
            location: '‎⁨De Kanariske Øer⁩, ⁨Océano Atlántico⁩',
            author: 'Heinz K'
        },
        {
            file: 'trekking_gran_canaria.jpg',
            title: 'Trekking i Tedeja',
            location: '⁩⁨Tejeda⁩,‎⁨ Gran Canaria, ⁨De Kanariske Øer⁩, ⁨Spanien⁩',
            author: 'Heinz K'
        }
    ]
    return arrImages;
}