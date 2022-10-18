const express = require('express');
const serverless = require('serverless-http');
const cors = require("cors");

const app = express();

const router = express.Router();
const movies = {
    "movies": [
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
            "rating": 6.6,
            "title": "Gabriel's Inferno",
            "year": 2020,
            "description": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
            "genres": [
                "Romance"
            ],
            "id": "1"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
            "rating": 9.1,
            "title": "My Hero Academia: Heroes Rising",
            "year": 2019,
            "description": "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
            "genres": [
                "Action",
                "Animation"
            ],
            "id": "2"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "rating": 7.5,
            "title": "Dilwale Dulhania Le Jayenge",
            "year": 1995,
            "description": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "3"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg",
            "rating": 9,
            "title": "The Shawshank Redemption",
            "year": 1994,
            "description": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "4"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg",
            "rating": 7.5,
            "title": "The Godfather",
            "year": 1972,
            "description": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "5"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/8mRgpubxHqnqvENK4Bei30xMDvy.jpg",
            "rating": 8.3,
            "title": "Steven Universe: The Movie",
            "year": 2019,
            "description": "Two years after the events of \"Change Your Mind\", Steven (now 16 years old) and his friends are ready to enjoy the rest of their lives peacefully. However, all of that changes when a new sinister Gem arrives, armed with a giant drill that saps the life force of all living things on Earth. In their biggest challenge ever, the Crystal Gems must work together to save all organic life on Earth within 48 hours.",
            "genres": [
                "Action",
                "Adventure",
                "Animation",
                "Comedy",
                "Drama",
                "Fantasy",
                "Music",
                "Science Fiction",
                "Family",
                "TV Movie"
            ],
            "id": "6"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/c8Ass7acuOe4za6DhSattE359gr.jpg",
            "rating": 6.4,
            "title": "Schindler's List",
            "year": 1993,
            "description": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            "genres": [
                "Drama",
                "History",
                "War"
            ],
            "id": "7"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/q719jXXEzOoYaps6babgKnONONX.jpg",
            "rating": 8.2,
            "title": "Your Name.",
            "year": 2016,
            "description": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            "genres": [
                "Animation",
                "Drama",
                "Romance"
            ],
            "id": "8"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/h1B7tW0t399VDjAcWJh8m87469b.jpg",
            "rating": 5.8,
            "title": "Hamilton",
            "year": 2020,
            "description": "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
            "genres": [
                "Drama",
                "History",
                "Music"
            ],
            "id": "9"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/amvmeQWheahG3StKwIE1f7jRnkZ.jpg",
            "rating": 9.4,
            "title": "The Godfather: Part II",
            "year": 1974,
            "description": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "10"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/2TeJfUZMGolfDdW6DKhfIWqvq8y.jpg",
            "rating": 7.8,
            "title": "Spirited Away",
            "year": 2001,
            "description": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            "genres": [
                "Animation",
                "Fantasy",
                "Family"
            ],
            "id": "11"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            "rating": 6.2,
            "title": "Parasite",
            "year": 2019,
            "description": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            "genres": [
                "Comedy",
                "Drama",
                "Thriller"
            ],
            "id": "12"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/zGGWYpiKNwjpKxelPxOMqJnUgDs.jpg",
            "rating": 4.9,
            "title": "We All Loved Each Other So Much",
            "year": 1974,
            "description": "Gianni, Nicola and Antonio become close friends in 1944 while fighting the Nazis. After the end of the war, full of illusions, they settle down. The movie is a the story of the life of these three idealists and how they deal with the inevitable disillusionments of life.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "13"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/sfeQTIRkJjWt8IPDSBcPqkrcaas.jpg",
            "rating": 4.9,
            "title": "Me contro Te: Il film - La vendetta del Signor S",
            "year": 2020,
            "description": "Luì and Sofì fight the terrible Signor S once again, this time he will be revealed to the public!!!",
            "genres": [
                "Comedy",
                "Family"
            ],
            "id": "14"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
            "rating": 8.3,
            "title": "The Green Mile",
            "year": 1999,
            "description": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            "genres": [
                "Crime",
                "Drama",
                "Fantasy"
            ],
            "id": "15"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
            "rating": 7,
            "title": "Justice League Dark: Apokolips War",
            "year": 2020,
            "description": "Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.",
            "genres": [
                "Action",
                "Adventure",
                "Animation",
                "Fantasy",
                "Science Fiction"
            ],
            "id": "16"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/yAaf4ybTENKPicqzsAoW6Emxrag.jpg",
            "rating": 6.6,
            "title": "Pulp Fiction",
            "year": 1994,
            "description": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            "genres": [
                "Crime",
                "Thriller"
            ],
            "id": "17"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/4VlXER3FImHeFuUjBShFamhIp9M.jpg",
            "rating": 7.4,
            "title": "Mortal Kombat Legends: Scorpion's Revenge",
            "year": 2020,
            "description": "After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.",
            "genres": [
                "Action",
                "Adventure",
                "Animation",
                "Fantasy"
            ],
            "id": "18"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/6tEJnof1DKWPnl5lzkjf0FVv7oB.jpg",
            "rating": 9.5,
            "title": "Life Is Beautiful",
            "year": 1997,
            "description": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "19"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
            "rating": 4.5,
            "title": "The Lord of the Rings: The Return of the King",
            "year": 2003,
            "description": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
            "genres": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "id": "20"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
            "rating": 7.7,
            "title": "Forrest Gump",
            "year": 1994,
            "description": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "21"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            "rating": 8.3,
            "title": "The Dark Knight",
            "year": 2008,
            "description": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            "genres": [
                "Action",
                "Crime",
                "Drama",
                "Thriller"
            ],
            "id": "22"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/hBDHr3YihnuL46aeyEMhTchXkZP.jpg",
            "rating": 4.4,
            "title": "Once Upon a Time in America",
            "year": 1984,
            "description": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "23"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7sf9CgJz30aXDvrg7DYYUQ2U91T.jpg",
            "rating": 5.8,
            "title": "12 Angry Men",
            "year": 1957,
            "description": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            "genres": [
                "Drama"
            ],
            "id": "24"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/mi5VN4ww0JZgRFJIaPxxTGKjUg7.jpg",
            "rating": 8.6,
            "title": "The Art of Racing in the Rain",
            "year": 2019,
            "description": "A family dog—with a near-human soul and a philosopher's mind—evaluates his life through the lessons learned by his human owner, a race-car driver.",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "25"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/oErEczcVUmJm0EPdvWsvK4g4Lv3.jpg",
            "rating": 8.3,
            "title": "GoodFellas",
            "year": 1990,
            "description": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
            "genres": [
                "Drama",
                "Crime"
            ],
            "id": "26"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/eWivEg4ugIMAd7d4uWI37b17Cgj.jpg",
            "rating": 6.9,
            "title": "The Good, the Bad and the Ugly",
            "year": 1966,
            "description": "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
            "genres": [
                "Western"
            ],
            "id": "27"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
            "rating": 7,
            "title": "Cinema Paradiso",
            "year": 1988,
            "description": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "28"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/nR4LD4ZJg2n6LZQpcOrLFdMq0cD.jpg",
            "rating": 5.9,
            "title": "Psycho",
            "year": 1960,
            "description": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
            "genres": [
                "Drama",
                "Horror",
                "Thriller"
            ],
            "id": "29"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/ApdijpVm1GNV9BQMOsGcAXq4gEB.jpg",
            "rating": 8.4,
            "title": "Seven Samurai",
            "year": 1954,
            "description": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
            "genres": [
                "Action",
                "Drama"
            ],
            "id": "30"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg",
            "rating": 5,
            "title": "A Dog's Will",
            "year": 2000,
            "description": "The lively João Grilo and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small Northeast Brazil town. But when they die, they have to be judged by Christ, the Devil and the Virgin Mary, before they are admitted to paradise. The edited theatrical version of O Auto da Compadecida.",
            "genres": [
                "Adventure",
                "Comedy"
            ],
            "id": "31"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/wR5HZWdVpcXx9sevV1bQi7rP4op.jpg",
            "rating": 7.7,
            "title": "Fight Club",
            "year": 1999,
            "description": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "genres": [
                "Drama"
            ],
            "id": "32"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/yMgm27NWJsNblsE6Y0px7NtUBl8.jpg",
            "rating": 7.3,
            "title": "One Flew Over the Cuckoo's Nest",
            "year": 1975,
            "description": "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy, inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
            "genres": [
                "Drama"
            ],
            "id": "33"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/mG7YgoeA4ortmwcrtbkIEQjexSB.jpg",
            "rating": 8.3,
            "title": "City of God",
            "year": 2002,
            "description": "Cidade de Deus is a shantytown that started during the 1960s and became one of Rio de Janeiro’s most dangerous places in the beginning of the 1980s. To tell the story of this place, the movie describes the life of various characters, all seen by the point of view of the narrator, Buscapé. Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes...",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "34"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
            "rating": 7.4,
            "title": "Spider-Man: Into the Spider-Verse",
            "year": 2018,
            "description": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
            "genres": [
                "Action",
                "Adventure",
                "Animation",
                "Comedy",
                "Science Fiction"
            ],
            "id": "35"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/TkTPELv4kC3u1lkloush8skOjE.jpg",
            "rating": 9.1,
            "title": "Howl's Moving Castle",
            "year": 2004,
            "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
            "genres": [
                "Adventure",
                "Animation",
                "Fantasy"
            ],
            "id": "36"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/wcNkHDbyc290hcWk7KXbBZUuXpq.jpg",
            "rating": 6.3,
            "title": "Grave of the Fireflies",
            "year": 1988,
            "description": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
            "genres": [
                "Animation",
                "Drama",
                "War"
            ],
            "id": "37"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/zw77BFPGJ73Lig8GwRzYj1XHq53.jpg",
            "rating": 5,
            "title": "My Mom is a Character 3",
            "year": 2019,
            "description": "Dona Hermínia will have to rediscover and reinvent herself because her children are forming new families. This supermom will have to deal with a new life scenario: Marcelina is pregnant and Juliano is getting married.",
            "genres": [
                "Comedy"
            ],
            "id": "38"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg",
            "rating": 6.7,
            "title": "Sunset Boulevard",
            "year": 1950,
            "description": "A hack screenwriter writes a screenplay for a former silent film star who has faded into Hollywood obscurity.",
            "genres": [
                "Drama"
            ],
            "id": "39"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/1QpO9wo7JWecZ4NiBuu625FiY1j.jpg",
            "rating": 7.5,
            "title": "The Great Dictator",
            "year": 1940,
            "description": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
            "genres": [
                "Comedy"
            ],
            "id": "40"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/qq8xf2SQqHifUUyc0k6Hj1065f1.jpg",
            "rating": 4.6,
            "title": "Whiplash",
            "year": 2014,
            "description": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
            "genres": [
                "Drama",
                "Music"
            ],
            "id": "41"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg",
            "rating": 8.1,
            "title": "American History X",
            "year": 1998,
            "description": "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
            "genres": [
                "Drama"
            ],
            "id": "42"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
            "rating": 8.7,
            "title": "The Empire Strikes Back",
            "year": 1980,
            "description": "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction"
            ],
            "id": "43"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/dgNTS4EQDDVfkzJI5msKuHu2Ei3.jpg",
            "rating": 6.2,
            "title": "Ikiru",
            "year": 1952,
            "description": "Kanji Watanabe is a middle-aged man who has worked in the same monotonous bureaucratic position for decades. Learning he has cancer, he starts to look for the meaning of his life.",
            "genres": [
                "Drama"
            ],
            "id": "44"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg",
            "rating": 7.9,
            "title": "City Lights",
            "year": 1931,
            "description": "City Lights is the first silent film that Charlie Chaplin directed after he established himself with sound accompanied films. The film is about a penniless man who falls in love with a flower girl.",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "45"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/pdtzEreKvKAlqa2YEBaGwiA45V8.jpg",
            "rating": 4.9,
            "title": "Princess Mononoke",
            "year": 1997,
            "description": "Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
            "genres": [
                "Adventure",
                "Animation",
                "Fantasy"
            ],
            "id": "46"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/3yCzeNViqI2oBRbfQfwmj733jPZ.jpg",
            "rating": 7.4,
            "title": "Rear Window",
            "year": 1954,
            "description": "Professional photographer L.B. 'Jeff' Jeffries breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. When he begins to suspect that a man across the courtyard may have murdered his wife, Jeff enlists the help of his high society fashion-consultant girlfriend and his visiting nurse to investigate.",
            "genres": [
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "id": "47"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/3DzePKMbLMIM636S6syCy3cLPqj.jpg",
            "rating": 7.3,
            "title": "The Pianist",
            "year": 2002,
            "description": "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
            "genres": [
                "Drama",
                "War"
            ],
            "id": "48"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/peblNaHOiTR8DACYyUWsJHhK6GP.jpg",
            "rating": 8.4,
            "title": "Paths of Glory",
            "year": 1957,
            "description": "A commanding officer defends three scapegoats on trial for a failed offensive that occurred within the French Army in 1916.",
            "genres": [
                "Drama",
                "War"
            ],
            "id": "49"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/dbsS4oBDwLTVTuIiqwTls9wD1I1.jpg",
            "rating": 6.3,
            "title": "Sherlock: The Final Problem",
            "year": 2017,
            "description": "Long buried secrets finally come to light as someone has been playing a very long game indeed. Sherlock and John face their greatest ever challenge. Is the game finally over?",
            "genres": [
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "id": "50"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
            "rating": 7.8,
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "year": 2001,
            "description": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
            "genres": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "id": "51"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/fRqVjso3rdEcxZHXWE2xazDAtjI.jpg",
            "rating": 6.6,
            "title": "Harakiri",
            "year": 1962,
            "description": "An unusual request for ritual suicide on a feudal lord's property leads to the unwinding of a greater mystery that challenges the clan's integrity.",
            "genres": [
                "Action",
                "Drama",
                "History"
            ],
            "id": "52"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/drlyoSKDOPnxzJFrRWGqzDsyJvR.jpg",
            "rating": 8.4,
            "title": "A Silent Voice",
            "year": 2016,
            "description": "Shouya Ishida starts bullying the new girl in class, Shouko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on Shouya for his lack of compassion. When they leave elementary school, Shouko and Shouya do not speak to each other again... until an older, wiser Shouya, tormented by his past behaviour, decides he must see Shouko once more. He wants to atone for his sins, but is it already too late...?",
            "genres": [
                "Animation",
                "Drama",
                "Romance"
            ],
            "id": "53"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/m9PTii0XWCIKZBBrCrOn8RLTK0w.jpg",
            "rating": 5.8,
            "title": "Neon Genesis Evangelion: The End of Evangelion",
            "year": 1997,
            "description": "The second of two theatrically released follow-ups to the Neon Genesis Evangelion series. Comprising of two alternate episodes which were first intended to take the place of episodes 25 and 26, this finale answers many of the questions surrounding the series, while also opening up some new possibilities.",
            "genres": [
                "Drama",
                "Science Fiction",
                "Animation",
                "Fantasy",
                "Action"
            ],
            "id": "54"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/vHdVU0HyyB6k6kuYt8qjwTz9one.jpg",
            "rating": 7.6,
            "title": "I Want to Eat Your Pancreas",
            "year": 2018,
            "description": "Spring time in April and the last of the cherry blossoms are still in bloom. The usually aloof bookworm with no interest in others comes across a book in a hospital waiting room. Handwritten on the cover are the words: \"Living with Dying.\" He soon discovers that it is a diary kept by his very popular and genuinely cheerful classmate, Sakura Yamauchi, who reveals to him that she is secretly suffering from a pancreatic illness and only has a limited time left. It is at this moment that she gains just one more person to share her secret. Trying to maintain a normal life as much as possible, Sakura is determined to live her life to the fullest until the very last day. As her free spirit and unpredictable actions throw him for a loop, his heart begins to gradually change.",
            "genres": [
                "Animation",
                "Drama",
                "Romance"
            ],
            "id": "55"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            "rating": 5.9,
            "title": "Inception",
            "year": 2010,
            "description": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction"
            ],
            "id": "56"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/ai40gM7SUaGA6fthvsd87o8IQq4.jpg",
            "rating": 6.3,
            "title": "Dead Poets Society",
            "year": 1989,
            "description": "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
            "genres": [
                "Drama"
            ],
            "id": "57"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/2Fb8neVxZtCIXwbJ9DOk6Ra29mV.jpg",
            "rating": 4.5,
            "title": "Twin Peaks: Northwest Passage",
            "year": 1989,
            "description": "An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks. (This standalone version of the series pilot was produced for the European VHS market and has an alternate, closed ending.)",
            "genres": [
                "Crime",
                "Drama",
                "Mystery",
                "TV Movie"
            ],
            "id": "58"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/tgNjemQPG96uIezpiUiXFcer5ga.jpg",
            "rating": 7.8,
            "title": "High and Low",
            "year": 1963,
            "description": "An executive of a shoe company becomes a victim of extortion when his chauffeur's son is kidnapped and held for ransom.",
            "genres": [
                "Crime",
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "id": "59"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/fyzLdWLheQ0w1OLfrV3Nt4Veeog.jpg",
            "rating": 8.7,
            "title": "The Best of Youth",
            "year": 2003,
            "description": "Spanning four decades, from the chaotic 1960s to the present, director Marco Tullio Giordana's passionate epic 'La Meglio Gioventu' follows two Italian brothers through some of the most tumultuous events of recent Italian history.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "60"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
            "rating": 8.1,
            "title": "Five Feet Apart",
            "year": 2019,
            "description": "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control — all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "61"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/ic4s9k48semzBCUrbglyCmnGaHJ.jpg",
            "rating": 6.6,
            "title": "The Handmaiden",
            "year": 2016,
            "description": "1930s Korea, in the period of Japanese occupation, a young woman is hired as a handmaiden to a Japanese heiress who lives a secluded life on a large countryside estate with her domineering uncle. But, the maid has a secret: she is a pickpocket recruited by a swindler posing as a Japanese count to help him seduce the heiress to elope with him, rob her of her fortune, and lock her up in a madhouse. The plan seems to proceed according to plan until the women discover some unexpected emotions.",
            "genres": [
                "Drama",
                "Thriller",
                "Romance"
            ],
            "id": "62"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/38Xb1tVNifmzGnTKUjM7ZJSZ6GG.jpg",
            "rating": 8.2,
            "title": "My Friends",
            "year": 1975,
            "description": "Like in many other Monicelli movies, the main theme of Amici miei is friendship, seen from a rather bitter point of view. It tells the story of four middle-aged friends in Florence who organize together idle pranks (called zingarate, \"gypsy shenanigans\") in a continuous attempt to prolong childhood during their adult life.",
            "genres": [
                "Comedy"
            ],
            "id": "63"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/f5OxD8Nl0pR3DcYHtYhHRfpsmjl.jpg",
            "rating": 9.1,
            "title": "Big Deal on Madonna Street",
            "year": 1958,
            "description": "Best friends Peppe and Mario are thieves, but they're not very good at it. Still, Peppe thinks that he's finally devised a master heist that will make them rich. With the help of some fellow criminals, he plans to dig a tunnel from a rented apartment to the pawnshop next door, where they can rob the safe. But his plan is far from foolproof, and the fact that no one in the group has any experience digging tunnels proves to be the least of their problems.",
            "genres": [
                "Comedy",
                "Crime"
            ],
            "id": "64"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/90A8sXK9QZVJ7Rj8nLdsj5NuO5s.jpg",
            "rating": 4.5,
            "title": "Come and See",
            "year": 1985,
            "description": "The invasion of a village in Byelorussia by German forces sends young Florya into the forest to join the weary Resistance fighters, against his family's wishes. There he meets a girl, Glasha, who accompanies him back to his village. On returning home, Florya finds his family and fellow peasants massacred. His continued survival amidst the brutal debris of war becomes increasingly nightmarish, a battle between despair and hope.",
            "genres": [
                "Drama",
                "History",
                "War"
            ],
            "id": "65"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
            "rating": 5.2,
            "title": "Green Book",
            "year": 2018,
            "description": "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "66"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",
            "rating": 6.9,
            "title": "Back to the Future",
            "year": 1985,
            "description": "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
            "genres": [
                "Adventure",
                "Comedy",
                "Science Fiction",
                "Family"
            ],
            "id": "67"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/lUE0Bp7wH0EterJ44qMRsqtKFnp.jpg",
            "rating": 4.9,
            "title": "Stalker",
            "year": 1979,
            "description": "Near a gray and unnamed city is the Zone, a place guarded by barbed wire and soldiers, and where the normal laws of physics are victim to frequent anomalies. A stalker guides two men into the Zone, specifically to an area in which deep-seated desires are granted.",
            "genres": [
                "Science Fiction",
                "Drama"
            ],
            "id": "68"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
            "rating": 8.5,
            "title": "Apocalypse Now",
            "year": 1979,
            "description": "At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, \"does not exist, nor will it ever exist.\" His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.",
            "genres": [
                "Drama",
                "War"
            ],
            "id": "69"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/kXj2Qrfm994yLeuADqbOieU1mUH.jpg",
            "rating": 9.2,
            "title": "How to Train Your Dragon: Homecoming",
            "year": 2019,
            "description": "It's been ten years since the dragons moved to the Hidden World, and even though Toothless doesn't live in New Berk anymore, Hiccup continues the holiday traditions he once shared with his best friend. But the Vikings of New Berk were beginning to forget about their friendship with dragons. Hiccup, Astrid, and Gobber know just what to do to keep the dragons in the villagers' hearts. And across the sea, the dragons have a plan of their own...",
            "genres": [
                "Action",
                "Adventure",
                "Animation",
                "Fantasy",
                "Family"
            ],
            "id": "70"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/9wvOlM8f3obvG9tNTkpZvF0CUU1.jpg",
            "rating": 8.2,
            "title": "8½",
            "year": 1963,
            "description": "Guido Anselmi, a film director, finds himself creatively barren at the peak of his career. Urged by his doctors to rest, Anselmi heads for a luxurious resort, but a sorry group gathers—his producer, staff, actors, wife, mistress, and relatives—each one begging him to get on with the show. In retreat from their dependency, he fantasizes about past women and dreams of his childhood.",
            "genres": [
                "Drama",
                "Fantasy"
            ],
            "id": "71"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/95zlq13ql7d5V6TEMRRYilTmTOp.jpg",
            "rating": 7.9,
            "title": "The Apartment",
            "year": 1960,
            "description": "Bud Baxter is a minor clerk in a huge New York insurance company, until he discovers a quick way to climb the corporate ladder. He lends out his apartment to the executives as a place to take their mistresses. Although he often has to deal with the aftermath of their visits, one night he's left with a major problem to solve.",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "72"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            "rating": 7.7,
            "title": "Avengers: Infinity War",
            "year": 2018,
            "description": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction"
            ],
            "id": "73"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/bCj4EfuehAlgBwVd3diyWyhuuau.jpg",
            "rating": 7.6,
            "title": "Witness for the Prosecution",
            "year": 1957,
            "description": "When Leonard Vole is arrested for the sensational murder of a rich, middle-aged widow, the famous Sir Wilfrid Robarts agrees to appear on his behalf. Sir Wilfrid, recovering from a near-fatal heart attack, is supposed to be on a diet of bland, civil suits—but the lure of the criminal courts is too much for him, especially when the case is so difficult.",
            "genres": [
                "Crime",
                "Drama",
                "Mystery"
            ],
            "id": "74"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7ZiSTZN5FWsphVmlwFVFfn5EOl.jpg",
            "rating": 5.4,
            "title": "Bicycle Thieves",
            "year": 1948,
            "description": "Antonio, an unemployed man in the depressed post-WWII economy of Italy, at last finds a good job hanging up posters, the only requirement for which is that he must have his own bicycle. When Antonio’s bicycle is stolen, he and his son are forced to walk the streets of Rome in search of it, or else face ruin.",
            "genres": [
                "Drama"
            ],
            "id": "75"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
            "rating": 6.5,
            "title": "The Lion King",
            "year": 1994,
            "description": "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
            "genres": [
                "Animation",
                "Drama",
                "Family"
            ],
            "id": "76"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/w7WxNbb0mcWpwDMd3pJA7LQRfnt.jpg",
            "rating": 6.2,
            "title": "The Intouchables",
            "year": 2011,
            "description": "A true story of two men who should never have met – a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "77"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/2LquGwEhbg3soxSCs9VNyh5VJd9.jpg",
            "rating": 4.5,
            "title": "Portrait of a Lady on Fire",
            "year": 2019,
            "description": "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "78"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/9eyqhS9MKBQqQJdGmWjKLH396gJ.jpg",
            "rating": 8.5,
            "title": "Oldboy",
            "year": 2003,
            "description": "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
            "genres": [
                "Action",
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "id": "79"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/mQYXlxlUTmOP4FWt52qkZZb8JNM.jpg",
            "rating": 8.7,
            "title": "Remi, Nobody's Boy",
            "year": 2018,
            "description": "The adventures of the young Rémi, an orphan, collected by the gentle Madam Barberin. At the age of 10 years, he is snatched from his adoptive mother and entrusted to the signor Vitalis, a mysterious itinerant musician. Has its sides, he will learn the harsh life of acrobat and sing to win his bread. Accompanied by the faithful dog capi and of the small monkey Joli-Coeur, his long trip through France, made for meetings, friendships and mutual assistance, leads him to the secret of its origins.",
            "genres": [
                "Romance",
                "Adventure",
                "Family"
            ],
            "id": "80"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg",
            "rating": 8,
            "title": "It's a Wonderful Life",
            "year": 1946,
            "description": "A holiday favourite for generations...  George Bailey has spent his entire life giving to the people of Bedford Falls.  All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company.  But on Christmas Eve the business's $8,000 is lost and George's troubles begin.",
            "genres": [
                "Drama",
                "Family",
                "Fantasy"
            ],
            "id": "81"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/4Ht6RBo4fUmSo2tWE6umtNll58z.jpg",
            "rating": 8,
            "title": "Miracle in Cell No. 7",
            "year": 2013,
            "description": "A story about a mentally ill man wrongfully accused of murder and his relationship with his lovingly adorable 6 year old daughter.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "82"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/wcZ21zrOsy0b52AfAF50XpTiv75.jpg",
            "rating": 7.5,
            "title": "The Seventh Seal",
            "year": 1957,
            "description": "When disillusioned Swedish knight Antonius Block returns home from the Crusades to find his country in the grips of the Black Death, he challenges Death to a chess match for his life. Tormented by the belief that God does not exist, Block sets off on a journey, meeting up with traveling players Jof and his wife, Mia, and becoming determined to evade Death long enough to commit one redemptive act while he still lives.",
            "genres": [
                "Fantasy",
                "Drama"
            ],
            "id": "83"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/15uOEfqBNTVtDUT7hGBVCka0rZz.jpg",
            "rating": 5,
            "title": "Vertigo",
            "year": 1958,
            "description": "A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
            "genres": [
                "Mystery",
                "Thriller",
                "Romance"
            ],
            "id": "84"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/drgMcyTsySQBnUPGaBThCHGdlWT.jpg",
            "rating": 5.8,
            "title": "The Kid",
            "year": 1921,
            "description": "A tramp cares for a boy after he's abandoned as a newborn by his mother. Later the mother has a change of heart and aches to be reunited with her son.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "85"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/nqqovhsvsWbsb7LcGaIGDRZrwgB.jpg",
            "rating": 8.7,
            "title": "Wolf Children",
            "year": 2012,
            "description": "After her werewolf lover unexpectedly dies in an accident, a woman must find a way to raise the son and daughter that she had with him. However, their inheritance of their father's traits prove to be a challenge for her.",
            "genres": [
                "Animation",
                "Drama",
                "Fantasy",
                "Family"
            ],
            "id": "86"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/mFnfTVADj8yOxwzprYOmTPselk8.jpg",
            "rating": 5.6,
            "title": "Capernaum",
            "year": 2018,
            "description": "Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.",
            "genres": [
                "Drama"
            ],
            "id": "87"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
            "rating": 4.8,
            "title": "A Clockwork Orange",
            "year": 1971,
            "description": "In a near-future Britain, young Alexander DeLarge and his pals get their kicks beating and raping anyone they please. When not destroying the lives of others, Alex swoons to the music of Beethoven. The state, eager to crack down on juvenile crime, gives an incarcerated Alex the option to undergo an invasive procedure that'll rob him of all personal agency. In a time when conscience is a commodity, can Alex change his tune?",
            "genres": [
                "Science Fiction",
                "Drama"
            ],
            "id": "88"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/ouYgAatYH4JzIThj6FI3UYf31RI.jpg",
            "rating": 8.9,
            "title": "Wonder",
            "year": 2017,
            "description": "The story of August Pullman – a boy with facial differences – who enters fifth grade, attending a mainstream elementary school for the first time.",
            "genres": [
                "Drama",
                "Family"
            ],
            "id": "89"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/910xRIUmNJrWH2hkQifBJtoPp5R.jpg",
            "rating": 4.6,
            "title": "Andrei Rublev",
            "year": 1966,
            "description": "An expansive Russian drama, this film focuses on the life of revered religious icon painter Andrei Rublev. Drifting from place to place in a tumultuous era, the peace-seeking monk eventually gains a reputation for his art. But after Rublev witnesses a brutal battle and unintentionally becomes involved, he takes a vow of silence and spends time away from his work. As he begins to ease his troubled soul, he takes steps towards becoming a painter once again.",
            "genres": [
                "Drama",
                "History"
            ],
            "id": "90"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/6numIZH6uR3NlJgY9m7nGH0jhs.jpg",
            "rating": 7.7,
            "title": "All About Eve",
            "year": 1950,
            "description": "From the moment she glimpses her idol at the stage door, Eve Harrington is determined to take the reins of power away from the great actress Margo Channing. Eve maneuvers her way into Margo's Broadway role, becomes a sensation and even causes turmoil in the lives of Margo's director boyfriend, her playwright and his wife. Only the cynical drama critic sees through Eve, admiring her audacity and perfect pattern of deceit.",
            "genres": [
                "Drama"
            ],
            "id": "91"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/d2IalvQ6eaEAsLVTFUEHf6roHEk.jpg",
            "rating": 7.3,
            "title": "The Usual Suspects",
            "year": 1995,
            "description": "Held in an L.A. interrogation room, Verbal Kint attempts to convince the feds that a mythic crime lord, Keyser Soze, not only exists, but was also responsible for drawing him and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro harbor – leaving few survivors. Verbal lures his interrogators with an incredible story of the crime lord's almost supernatural prowess.",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "id": "92"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
            "rating": 9.2,
            "title": "Coco",
            "year": 2017,
            "description": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
            "genres": [
                "Adventure",
                "Animation",
                "Comedy",
                "Fantasy",
                "Family"
            ],
            "id": "93"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/iXVaWbxmyPk4KZGZk5GGDGFieMX.jpg",
            "rating": 5.6,
            "title": "A Taxi Driver",
            "year": 2017,
            "description": "May, 1980. Man-seob is a taxi driver in Seoul who lives from hand to mouth, raising his young daughter alone. One day, he hears that there is a foreigner who will pay big money for a drive down to Gwangju city. Not knowing that he’s a German journalist with a hidden agenda, Man-seob takes the job.",
            "genres": [
                "Drama",
                "History",
                "Action"
            ],
            "id": "94"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
            "rating": 7.1,
            "title": "Star Wars",
            "year": 1977,
            "description": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction"
            ],
            "id": "95"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",
            "rating": 8.8,
            "title": "The Shining",
            "year": 1980,
            "description": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
            "genres": [
                "Horror",
                "Thriller"
            ],
            "id": "96"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/mZJ25Th65B2KXM57uIiEzO3Aw81.jpg",
            "rating": 9,
            "title": "La Dolce Vita",
            "year": 1960,
            "description": "Journalist and man-about-town Marcello struggles to find his place in the world, torn between the allure of Rome's elite social scene and the stifling domesticity offered by his girlfriend, all the while searching for a way to become a serious writer.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "97"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/wJUJROdLOtOzMixkjkx1aaZGSLl.jpg",
            "rating": 5.5,
            "title": "In a Heartbeat",
            "year": 2017,
            "description": "A closeted boy runs the risk of being outed by his own heart after it pops out of his chest to chase down the boy of his dreams.",
            "genres": [
                "Animation",
                "Comedy",
                "Romance",
                "Family"
            ],
            "id": "98"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/rHsc35TLPliJAvbnmu8dvddiu96.jpg",
            "rating": 6,
            "title": "Toto, Peppino, and the Hussy",
            "year": 1956,
            "description": "Antonio, Peppino and Lucia are three brothers who live in the country near Naples. Lucia's son, Gianni, goes to Naples to study medicine, but there he knows a ballet dancer. They fall in love and, when she goes to Milan, Gianni follows her. Informed of this and afraid that their nephew will stop studying, the three Caponi brothers leave for Milan to persuade Gianni to come back and continue studying and abandon the \"Malafemmina\" (bad girl).",
            "genres": [
                "Comedy"
            ],
            "id": "99"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/uprP8rtOgMYJQ2h3ldDFvGsaBgH.jpg",
            "rating": 6.3,
            "title": "Memento",
            "year": 2000,
            "description": "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
            "genres": [
                "Mystery",
                "Thriller"
            ],
            "id": "100"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/1G9r3rqtbFAQuyWKOZm4Y5J5s7Q.jpg",
            "rating": 6.3,
            "title": "Sherlock Jr.",
            "year": 1924,
            "description": "A film projectionist longs to be a detective, and puts his meagre skills to work when he is framed by a rival for stealing his girlfriend's father's pocketwatch.",
            "genres": [
                "Action",
                "Comedy",
                "Mystery"
            ],
            "id": "101"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
            "rating": 4.8,
            "title": "Taxi Driver",
            "year": 1976,
            "description": "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action, attempting to save a preadolescent prostitute in the process.",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "102"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/nW0cCpfuGcR1JG7EinDbdL2Ijf2.jpg",
            "rating": 5.4,
            "title": "Double Indemnity",
            "year": 1944,
            "description": "A rich woman and a calculating insurance agent plot to kill her unsuspecting husband after he signs a double indemnity policy. Against a backdrop of distinctly Californian settings, the partners in crime plan the perfect murder to collect the insurance, which pays  double if the death is accidental.",
            "genres": [
                "Crime",
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "id": "103"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/pvSESD7ujxWZwtYDb9l57qE0ywq.jpg",
            "rating": 6.6,
            "title": "The Prestige",
            "year": 2006,
            "description": "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
            "genres": [
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "id": "104"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/wX0QD36a80hxulcizz7tyahYOF8.jpg",
            "rating": 6.5,
            "title": "Togo",
            "year": 2019,
            "description": "The untold true story set in the winter of 1925 that takes you across the treacherous terrain of the Alaskan tundra for an exhilarating and uplifting adventure that will test the strength, courage and determination of one man, Leonhard Seppala, and his lead sled dog, Togo.",
            "genres": [
                "Adventure",
                "Drama",
                "History",
                "Family"
            ],
            "id": "105"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/bLzs8RpBe4IuNuUlQJjctzwq09G.jpg",
            "rating": 7.6,
            "title": "Piper",
            "year": 2016,
            "description": "A mother bird tries to teach her little one how to find food by herself. In the process, she encounters a traumatic experience that she must overcome in order to survive.",
            "genres": [
                "Animation",
                "Family"
            ],
            "id": "106"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
            "rating": 8.4,
            "title": "Inglourious Basterds",
            "year": 2009,
            "description": "In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as \"The Basterds\" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.",
            "genres": [
                "Action",
                "Drama",
                "Thriller",
                "War"
            ],
            "id": "107"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            "rating": 7,
            "title": "Joker",
            "year": 2019,
            "description": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "id": "108"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/hVIKyTK13AvOGv7ICmJjK44DTzp.jpg",
            "rating": 5.4,
            "title": "Some Like It Hot",
            "year": 1959,
            "description": "Two musicians witness a mob hit and struggle to find a way out of the city before they are found by the gangsters. Their only opportunity is to join an all-girl band as they leave on a tour. To make their getaway they must first disguise themselves as women, then keep their identities secret and deal with the problems this brings - such as an attractive bandmate and a very determined suitor.",
            "genres": [
                "Comedy",
                "Music",
                "Romance"
            ],
            "id": "109"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/A9UDEIiiQXzg8PLtbdimtV1bC5u.jpg",
            "rating": 7,
            "title": "Love Exposure",
            "year": 2009,
            "description": "The story of a teenage boy named Yu, who falls for Yoko, a girl he runs into while working as an \"up-skirt\" photographer in an offshoot of the porn industry. His attempts to woo her are complicated by a spot of cross-dressing - which convinces Yoko that she is lesbian - dalliances with kung-fu and crime, and a constant struggle with the guilt that's a legacy of his Catholic upbringing.",
            "genres": [
                "Action",
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "110"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/w03EiJVHP8Un77boQeE7hg9DVdU.jpg",
            "rating": 5.7,
            "title": "Singin' in the Rain",
            "year": 1952,
            "description": "In 1927 Hollywood, a silent film production company and cast make a difficult transition to sound.",
            "genres": [
                "Comedy",
                "Music",
                "Romance"
            ],
            "id": "111"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/iyTD2QnySNMPUPE3IedZQipSWfz.jpg",
            "rating": 8.5,
            "title": "Wild Strawberries",
            "year": 1957,
            "description": "Crotchety retired doctor Isak Borg travels from Stockholm to Lund, Sweden, with his pregnant and unhappy daughter-in-law, Marianne, in order to receive an honorary degree from his alma mater. Along the way, they encounter a series of hitchhikers, each of whom causes the elderly doctor to muse upon the pleasures and failures of his own life. These include the vivacious young Sara, a dead ringer for the doctor's own first love.",
            "genres": [
                "Drama"
            ],
            "id": "112"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/tN7kYPjRhDolpui9sc9Eq9n5b2O.jpg",
            "rating": 4.9,
            "title": "Yojimbo",
            "year": 1961,
            "description": "A nameless ronin, or samurai with no master, enters a small village in feudal Japan where two rival businessmen are struggling for control of the local gambling trade. Taking the name Sanjuro Kuwabatake, the ronin convinces both silk merchant Tazaemon and sake merchant Tokuemon to hire him as a personal bodyguard, then artfully sets in motion a full-scale gang war between the two ambitious and unscrupulous men.",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "id": "113"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
            "rating": 5.7,
            "title": "The Invisible Guest",
            "year": 2016,
            "description": "A young businessman wakes up in a hotel room, locked from the inside, along with his lover, who was murdered while he was unconscious. He hires a prestigious lawyer, and over the course of one evening, they must work together to build a defense case for him before he is taken to jail.",
            "genres": [
                "Crime",
                "Mystery",
                "Thriller"
            ],
            "id": "114"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/hUK9rewffKGqtXynH5SW3v9hzcu.jpg",
            "rating": 5.1,
            "title": "Metropolis",
            "year": 1927,
            "description": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.",
            "genres": [
                "Drama",
                "Science Fiction"
            ],
            "id": "115"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg",
            "rating": 6,
            "title": "Reservoir Dogs",
            "year": 1992,
            "description": "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
            "genres": [
                "Crime",
                "Thriller"
            ],
            "id": "116"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/56sq57kDm7XgyXBYrgJLumo0Jac.jpg",
            "rating": 7.2,
            "title": "Loving Vincent",
            "year": 2017,
            "description": "The film brings the paintings of Vincent van Gogh to life to tell his remarkable story. Every one of the 65,000 frames of the film is an oil-painting hand-painted by 125 professional oil-painters who travelled from all across the world to the Loving Vincent studios in Poland and Greece to be a part of the production. As remarkable as Vincent’s brilliant paintings are his passionate and ill-fated life and mysterious death.",
            "genres": [
                "Animation",
                "Drama",
                "Mystery"
            ],
            "id": "117"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/pRn3TJHbAqCAO6U8Dw5DayVUuX3.jpg",
            "rating": 7.4,
            "title": "Gladiator",
            "year": 2000,
            "description": "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
            "genres": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "id": "118"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/8kSerJrhrJWKLk1LViesGcnrUPE.jpg",
            "rating": 5.9,
            "title": "Lock, Stock and Two Smoking Barrels",
            "year": 1998,
            "description": "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
            "genres": [
                "Comedy",
                "Crime"
            ],
            "id": "119"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg",
            "rating": 8.3,
            "title": "Love, Simon",
            "year": 2018,
            "description": "Everyone deserves a great love story. But for seventeen-year old Simon Spier it's a little more complicated: he's yet to tell his family or friends he's gay and he doesn't know the identity of the anonymous classmate he's fallen for online.",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "120"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7XLSwxpfpPoJyTdJVot6a42TS2V.jpg",
            "rating": 4.3,
            "title": "The Help",
            "year": 2011,
            "description": "Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family's struggles with money and her desperate need for jobs; and Eugenia \"Skeeter\" Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around \"the help\"; yet they are always kept at a certain distance because of racial lines.",
            "genres": [
                "Drama"
            ],
            "id": "121"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/gHm96BRW4GoI339rF1vYoYTB6Qe.jpg",
            "rating": 8.6,
            "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
            "year": 1964,
            "description": "After the insane General Jack D. Ripper initiates a nuclear strike on the Soviet Union, a war room full of politicians, generals and a Russian diplomat all frantically try to stop the nuclear strike.",
            "genres": [
                "Drama",
                "Comedy",
                "War"
            ],
            "id": "122"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/cEg6qpVbKA8cZQE2SDsCjSVqbze.jpg",
            "rating": 6.4,
            "title": "Rashomon",
            "year": 1950,
            "description": "Brimming with action while incisively examining the nature of truth, \"Rashomon\" is perhaps the finest film ever to investigate the philosophy of justice. Through an ingenious use of camera and flashbacks, Kurosawa reveals the complexities of human nature as four people recount different versions of the story of a man's murder and the rape of his wife.",
            "genres": [
                "Crime",
                "Drama",
                "Mystery"
            ],
            "id": "123"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/p3tmqqwFPHFdu1oVpcgKGfcPCMZ.jpg",
            "rating": 6.3,
            "title": "The Departed",
            "year": 2006,
            "description": "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "id": "124"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/pItF5SpDeXBj10mA8hbCVgDAsyb.jpg",
            "rating": 8.2,
            "title": "Dersu Uzala",
            "year": 1975,
            "description": "A military explorer meets and befriends a Goldi man in Russia’s unmapped forests. A deep and abiding bond evolves between the two men, one civilized in the usual sense, the other at home in the glacial Siberian woods.",
            "genres": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "id": "125"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/3bdfN2gosYSxpHBAXPkAhxkUJFr.jpg",
            "rating": 6.8,
            "title": "The Young and the Damned",
            "year": 1950,
            "description": "A group of juvenile delinquents lives a criminal, violent life in the festering slums of Mexico City, among them the young Pedro, whose morality is gradually corrupted and destroyed by the others.",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "126"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/rwPgE6fLxuJmPWi8fFjgENJMAjr.jpg",
            "rating": 6.6,
            "title": "On My Skin",
            "year": 2018,
            "description": "The incredible true story behind the most controversial Italian court cases in recent years. Stefano Cucchi was arrested for a minor crime and mysteriously found dead during his detention. In one week's time, a family is changed forever.",
            "genres": [
                "Drama"
            ],
            "id": "127"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
            "rating": 7.4,
            "title": "Shutter Island",
            "year": 2010,
            "description": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
            "genres": [
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "id": "128"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/79vujbsWEbX4dzffBV541QXN6sf.jpg",
            "rating": 4.3,
            "title": "Perfect Blue",
            "year": 1997,
            "description": "A retired pop singer turned actress' sense of reality is shaken when she is stalked by an obsessed fan and seemingly a ghost of her past.",
            "genres": [
                "Animation",
                "Thriller"
            ],
            "id": "129"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
            "rating": 7.9,
            "title": "Jojo Rabbit",
            "year": 2019,
            "description": "A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.",
            "genres": [
                "Comedy",
                "Drama",
                "War"
            ],
            "id": "130"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7Kk1ZsrAul2Lg7Pe45XOcUf2ARQ.jpg",
            "rating": 8,
            "title": "Ugetsu",
            "year": 1953,
            "description": "In 16th century Japan, peasants Genjuro and Tobei sell their earthenware pots to a group of soldiers in a nearby village, in defiance of a local sage's warning against seeking to profit from warfare. Genjuro's pursuit of both riches and the mysterious Lady Wakasa, as well as Tobei's desire to become a samurai, run the risk of destroying both themselves and their wives, Miyagi and Ohama.",
            "genres": [
                "Drama",
                "Fantasy",
                "Mystery"
            ],
            "id": "131"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/nGY6NnlDsWaRKAycWUgXanqLxia.jpg",
            "rating": 7.9,
            "title": "Scarface",
            "year": 1983,
            "description": "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
            "genres": [
                "Action",
                "Crime",
                "Drama",
                "Thriller"
            ],
            "id": "132"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/8Ga1CI4ZIIF8fxyfjZ5sNlb75e4.jpg",
            "rating": 7.8,
            "title": "A Whisker Away",
            "year": 2020,
            "description": "Miyo \"Muge\" Sasaki is a peculiar second-year junior high student who has fallen in love with her classmate Kento Hinode. Muge resolutely pursues Kento every day, but he takes no notice of her. Nevertheless, while carrying a secret she can tell no one, Muge continues to pursue Kento. Muge discovers a magic mask that allows her to transform into a cat named Tarō. The magic lets Muge get close to Kento, but eventually it may also make her unable to transform back to a human.",
            "genres": [
                "Animation",
                "Drama",
                "Fantasy",
                "Romance"
            ],
            "id": "133"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/9uZhgmOAH7eW4uWGL49HgIA0JtE.jpg",
            "rating": 6.5,
            "title": "I Corti",
            "year": 1996,
            "description": "The shorts of Aldo , Giovanni &amp; Giacomo was the first theatrical show of the trio of comedians Aldo , Giovanni &amp; Giacomo , with the participation of Marina Massironi .  The show is the son of the fortunate trio 's holdings in television as Mai dire Gol, and shows such as The Circus by Paolo Rossi and on the head !  The short was recorded live at the Teatro Nuovo in Ferrara on 28 and 29 March 1996. Produced by Agidi , the theater director is entrusted to the change artist Arturo Brachetti .",
            "genres": [
                "Comedy"
            ],
            "id": "134"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/JC8KQ2BXaAIFEU8zEuakiwUQSr.jpg",
            "rating": 8.5,
            "title": "Saving Private Ryan",
            "year": 1998,
            "description": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
            "genres": [
                "Drama",
                "History",
                "War"
            ],
            "id": "135"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/vgvw6w1CtcFkuXXn004S5wQsHRl.jpg",
            "rating": 5.9,
            "title": "Three Billboards Outside Ebbing, Missouri",
            "year": 2017,
            "description": "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "136"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/5zPZMoWV8bpT5BEyNuiJlR98AED.jpg",
            "rating": 6.8,
            "title": "The Great War",
            "year": 1959,
            "description": "Italy, 1916. Oreste Jacovacci and Giovanni Busacca are called, as all the Italian youths, to serve the army in the WWI. They both try in every way to avoid serving the army.",
            "genres": [
                "Comedy",
                "Drama",
                "War"
            ],
            "id": "137"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
            "rating": 8.1,
            "title": "Casablanca",
            "year": 1942,
            "description": "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "138"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/nCy3jMTTsvDzasiuOWrXoP5gyNI.jpg",
            "rating": 7,
            "title": "Bingo: The King of the Mornings",
            "year": 2017,
            "description": "1980s. Brazilian television exploding in color and auditorium programs not so politically correct. In the middle of this fervor, Augusto Mendes, a young rising actor, seeks his place in the sun. From porn studios to soap operas, he finally finds success and fame when he becomes \"Bingo\", a TV host clown from one of the audience leader TV shows for children. It turns out that behind the rice powder and red nose, nobody knows who he is.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "139"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7kUiA3FlSnZcsULjz1PhPZbo2gp.jpg",
            "rating": 6.8,
            "title": "The Red Shoes",
            "year": 1948,
            "description": "In this classic drama, Vicky Page is an aspiring ballerina torn between her dedication to dance and her desire to love. While her imperious instructor, Boris Lermontov, urges to her to forget anything but ballet, Vicky begins to fall for the charming young composer Julian Craster. Eventually Vicky, under great emotional stress, must choose to pursue either her art or her romance, a decision that carries serious consequences.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "140"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/u1Q3XY8KA5N1pPLD9BceUsLxCLU.jpg",
            "rating": 5.2,
            "title": "Mirror",
            "year": 1975,
            "description": "A dying man in his forties recalls his childhood, his mother, the war and personal moments that tell of and juxtapose pivotal moments in Soviet history with daily life.",
            "genres": [
                "Drama",
                "History"
            ],
            "id": "141"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/iBGRbLvg6kVc7wbS8wDdVHq6otm.jpg",
            "rating": 8.5,
            "title": "Lion",
            "year": 2016,
            "description": "A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia; 25 years later, he sets out to find his lost family.",
            "genres": [
                "Drama"
            ],
            "id": "142"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/vVJRemwt0WyqnwLMIAaa2FNZBME.jpg",
            "rating": 8.4,
            "title": "Hacksaw Ridge",
            "year": 2016,
            "description": "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
            "genres": [
                "Drama",
                "History",
                "War"
            ],
            "id": "143"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            "rating": 4.7,
            "title": "The Matrix",
            "year": 1999,
            "description": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
            "genres": [
                "Action",
                "Science Fiction"
            ],
            "id": "144"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/mWRQNlWXYYfd2z4FRm99MsgHgiA.jpg",
            "rating": 4.3,
            "title": "The Tale of the Princess Kaguya",
            "year": 2013,
            "description": "Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her - but ultimately she must confront her fate, the punishment for her crime.",
            "genres": [
                "Animation",
                "Drama",
                "Fantasy"
            ],
            "id": "145"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
            "rating": 8.6,
            "title": "Weathering with You",
            "year": 2019,
            "description": "Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hodaka Morishima, who struggles to financially support himself—ending up with a job at a small-time publisher. At the same time, the orphaned Hina Amano also strives to find work to sustain herself and her younger brother.\r Both fates intertwine when Hodaka attempts to rescue Hina from shady men, deciding to run away together. Subsequently, Hodaka discovers that Hina has a strange yet astounding power: the ability to call out the sun whenever she prays for it. With Tokyo's unusual weather in mind, Hodaka sees the potential of this ability. He suggests that Hina should become a \"sunshine girl\"—someone who will clear the sky for people when they need it the most.\r Things begin looking up for them at first. However, it is common knowledge that power always comes with a hefty price...",
            "genres": [
                "Adventure",
                "Animation",
                "Drama",
                "Fantasy",
                "Romance"
            ],
            "id": "146"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/6hg2UClwHGnBojemFrLgiF1WK8A.jpg",
            "rating": 5.2,
            "title": "M",
            "year": 1931,
            "description": "In this classic German thriller, Hans Beckert, a serial killer who preys on children, becomes the focus of a massive Berlin police manhunt. Beckert's heinous crimes are so repellant and disruptive to city life that he is even targeted by others in the seedy underworld network. With both cops and criminals in pursuit, the murderer soon realizes that people are on his trail, sending him into a tense, panicked attempt to escape justice.",
            "genres": [
                "Drama",
                "Action",
                "Thriller",
                "Crime"
            ],
            "id": "147"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/6ZzkiTbuf2ltEPunhQolGIcckyS.jpg",
            "rating": 5.8,
            "title": "A Special Day",
            "year": 1977,
            "description": "The film is set during the late 1930s: the occasion is the first meeting between Mussolini and Hitler. Left alone in her tenement home when her fascist husband runs off to attend the historic event, Antonietta strikes up a friendship with her homosexual neighbor Gabriele. As the day segues into night, Antonietta and Gabriele develop a very special relationship that will radically alter both of their outlooks on life.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "148"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/kMKyx1k8hWWscYFnPbnxxN4Eqo4.jpg",
            "rating": 5.6,
            "title": "Full Metal Jacket",
            "year": 1987,
            "description": "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
            "genres": [
                "Drama",
                "War"
            ],
            "id": "149"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/jK7aLEh1StwcLBK22NCHuDmCq90.jpg",
            "rating": 7.2,
            "title": "Ran",
            "year": 1985,
            "description": "With Ran, legendary director Akira Kurosawa reimagines Shakespeare's King Lear as a singular historical epic set in sixteenth-century Japan. Majestic in scope, the film is Kurosawa's late-life masterpiece, a profound examination of the folly of war and the crumbling of one family under the weight of betrayal, greed, and the insatiable thirst for power.",
            "genres": [
                "Action",
                "Drama",
                "History"
            ],
            "id": "150"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
            "rating": 4.3,
            "title": "There Will Be Blood",
            "year": 2007,
            "description": "Ruthless silver miner, turned oil prospector, Daniel Plainview moves to oil-rich California. Using his son to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainview's motives and intentions, starting a slow-burning feud that threatens both their lives.",
            "genres": [
                "Drama"
            ],
            "id": "151"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/12PuU23kkDLvTd0nb8hMlE3oShB.jpg",
            "rating": 4.8,
            "title": "The 400 Blows",
            "year": 1959,
            "description": "For young Parisian boy Antoine Doinel, life is one difficult situation after another. Surrounded by inconsiderate adults, including his neglectful parents, Antoine spends his days with his best friend, Rene, trying to plan for a better life. When one of their schemes goes awry, Antoine ends up in trouble with the law, leading to even more conflicts with unsympathetic authority figures.",
            "genres": [
                "Drama"
            ],
            "id": "152"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/ylagLHIbG0F1blqSFqY6pa56Omr.jpg",
            "rating": 4.1,
            "title": "Good Will Hunting",
            "year": 1997,
            "description": "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
            "genres": [
                "Drama"
            ],
            "id": "153"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/iYypPT4bhqXfq1b6EnmxvRt6b2Y.jpg",
            "rating": 7.3,
            "title": "In the Mood for Love",
            "year": 2000,
            "description": "Taking place in Hong Kong of 1962, a melancholy story about the love between a woman and a man who live in the same building and one day find out that their husband and wife had an affair with each other.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "154"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/uQj3kqTPOVnEFnWr7esi90ZyzTm.jpg",
            "rating": 5.4,
            "title": "Central Station",
            "year": 1998,
            "description": "An emotive journey of a former school teacher, who writes letters for illiterate people, and a young boy, whose mother has just died, as they search for the father he never knew.",
            "genres": [
                "Drama"
            ],
            "id": "155"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg",
            "rating": 7.8,
            "title": "Harry Potter and the Deathly Hallows: Part 2",
            "year": 2011,
            "description": "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
            "genres": [
                "Adventure",
                "Fantasy"
            ],
            "id": "156"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/qjWV4Aq4t0SMhuRpkJ4q3D6byXq.jpg",
            "rating": 5.1,
            "title": "Michael Jackson's Thriller",
            "year": 1983,
            "description": "A night at the movies turns into a nightmare when Michael and his date are attacked by a hoard of bloody-thirsty zombies.",
            "genres": [
                "Horror",
                "Music"
            ],
            "id": "157"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/7blrzLLfj34vV45HYmPccvhNSRZ.jpg",
            "rating": 4.2,
            "title": "Doctor Who: The Time of the Doctor",
            "year": 2013,
            "description": "Orbiting a quiet backwater planet, the massed forces of the universe's deadliest species gather, drawn to a mysterious message that echoes out to the stars. And amongst them, the Doctor. Rescuing Clara from a family Christmas dinner, the Time Lord and his best friend must learn what this enigmatic signal means for his own fate and that of the universe.",
            "genres": [
                "Drama",
                "Science Fiction",
                "TV Movie"
            ],
            "id": "158"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/4pzN52wxBZ05EXBdoii1kqoIoD4.jpg",
            "rating": 6.3,
            "title": "A Dog's Journey",
            "year": 2019,
            "description": "A dog finds the meaning of his own existence through the lives of the humans he meets.",
            "genres": [
                "Family"
            ],
            "id": "159"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
            "rating": 9,
            "title": "My Neighbor Totoro",
            "year": 1988,
            "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
            "genres": [
                "Animation",
                "Fantasy",
                "Family"
            ],
            "id": "160"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/tgw3TJTWgNUYCgL5Pa546VVVvSU.jpg",
            "rating": 5,
            "title": "Paris, Texas",
            "year": 1984,
            "description": "A man wanders out of the desert not knowing who he is. His brother finds him, and helps to pull his memory back of the life he led before he walked out on his family and disappeared four years earlier.",
            "genres": [
                "Drama"
            ],
            "id": "161"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/kDUUdWrbBBVqzSmm27pHFJcTvCU.jpg",
            "rating": 8.6,
            "title": "Nobody Knows",
            "year": 2004,
            "description": "In a small Tokyo apartment, twelve-year-old Akira must care for his younger siblings after their mother leaves them and shows no sign of returning.",
            "genres": [
                "Drama"
            ],
            "id": "162"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/hWw9HfQmd4Rn1Et4vgZQsEf5tEZ.jpg",
            "rating": 7,
            "title": "The Circus",
            "year": 1928,
            "description": "Charlie, a wandering tramp, becomes a circus handyman and falls in love with the circus owner's daughter. Unaware of Charlie's affection, the girl falls in love with a handsome young performer. Charlie's versatility makes him star of the show when he substitutes for an ailing tightwire walker. He is discharged from the company when he protects the girl from her father's abuse, but he returns and appeals to the handsome performer to marry the girl. After the wedding the father prevails upon them to rejoin the circus. Charlie is hired again, but he stays behind when the caravan moves on.",
            "genres": [
                "Comedy",
                "Romance"
            ],
            "id": "163"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/yK0qrQhi3BbOXvTNOBWHgpcbckZ.jpg",
            "rating": 8.2,
            "title": "Django Unchained",
            "year": 2012,
            "description": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            "genres": [
                "Drama",
                "Western"
            ],
            "id": "164"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
            "rating": 7.9,
            "title": "Alien",
            "year": 1979,
            "description": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
            "genres": [
                "Horror",
                "Science Fiction"
            ],
            "id": "165"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/pCURNjeomWbMSdiP64gj8NVVHTQ.jpg",
            "rating": 6.4,
            "title": "Room",
            "year": 2015,
            "description": "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "id": "166"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/l31rzdZ2fDwkB56YWotbqMCGzSh.jpg",
            "rating": 6.7,
            "title": "Bacurau",
            "year": 2019,
            "description": "Bacurau, a small town in the Brazilian sertão, mourns the loss of its matriarch, Carmelita, who lived to be 94. Days later, its inhabitants notice that their community has vanished from most maps.",
            "genres": [
                "Mystery",
                "Thriller",
                "Western"
            ],
            "id": "167"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/zQdcNGCi4aVIv02wMHaTWlF7M2w.jpg",
            "rating": 4.8,
            "title": "Incendies",
            "year": 2010,
            "description": "A mother's last wishes send twins Jeanne and Simon on a journey to Middle East in search of their tangled roots. Adapted from Wajdi Mouawad's acclaimed play, Incendies tells the powerful and moving tale of two young adults' voyage to the core of deep-rooted hatred, never-ending wars and enduring love.",
            "genres": [
                "Drama",
                "Mystery",
                "War"
            ],
            "id": "168"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
            "rating": 7.1,
            "title": "Eternal Sunshine of the Spotless Mind",
            "year": 2004,
            "description": "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
            "genres": [
                "Drama",
                "Science Fiction",
                "Romance"
            ],
            "id": "169"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/5BCyeLJHPcRwhu0YaRqUzw00JJ4.jpg",
            "rating": 8.7,
            "title": "The Lives of Others",
            "year": 2006,
            "description": "A tragic love story set in East Berlin with the backdrop of an undercover Stasi controlled culture. Stasi captain Wieler is ordered to follow author Dreyman and plunges deeper and deeper into his life until he reaches the threshold of doubting the system.",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "id": "170"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/ewH7inSEI7IUOkFcwFgpbEQHWK1.jpg",
            "rating": 6.1,
            "title": "The General",
            "year": 1926,
            "description": "During America’s Civil War, Union spies steal engineer Johnnie Gray's beloved locomotive, 'The General'—with Johnnie's lady love aboard an attached boxcar—and he single-handedly must do all in his power to both get The General back and to rescue Annabelle.",
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "War"
            ],
            "id": "171"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/v1RtJ1qR4v9nrnfoBVBl6hjTW9.jpg",
            "rating": 4.7,
            "title": "On the Waterfront",
            "year": 1954,
            "description": "Terry Malloy dreams about being a prize fighter, while tending his pigeons and running errands at the docks for Johnny Friendly, the corrupt boss of the dockers union. Terry witnesses a murder by two of Johnny's thugs, and later meets the dead man's sister and feels responsible for his death. She introduces him to Father Barry, who tries to force him to provide information for the courts that will smash the dock racketeers.",
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "172"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/2BhhlAYwKvONGW7tr16ZhnD0sym.jpg",
            "rating": 4.2,
            "title": "The Way He Looks",
            "year": 2014,
            "description": "Leonardo is a blind teenager dealing with an overprotective mother while trying to live a more independent life. To the disappointment of his best friend, Giovana, he plans to go on an exchange program abroad. When Gabriel, a new student in town, arrives at their classroom, new feelings blossom in Leonardo making him question his plans.",
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "173"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/xF4oCG3PLNbcrtPZbqB3BtkIbKg.jpg",
            "rating": 4.7,
            "title": "Nights of Cabiria",
            "year": 1957,
            "description": "Rome, 1957. A woman, Cabiria, is robbed and left to drown by her boyfriend, Giorgio. Rescued, she resumes her life and tries her best to find happiness in a cynical world. Even when she thinks her struggles are over and she has found happiness and contentment, things may not be what they seem.",
            "genres": [
                "Drama"
            ],
            "id": "174"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/53pVRKhc7Gz972hPZOK6FX329w0.jpg",
            "rating": 7,
            "title": "Hotarubi no Mori e",
            "year": 2011,
            "description": "One hot summer day a little girl gets lost in an enchanted forest of the mountain god where spirits reside. A young boy appears before her, but she cannot touch him for fear of making him disappear. And so a wondrous adventure awaits...",
            "genres": [
                "Animation",
                "Fantasy",
                "Romance"
            ],
            "id": "175"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/bW4tXG8kZ89ZCurPnzDDSzJbeF5.jpg",
            "rating": 6.7,
            "title": "La Haine",
            "year": 1995,
            "description": "After a chaotic night of rioting in a marginal suburb of Paris, three young friends, Vinz, Hubert and Saïd, wander around unoccupied waiting for news about the state of health of a mutual friend who has been seriously injured when confronting the police.",
            "genres": [
                "Drama"
            ],
            "id": "176"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/bDohw4b035IOJ9SPaw9lpNhZMyB.jpg",
            "rating": 5.8,
            "title": "The Truman Show",
            "year": 1998,
            "description": "Truman Burbank is the star of The Truman Show, a 24-hour-a-day reality TV show that broadcasts every aspect of his life without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows, including his wife and his best friend is really an actor, paid to be part of his life.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "177"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/19Hc54ebzdvF3usVEmyn948U4Xr.jpg",
            "rating": 7.1,
            "title": "The Elephant Man",
            "year": 1980,
            "description": "A Victorian surgeon rescues a heavily disfigured man being mistreated by his \"owner\" as a side-show freak. Behind his monstrous façade, there is revealed a person of great intelligence and sensitivity. Based on the true story of Joseph Merrick (called John Merrick in the film), a severely deformed man in 19th century London.",
            "genres": [
                "Drama",
                "History"
            ],
            "id": "178"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/98bgKk9qr2cTjZYVhZy5V6pw1b1.jpg",
            "rating": 5.5,
            "title": "The Specials",
            "year": 2019,
            "description": "For twenty years, Bruno and Malik have lived in a different world—the world of autistic children and teens. In charge of two separate nonprofit organizations (The Hatch & The Shelter), they train young people from underprivileged areas to be caregivers for extreme cases that have been refused by all other institutions. It’s an exceptional partnership, outside of traditional settings, for some quite extraordinary characters.",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "179"
        },
        {
            "img": "https://scintillating-manatee-558b96.netlify.app/img/8OYGtQlO8k9PcOm49apV62eVJQo.jpg",
            "rating": 7.5,
            "title": "The Passion of Joan of Arc",
            "year": 1928,
            "description": "A classic of the silent age, this film tells the story of the doomed but ultimately canonized 15th-century teenage warrior. On trial for claiming she'd spoken to God, Jeanne d'Arc is subjected to inhumane treatment and scare tactics at the hands of church court officials. Initially bullied into changing her story, Jeanne eventually opts for what she sees as the truth. Her punishment, a famously brutal execution, earns her perpetual martyrdom.",
            "genres": [
                "Drama",
                "History"
            ],
            "id": "180"
        }
    ]
}
router.get('/movies',(req, res) => {
    const {timeout} = req.query;
    if (timeout) {
        setTimeout(() => {
            res.json(movies)
        }, +timeout * 1000)
    } else {
        res.json(movies)
    }
});

router.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    const {timeout} = req.query;
    if (timeout) {
        setTimeout(() => {
            res.json(movies.movies.filter(movie => movie.id === id))
        }, +timeout * 1000)
    } else {
    res.json(movies.movies.filter(movie => movie.id === id))
    }
});

app.use(cors({
    origin: '*'
}));

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);


