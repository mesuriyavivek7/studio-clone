//import images
import Review1 from './images/review1.jpg'
import Review2 from './images/review2.jpg'
import Review3 from './images/review3.jpg'

//album 1 data
import PIC1 from './images/album-1-pic1.jpg'
import PIC2 from './images/album-1-pic2.jpg'
import PIC3 from './images/album-1-pic3.jpg'
import PIC4 from './images/album-1-pic4.jpg'
import PIC5 from './images/album-1-pic5.jpg'
import PIC6 from './images/album-1-pic6.jpg'
import PIC7 from './images/album-1-pic7.jpg'
import PIC8 from './images/album-1-pic8.jpg'
import PIC9 from './images/album-1-pic9.jpg'
import PIC10 from './images/album-1-pic10.jpg'
import PIC11 from './images/album-1-pic11.jpg'
import PIC12 from './images/album-1-pic12.jpg'
import PIC13 from './images/album-1-pic13.jpg'
import PIC14 from './images/album-1-pic14.jpg'
import PIC15 from './images/album-1-pic15.jpg'
import PIC16 from './images/album-1-pic16.jpg'


//import data twinkle-maulic pic
import TM1 from './images/albumc-1.jpg'
import TM2 from './images/albumc-2.jpg'
import TM3 from './images/albumc-3.jpg'
import TM4 from './images/albumc-4.jpg'
import TM5 from './images/albumc-5.jpg'
import TM6 from './images/albumc-6.jpg'
import TM7 from './images/albumc-7.jpg'
import TM8 from './images/albumc-8.jpg'


//export insta data
import INSTA1 from './images/insta1.jpg'
import INSTA2 from './images/insta2.jpg'
import INSTA3 from './images/insta3.webp.jpg'
import INSTA4 from './images/insta4.webp.jpg'
import INSTA5 from './images/insta5.webp.jpg'
import INSTA6 from './images/insta6.webp.jpg'




export const reviews=[
    {
        id:1,
        head:'"We just wanted to say a huge thank you for all your work on our Pre-wedding!',
        para:'We love our photos and how you’ve captured every precious moment of our ceremony in detail.We can’t thank you enough. It was wonderful to meet you, you have left a lasting memory with us. Thanking you once again. Take care and regards"',
        name:'Hems & Ugmi',
        img:Review1
        
    },
    {
        id:2,
        head:'“Just wanted to say thank you so so much for being a part of our special day.“',
        para:'Honestly the photos are absolutely amazing. We are so happy with them. Everyone has said how great you were on the day!! You got some amazing shots and came back with the photos so quickly. We will definitely write you a great review and recommend you to all of our friends.',
        name:'Brijesh & Hemangi',
        img:Review2
    },
    {
        id:3,
        head:'“Wow we are both blown away, these photos are beautiful. Thank you so much for capturing our wedding day.',
        para:'We love our photos and how you’ve captured every precious moment of our ceremony in detail. We can’t thank you enough. It was wonderful to meet you, you have left a lasting memory with us.Thanking you once again. Take care and regards"',
        name:'Parth & Shreya',
        img:Review3
    }
]


//albums data


