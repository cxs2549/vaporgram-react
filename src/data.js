const randomCity = require("random-city-from-list")
const rug = require("random-username-generator")
rug.setSeperator("")

const longUsernames = Array.from({ length: 10 }, (user) => rug.generate())

const truncate = (str, maxLength) =>
    str.length <= maxLength ? str : str.substring(0, maxLength) + "..."

let shortUsernames = []
longUsernames.forEach((name) => {
    shortUsernames.push(truncate(name, 9))
})

const cities = Array.from({ length: 20 }, () => randomCity.random())

const data = {
    avatars: [
        "https://64.media.tumblr.com/3b1e340a2d4536ce5964799fe17cc067/f4e34603b8e1d845-39/s500x750/248fafd071318525e980e858f9a9f387ebc9a3cc.gif",

        "https://64.media.tumblr.com/a9952b207898443f39821f59d90adbfb/80e3748c40584e58-52/s500x750/c24ed1e5ea44b47e3bd7827d3682745e46958063.jpg",
        "https://64.media.tumblr.com/925df36e3884a2e820bbbbb850bf3e4f/f5c9b31799c132f6-fb/s500x750/735aa42bc103a7d1b418c6b1b57bf4c0f6130b03.jpg",
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/vaporwave-statue-aesthetic-play-bust-1980-surreal-glitch-art-design-dc-designs-suamaceir.jpg",
        "https://64.media.tumblr.com/8217abd102e8ab8232f608387a1d6f08/5391df08bd404979-e6/s400x600/73c6d83da9515972a87538545a8b2cfe722c8fe8.png",
        "https://64.media.tumblr.com/cd8d324f786eb7cc2a7d579795b2d2a4/f8e89c5ccadac399-14/s500x750/394da58edea64dea924cec057e40bc593875b305.gifv",
        "https://64.media.tumblr.com/e121f93081f3ec18b4d3d5933db4d292/tumblr_octfe1QIVe1v5i3nmo4_400.jpg",
        "https://64.media.tumblr.com/091a7bc8f5791ddb918daa7781ca3b59/5171475e1538a976-ea/s1280x1920/1182b7747b7517c113f7e8b2318082beeb9d3831.jpg",
        "https://64.media.tumblr.com/234d89989f7f5f3bb317cb69b648a72b/05b11737c45f75e7-a6/s400x600/ee48ed93f76fd7c541bf92f92b5f3cdef8fe8365.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
        "https://64.media.tumblr.com/4e9e3a8f042fbf31116e74e838702f19/ce94587b0f44cb6e-83/s400x600/ddf72dfd6452b681442c2fe41178cfec6ffdc75c.gif",
    ],
    longNames: longUsernames,
    shortNames: shortUsernames,
    locations: cities.map((city, i) => Object.values(city).join(", ")),
    photos: [
        "https://images.pexels.com/photos/948331/pexels-photo-948331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://wallpaperxyz.com/wp-content/uploads/Aesthetic-HD-Wallpaper-Free-Download-for-Desktop-PC-Wallpaperxyz.com-2.jpg",
        "https://wallpaperxyz.com/wp-content/uploads/Aesthetic-HD-Wallpaper-Free-Download-for-Desktop-PC-Wallpaperxyz.com-13.png",
        "https://images.pexels.com/photos/3791855/pexels-photo-3791855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700",
        "https://images.pexels.com/photos/4617235/pexels-photo-4617235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700",
        "https://images.pexels.com/photos/2683365/pexels-photo-2683365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://wallpaperxyz.com/wp-content/uploads/Aesthetic-HD-Wallpaper-Free-Download-for-Desktop-PC-Wallpaperxyz.com-12.jpg",
        "https://64.media.tumblr.com/6fb614085d6ab9f709672fc181ddb451/tumblr_ni1d53LprW1qfhbsvo1_1280.png",
        "https://images.pexels.com/photos/2519104/pexels-photo-2519104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700",
        "https://64.media.tumblr.com/22f59962f03b1bdea7d29433a3261688/tumblr_pd7uj7jvZq1txp5igo1_1280.png",
    ],
    comments: {
        likes: Array.from({ length: 20 }, () =>
            Math.floor(Math.random() * 2000).toLocaleString("en")
        ),
        words: ["likes", "likes", "views", "likes", "views", "views", "likes"],
        icons: [
            "",
            "",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg",
        ],
        mainCaption: [
            "chill night at Dockweiler",
            "riding hard asf",
            "love it at Universal this time of year!",
        ],
        viewAll: Array.from({ length: 20 }, () =>
            Math.floor(Math.random() * 2000).toLocaleString("en")
        ),
        commentor1: ["deancambell", "brucebuffer", "alanrex"],
        commentor2: ["marklobb", "ashleym", "davidderk"],
        comment1: [
            "Sick wave dawg thanks for drinks friday!",
            "imagine getting your tooth knocked out by a little dog and having to go back home to your big dog",
            "ooh that looks so peaceful!",
        ],
        comment2: ["feelin it", "i'll be out there next weekend dude", "i miss LA"],
        hoursAgo: Array.from({ length: 20 }, () => Math.floor(Math.random() * 22 + 1)),
    },
    sidebar: {
        followedby: [
            "Followed by samanthasambile + 1",
            "Followed by joerogan + 3",
            "Suggested for you",
            "Followed by arnie",
            "Followed by amor + 2",
        ],
        more: ["Suggested for you", "", "more", "", "more"],
        avatars: [
            "https://64.media.tumblr.com/3d9f979b662b0977658803a90e236bea/2303b5632cec211c-38/s500x750/8b778c8ca9cddfb4ecb89ae6d4802140a65d4dc5.jpg",
            "https://64.media.tumblr.com/7216d228f54f245a7cd362e9783c21ce/d51bed8cd573d960-77/s640x960/678db38152cc3cafee2177735a9337b0f397e5c7.jpg",
            "https://64.media.tumblr.com/6e13027d0616f1efbf2acddd8f0c896a/93eb180d29a61d96-f1/s500x750/9dbd3aa5bf4660587a15a3da54e43be4fade7a26.gif",
            "https://64.media.tumblr.com/d58bf88a331a12a0201452fa49bed5cf/ed361b6171f2e2f8-85/s500x750/41c1ac7168cd764921ec915735a70f296e58229a.jpg",
            "https://64.media.tumblr.com/a3fa26379f8ffb7f8d5f727a585e0537/975c66874afc9f4d-26/s400x600/9281b227071efdd063e4954a6ff17c58f2876d0e.png",
        ],
    },
}

// console.log(longUsernames)
export default data
