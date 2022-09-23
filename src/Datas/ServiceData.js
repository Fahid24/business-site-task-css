import { FaRegSmileBeam } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';
import { RiCustomerService2Fill } from 'react-icons/ri';

const Services = [
    {
        id: 1,
        logo: <SiWechat />,
        name: '30-minute response time',
        describe: `Get help whenever you need it from our support team.`
    },

    {
        id: 2,
        logo: <RiCustomerService2Fill />,
        name: 'Help center',
        describe: `Our regularly updated help center will answer all your questions.`
    },

    {
        id: 3,
        logo: <FaRegSmileBeam />,
        name: '1-1 onboardings',
        describe: `We are here to help you with a smooth rollout and transition.`
    }
]

export default Services;