

import chrome from "../../assets/images/logo-chrome.svg"
import firefox from "../../assets/images/logo-firefox.svg"
import opera from "../../assets/images/logo-opera.svg"
import dots from "../../assets/images/bg-dots.svg"

const downloadsData = [
    {
        id:0,
        version:"Minimum version 62",
        title:"Add to Chrome",
        dots:dots,
        imgSrc:chrome,
        CTA:"Add & Install Extension",
        altText:"Google Chrome logo"
        
    },
    {
        id:1,
        version:"Minimum version 55",
        title:"Add to Firefox",
        dots:dots,
        imgSrc:firefox,
        CTA:"Add & Install Extension",
        altText:"Firefox logo"
    },
    {
        id:2,
        version:"Minimum version 46",
        title:"Add to Opera",
        dots:dots,
        imgSrc:opera,
        CTA:"Add & Install Extension",
        altText:"Opera logo"
    },
]

export default downloadsData;