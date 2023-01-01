import BodyChamp from '../../assets/image/body-champ-power.png';
import BodySolid from '../../assets/image/body-solid.png';
import BowFlex from '../../assets/image/bowflex-bxe116.png';
import ETHOS from '../../assets/image/ethos-ghd.png';
import AFG from '../../assets/image/afg-pro-7.2.png';
import Weight from '../../assets/image/weight-bench.png';
import ProFrom from '../../assets/image/profrom-hiit.png';
import Fitness from '../../assets/image/fitness-gear-pro.png';
//
import AvartarSuzy from '../../assets/image/baesuzy.jpg';
import Avartar2 from '../../assets/image/avatar-2.jpg';
import AvartarTzuyu from '../../assets/image/avatar-3.jpg';
//

import C1 from '../../assets/image/fitnss-center.png';
import C2 from '../../assets/image/sport-gym.png';
import C3 from '../../assets/image/health-fitness.png';
import C4 from '../../assets/image/best-local-gym.png';
import C5 from '../../assets/image/power-lifter.png';
import C6 from '../../assets/image/fitness-club.png';

const ListProduct = [
    { id: 1, name: 'Body Champ Cardio', price: '342.00', imageSrc: BodyChamp },
    { id: 2, name: 'Body Soid GCEC340', price: '214.00', imageSrc: BodySolid },
    { id: 3, name: 'Bowflex BXE116 Elliptical', price: '421.00', imageSrc: BowFlex },
    { id: 4, name: 'ETHOS GHD', price: '152.00', imageSrc: ETHOS },
    { id: 5, name: 'AFG Pro 7.2Al Incline', price: '252.00', imageSrc: AFG },
    { id: 6, name: 'Weight Bench', price: '412.00', imageSrc: Weight },
    { id: 7, name: 'ProForm Hit Trainer Lite 5.9', price: '300.00', imageSrc: ProFrom },
    { id: 8, name: 'Fitness Gear Pro', price: '124.00', imageSrc: Fitness },
];

const ListUserComment = [
    {
        id: 1,
        name: 'Suzy',
        avartar: AvartarSuzy,
        comment: ` "Good service. I bought a bicycle with a wrong but they accepted free return for me
                    and exchange a new product for me. "`,
    },
    {
        id: 2,
        name: 'user-comment',
        avartar: Avartar2,
        comment: ` "Good service. I bought a bicycle with a wrong but they accepted free return for me
                    and exchange a new product for me. "`,
    },
    {
        id: 3,
        name: 'Tzuyu',
        avartar: AvartarTzuyu,
        comment: ` "Good service. I bought a bicycle with a wrong but they accepted free return for me
                    and exchange a new product for me. "`,
    },
];
const ListCategory = [
    { id: 1, imgSrc: C1 },
    { id: 2, imgSrc: C2 },
    { id: 3, imgSrc: C3 },
    { id: 4, imgSrc: C4 },
    { id: 5, imgSrc: C5 },
    { id: 6, imgSrc: C6 },
];
export { ListProduct, ListUserComment, ListCategory };
