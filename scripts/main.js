const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
const startPlay = document.querySelector('#start-play');
const startPlayIcon = document.querySelector('#start-play-icon');
const video = document.querySelector('#video');
const galleryItem = document.querySelectorAll('.gallery__item');
const popup = document.querySelector('.popup')
const overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', function () {
    this.classList.toggle('active')
    nav.classList.toggle('active-nav')
})


startPlay.addEventListener(`click`, () => {
    const icon = startPlay.querySelector('.fas')
    icon.classList.toggle('fa-play-circle')
    icon.classList.toggle('fa-pause-circle');
    if (video.playing) {
        video.play()
    }
})

const gallery = [
    {
        id: 1,
        title: "Big cities",
        subtitle1: "The city of Whiteburn was built atop quiet and serene hills and is truly an extraordinary display of wonder. Its appearance is matched by the backdrop of a dorment volcano which have helped shape the city to what it is today.",
        subtitle2: "The riches these volcanoes brought were of great importance, but they were also influential when it came to architectural designs as the vast majority of buildings have been built with volcanic rocks and similar looking materials.",
        client: "Thomas Michilson",
        data: "14.05.1995",
        share: "Twiiter",
        image: "assets/images/1.jpg"
    },
    {
        id: 2,
        title: "London",
        subtitle1: "London, city, capital of the United Kingdom. It is among the oldest of the world’s great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain’s largest metropolis, it is also the country’s economic, transportation, and cultural centre.",
        subtitle2: "London is situated in southeastern England, lying astride the River Thames some 50 miles (80 km) upstream from its estuary on the North Sea.",
        client: "Joanna Krete",
        data: "10.02.1967",
        share: "Instagram,Facebook",
        image: "assets/images/2.jpg"
    },
    {
        id: 3,
        title: "Washington",
        subtitle1: "Washington, constituent state of the United States of America. Lying at the northwestern corner of the 48 conterminous states, it is bounded by the Canadian province of British Columbia to the north, the U.S. states of Idaho to the east and Oregon to the south, and the Pacific Ocean to the west",
        subtitle2: "The capital is Olympia, located at the southern end of Puget Sound in the western part of the state",
        client: "Gregory Nichilson",
        data: "25.03.1978",
        share: "Facebook",
        image: "assets/images/3.jpg"
    },
    {
        id: 4,
        title: "Summer",
        subtitle1: "Summer is the warmest season of the year, falling between spring and autumn. Temperatures over the period differ based upon the location on the Earth; regions near the equator are typically warmer than those lying near the poles.",
        subtitle2: "The summer equinox occurs when the sun passes directly above the equator because of the tilt of the Earth",
        client: "Gregory Anewy",
        data: "07.11.1999",
        share: "Instagram",
        image: "assets/images/4.jpg"
    },
    {
        id: 5,
        title: "Street",
        subtitle1: "The blacktop streets absorb the spring sunshine as if intent upon sending heaven's warmth back through my soles.The streets absorbed the emotions in the air, the city as the steady and reassuring mother.",
        subtitle2: "The streets are the most private of public spaces, much the same as walking in a country lane in some rural place. Yet if you are okay with solitude, if you matured passed the point of loneliness to feel your own worth, there is a vibrancy here that can uplift the soul. All around there are moments of kindness, fleeting smiles and gestures of appreciation that are the beauty on this canvas of weathered grey",
        client: "Michael Aztecky",
        data: "06.12.1995",
        share: "Twitter",
        image: "assets/images/5.jpg"
    },
    {
        id: 6,
        title: "Yellow cab",
        subtitle1: "There are many yellow cab taxicab operators around the world (some with common heritage, some without). The original Yellow Cab Company, based in Chicago, Illinois, was one of the largest taxicab companies in the United States.",
        subtitle2: "Yellow cabs date back to at least 1798, when the musical comedy, Cabriolet Jaune (Yellow Cab), debuted at Paris' Theatre de l’Opera Comique National. Yellow cabs were known in Paris and London throughout most of the 1800s. A yellow cab company shook up the New York Cab system in the mid-1880s, offering cheaper, more predictable fares than competitors.",
        client: "Chris Monty",
        data: "10.05.1991",
        share: "Facebook",
        image: "assets/images/6.jpg"
    }, {
        id: 7,
        title: "Model",
        subtitle1: "Models promote, advertise, and showcase clothing, footwear, and other products. They participate in photoshoots, fashion shows, commercials, trade shows, and conventions as well as pose for sculptors, artists, and painters.",
        subtitle2: "he model’s responsibilities include building good working relationships with photographers, directors, fashion coordinators, and other Models.",
        client: "Zophie Teoly",
        data: "17.09.2005",
        share: "Instagram",
        image: "assets/images/7.jpg"
    }, {
        id: 8,
        title: "Autumn ",
        subtitle1: "Autumn, season of the year between summer and winter during which temperatures gradually decrease. It is often called fall in the United States because leaves fall from the trees at that time.",
        subtitle2: "Autumn is usually defined in the Northern Hemisphere as the period between the autumnal equinox (day and night equal in length), September 22 or 23, and the winter solstice (year’s shortest day), December 21 or 22; and in the Southern Hemisphere as the period between March 20 or 21 and June 21 or 22.",
        client: "Takashi Nowvakov",
        data: "05.11.1999",
        share: "Instagram,Twitter",
        image: "assets/images/8.jpg"
    }, {
        id: 9,
        title: "Lake",
        subtitle1: "A lake is a body of water that is surrounded by land. There are millions of lakes in the world. They are found on every continent and in every kind of environment—in mountains and deserts, on plains, and near seashores.",
        subtitle2: "Lakes vary greatly in size. Some measure only a few square meters and are small enough to fit in your backyard",
        client: "Michael Jordan",
        data: "23.11.1995",
        share: "Twitter,Facebook",
        image: "assets/images/9.jpg"
    }, {
        id: 10,
        title: "View",
        subtitle1: "'Murray's Report' of 1762 gives us a good view of the Canada of that day and shows the attitude of the British towards their new possession.",
        subtitle2: "I succeeded in gaining the foot of the cliff on the eastern extremity of the glacier, and there discovered the mouth of a narrow avalanche gully, through which I began to climb, intending to follow it as far as possible, and at least obtain some fine wild views for my pains.",
        client: "Gregory Anders",
        data: "01.06.1976",
        share: "Facebook",
        image: "assets/images/10.jpg"
    }, {
        id: 11,
        title: "Dusk",
        subtitle1: "The dusk comes as a promise of starlight, of those brilliant pearls of the nighttime that sit as if cushioned upon pure black velvet. ",
        subtitle2: "Dusk comes to bring us moonlight, to the time of reflection upon the day passed and awaiting day to be renewed by the light of the sun. It is when the birds sing goodnight until the stars bid them to dream under-wing. Each hue deepens in noble solemnity, finding unity in the night.",
        client: "Any Thompson",
        data: "31.07.1977",
        share: "Instagram",
        image: "assets/images/11.jpg"
    }, {
        id: 12,
        title: "Sunset",
        subtitle1: "Sunset, also known as sundown, is the daily disappearance of the Sun below the horizon due to Earth's rotation. As viewed from everywhere on Earth (except the North and South poles), the equinox Sun sets due west at the moment of both the Spring and Autumn equinox. As viewed from the Northern Hemisphere..",
        subtitle2: "The sun sets to the northwest (or not at all) in the Northern hemisphere's spring and summer, and to the southwest in the autumn and winter; these seasons are reversed for the Southern Hemisphere",
        client: "Matheo Nichelson",
        data: "11.03.2000",
        share: "Twitter",
        image: "assets/images/12.jpg"
    }
]

