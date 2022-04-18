import ListOfDatails from "../interfaces/ListOfDatails"
import InstagramIcon from '../assets/instagram.svg'
import TwitterIcon from '../assets/twitter.svg'
import LinkedinIcon from '../assets/linkedin.svg'

const listOfDetails: ListOfDatails[] = [
    {
        id: 1,
        condition01: 'Make a posts with photos;',
        condition02: 'Shedule posts;',
        condition03: '5 posts for day.',
        image: InstagramIcon
    },

    {
        id: 2,
        condition01: 'Make a posts with photos;',
        condition02: 'Shedule posts;',
        condition03: 'Include tags.',
        image: TwitterIcon
    },

    {
        id: 3,
        condition01: 'Make a posts with photos;',
        condition02: 'Shedule posts;',
        condition03: '3 posts for day.',
        image: LinkedinIcon
    }
]

export default listOfDetails
