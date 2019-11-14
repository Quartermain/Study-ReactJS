import React, { Component } from 'react';
import ItemMovie from './ItemMovie';

class MainContent extends Component {

    _rendBody = ()=> {
        //Get movies List now_playing
        const getMovieNowPlaying = {
            data:{
                "results": [
                    {
                        "popularity": 619.889,
                        "vote_count": 5228,
                        "video": false,
                        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                        "id": 475557,
                        "adult": false,
                        "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
                        "original_language": "en",
                        "original_title": "Joker",
                        "genre_ids": [
                            80,
                            18,
                            53
                        ],
                        "title": "Joker",
                        "vote_average": 8.5,
                        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                        "release_date": "2019-10-02"
                    },
                    {
                        "popularity": 278.366,
                        "vote_count": 475,
                        "video": false,
                        "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
                        "id": 290859,
                        "adult": false,
                        "backdrop_path": "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
                        "original_language": "en",
                        "original_title": "Terminator: Dark Fate",
                        "genre_ids": [
                            28,
                            878
                        ],
                        "title": "Terminator: Dark Fate",
                        "vote_average": 6.5,
                        "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
                        "release_date": "2019-10-23"
                    },
                    {
                        "popularity": 154.405,
                        "vote_count": 794,
                        "video": false,
                        "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
                        "id": 420809,
                        "adult": false,
                        "backdrop_path": "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
                        "original_language": "en",
                        "original_title": "Maleficent: Mistress of Evil",
                        "genre_ids": [
                            12,
                            14,
                            10751
                        ],
                        "title": "Maleficent: Mistress of Evil",
                        "vote_average": 7.2,
                        "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
                        "release_date": "2019-10-16"
                    },
                    {
                        "popularity": 147.25,
                        "vote_count": 257,
                        "video": false,
                        "poster_path": "/xvYCZ740XvngXK0FNeSNVTJJJ5v.jpg",
                        "id": 499701,
                        "adult": false,
                        "backdrop_path": "/61sbyO47yIpsMFyLhY1MWcqjg1Q.jpg",
                        "original_language": "en",
                        "original_title": "Dora and the Lost City of Gold",
                        "genre_ids": [
                            12,
                            35,
                            10751
                        ],
                        "title": "Dora and the Lost City of Gold",
                        "vote_average": 6.5,
                        "overview": "Dora, a girl who has spent most of her life exploring the jungle with her parents, now must navigate her most dangerous adventure yet: high school. Always the explorer, Dora quickly finds herself leading Boots (her best friend, a monkey), Diego, and a rag tag group of teens on an adventure to save her parents and solve the impossible mystery behind a lost Inca civilization.",
                        "release_date": "2019-08-08"
                    },
                    {
                        "popularity": 121.495,
                        "vote_count": 81,
                        "video": false,
                        "poster_path": "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
                        "id": 568012,
                        "adult": false,
                        "backdrop_path": "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
                        "original_language": "ja",
                        "original_title": "ワンピーススタンピード",
                        "genre_ids": [
                            28,
                            12,
                            16
                        ],
                        "title": "One Piece: Stampede",
                        "vote_average": 7.3,
                        "overview": "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
                        "release_date": "2019-08-09"
                    },
                    {
                        "popularity": 110.878,
                        "vote_count": 288,
                        "video": false,
                        "poster_path": "/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
                        "id": 501170,
                        "adult": false,
                        "backdrop_path": "/1nm0sk8UUx9jHCTHuMKe2jkt4Pn.jpg",
                        "original_language": "en",
                        "original_title": "Doctor Sleep",
                        "genre_ids": [
                            27
                        ],
                        "title": "Doctor Sleep",
                        "vote_average": 7.1,
                        "overview": "A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to \"shine.\" He tries to protect her from the True Knot, a cult whose goal is to feed off of people like them in order to remain immortal.",
                        "release_date": "2019-10-30"
                    },
                    {
                        "popularity": 95.424,
                        "vote_count": 116,
                        "video": false,
                        "poster_path": "/tXTccijjTnpXWFEMaHC1gp59cNc.jpg",
                        "id": 295151,
                        "adult": false,
                        "backdrop_path": "/9REB0BCTk2RueTj5PuELYRYJN5e.jpg",
                        "original_language": "en",
                        "original_title": "Let It Snow",
                        "genre_ids": [
                            35,
                            10749
                        ],
                        "title": "Let It Snow",
                        "vote_average": 6.4,
                        "overview": "When a huge blizzard (that doesn't show signs of stopping) hits, Gracetown is completely snowed in. But even though it's cold outside, things are heating up inside, proving that Christmas is magical when it comes to love.",
                        "release_date": "2019-11-08"
                    },
                    {
                        "popularity": 85.815,
                        "vote_count": 1371,
                        "video": false,
                        "poster_path": "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
                        "id": 559969,
                        "adult": false,
                        "backdrop_path": "/ijiE9WoGSwSzM16zTxvUneJ8RXc.jpg",
                        "original_language": "en",
                        "original_title": "El Camino: A Breaking Bad Movie",
                        "genre_ids": [
                            80,
                            18,
                            53
                        ],
                        "title": "El Camino: A Breaking Bad Movie",
                        "vote_average": 7.1,
                        "overview": "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
                        "release_date": "2019-10-11"
                    },
                    {
                        "popularity": 83.744,
                        "vote_count": 419,
                        "video": false,
                        "poster_path": "/8u0QBGUbZcBW59VEAdmeFl9g98N.jpg",
                        "id": 504949,
                        "adult": false,
                        "backdrop_path": "/oMAhce30UvkgJwlzMwsuLaPJ5cG.jpg",
                        "original_language": "en",
                        "original_title": "The King",
                        "genre_ids": [
                            18,
                            36,
                            10752
                        ],
                        "title": "The King",
                        "vote_average": 7.3,
                        "overview": "England, 15th century. Hal, a capricious prince who lives among the populace far from court, is forced by circumstances to reluctantly accept the throne and become Henry V.",
                        "release_date": "2019-10-11"
                    },
                    {
                        "popularity": 77.493,
                        "vote_count": 195,
                        "video": false,
                        "poster_path": "/g4z7mDmJmx23vsVg6XNWcnXb6gc.jpg",
                        "id": 480105,
                        "adult": false,
                        "backdrop_path": "/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg",
                        "original_language": "en",
                        "original_title": "47 Meters Down: Uncaged",
                        "genre_ids": [
                            12,
                            27,
                            53
                        ],
                        "title": "47 Meters Down: Uncaged",
                        "vote_average": 5,
                        "overview": "A group of backpackers diving in a ruined underwater city discover that they have stumbled into the territory of the ocean's deadliest shark species.",
                        "release_date": "2019-08-15"
                    }
                ],
                "page": 1,
                "total_results": 1455,
                "dates": {
                    "maximum": "2019-11-10",
                    "minimum": "2019-09-23"
                },
                "total_pages": 73

            }
        };

        const itemMovies = getMovieNowPlaying.data.results.map(function(val, index){
            if (val) {
                return (
                    <ItemMovie data={val} key={index} />
                )
            }
        })

        return (itemMovies)
    }

    render() {
        return (
            <div>
                {this._rendBody()}
            </div>
        );
    }
}

export default MainContent;