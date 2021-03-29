import cR from '../../images/the_corbett_report.png';
import gEW from '../../images/GEW_Logo_Lo_Qual-9150801.jpg';
import tCR from '../../images/TCR_Lo_Qual-9150710.jpg';
import tLAV from '../../images/TLAV_Logo-9150588.jpg';
import wW from '../../images/whitney_webb.jpeg';
import Link from '../Link/Link';

const linksInfo = {
        cR: {
            url: 'https://www.corbettreport.com/',
            image: cR,
        },
        gEW: {
            url: 'https://www.geoengineeringwatch.org/',
            image: gEW,
        },
        tCR: {
            url: 'https://www.geoengineeringwatch.org/',
            image: tCR,
        },
        tLAV: {
            url: 'https://www.thelastamericanvagabond.com/',
            image: tLAV
        },
        wW: {
            url: 'https://unlimitedhangout.com/',
            image: wW,
        }
    }

    export const renderLinks = () => {
        const linkKeys = Object.keys(linksInfo)
        return linkKeys.map(link => <Link linkData={linksInfo[link]} />)
    }