overlay.style.visibility = "hidden"

galleryItem.forEach(item => {
    item.addEventListener('click', function () {
        console.log(item);
        overlay.style.visibility = "visible"
        document.body.style.overflowY = "hidden"
        const IdNumber = item.id.replace('item-', '');
        const clickeditem = gallery.filter(item => item.id == IdNumber);
        console.log(clickeditem);
        clickeditem.forEach(item => {
            popup.innerHTML = `
            <div class="popup__content">
                <div class="popup__container">
                <div>
                    <h3 class="popup__title">${item.title}</h3>
                    <p class="popup__subtitle">${item.subtitle1}</p>
                    <p class="popup__subtitle">${item.subtitle2}</p>
    
                    <div class="popup__data">
                        <p><b>Client:</b>${item.client}</p>
                        <p><b>Date:</b>${item.data}</p>
                        <p><b>Share:</b>${item.share}</p>
                    </div>
                </div>
                <img src="${item.image}" alt="${item.title}-image" class="popup__image">
            </div>
                <div class="popup__close-container">
                  <i class="fas fa-times popup__close" id="close-popup"></i>
                </div>
            </div>
            `

            const closePopup = document.getElementById('close-popup');
            closePopup.addEventListener('click', function (e) {
                console.log(e.target.parentElement.parentElement);
                e.target.parentElement.parentElement.classList.add('closePopup');
                overlay.style.visibility = "hidden";
                document.body.style.overflowY = "auto"
            })
        })


    })
})