export const albums={

    album1:{
        head:"Pinank & Isha",
        desc:"Royal Wedding",
       row1:[PIC2,PIC1,PIC3,PIC4,PIC5,PIC6],
       row2:[PIC15,PIC8,PIC9,PIC7],
       row3:[PIC12,PIC11,PIC13,PIC14,PIC10,PIC16]
    }
    ,
    album2:{
        head:"Sumant & Prexa",
        desc:"Best Weddong",
        row1:[PIC1,PIC2,PIC3,PIC4,PIC5],
        row2:[PIC6,PIC7,PIC8,PIC9,PIC10],
        row3:[PIC11,PIC12,PIC13,PIC14,PIC16]
    }
    ,
    album3:{
        head:"Nishant & Neha",
        desc:"Best Weddong",
        row1:[PIC1,PIC2,PIC3,PIC13,PIC5],
        row2:[PIC7,PIC7,PIC8,PIC9,PIC10],
        row3:[PIC11,PIC16,PIC13,PIC14,PIC14]
    },
    albumA:{
        head:"Sumant & Prexa",
        desc:"Best Weddong",
        row1:[PIC1,PIC2,PIC3,PIC4,PIC5],
        row2:[PIC6,PIC7,PIC8,PIC9,PIC10],
        row3:[PIC11,PIC12,PIC13,PIC14,PIC16]
    },
    albumB:{
        head:"Ronak & Khushi",
        desc:"Best Weddong",
        row1:[PIC11,PIC12,PIC13,PIC14,PIC16],
        row2:[PIC6,PIC7,PIC8,PIC9,PIC10],
        row3:[PIC1,PIC2,PIC3,PIC4,PIC5]
    
    },
    albumC:{
        head:"Twinkle & Maulik",
        desc:"Romantic Weddong",
        row1:[TM1,TM2],
        row2:[TM4,TM5,TM3],
        row3:[TM7,TM8,TM6]
    
    }



}


//export album1 
export const album1={
    head:"Pinank & Isha",
    desc:"Royal Wedding",
   row1:[PIC1,PIC2,PIC3,PIC4,PIC5,PIC6],
   row2:[PIC7,PIC8,PIC9,PIC10],
   row3:[PIC11,PIC12,PIC13,PIC14,PIC15,PIC16]
}

//export album2
export const album2={
    head:"Sumant & Prexa",
    desc:"Best Weddong",
    row1:[PIC1,PIC2,PIC3,PIC4,PIC5],
    row2:[PIC6,PIC7,PIC8,PIC9,PIC10],
    row3:[PIC11,PIC12,PIC13,PIC14,PIC16]
}

//export album3
export const album3={
    head:"Nishant & Neha",
    desc:"Best Weddong",
    row1:[PIC1,PIC2,PIC3,PIC4,PIC5],
    row2:[PIC6,PIC7,PIC8,PIC9,PIC10],
    row3:[PIC11,PIC12,PIC13,PIC14,PIC16]
}

//export albuma
export const albumA={
    head:"Sumant & Prexa",
    desc:"Best Weddong",
    row1:[PIC1,PIC2,PIC3,PIC4,PIC5],
    row2:[PIC6,PIC7,PIC8,PIC9,PIC10],
    row3:[PIC11,PIC12,PIC13,PIC14,PIC16]
}

//export albumB
export const albumB={
    head:"Sumant & Prexa",
    desc:"Best Weddong",
    row1:[PIC1,PIC2,PIC3,PIC4,PIC5],
    row2:[PIC6,PIC7,PIC8,PIC9,PIC10],
    row3:[PIC11,PIC12,PIC13,PIC14,PIC16]

}

//export albumc
export const albumC={
    head:"Sumant & Prexa",
    desc:"Best Weddong",
    row1:[PIC1,PIC2,PIC3,PIC4,PIC5],
    row2:[PIC6,PIC7,PIC8,PIC9,PIC10],
    row3:[PIC11,PIC12,PIC13,PIC14,PIC16]

}


//import insta data

export const insta=[
    {
        img:INSTA1,
        link:'https://www.instagram.com/p/CiZaeXUpVyB/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    },
    {
       img:INSTA2,
       link:'https://www.instagram.com/p/ClWCuJjpxR6/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    },
    {
        img:INSTA3,
        link:'https://www.instagram.com/p/CpMWSVwvy5F/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    },
    {
        img:INSTA4,
        link:'https://www.instagram.com/p/Cpe9VKWvHHq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    },
    {
        img:INSTA5,
        link:'https://www.instagram.com/p/CpEowyuP38t/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    },
    {
        img:INSTA6,
        link:'https://www.instagram.com/p/CpJksQePjb9/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    }

]