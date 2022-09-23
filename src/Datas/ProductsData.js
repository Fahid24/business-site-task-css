import { FaTelegramPlane } from "react-icons/fa";
import { GiEngagementRing } from "react-icons/gi";
import { IoIosAnalytics } from "react-icons/io";
import { GrAssistListening } from "react-icons/gr";
import { DiGoogleAnalytics } from "react-icons/di";
import { BsFileEarmarkCodeFill } from "react-icons/bs";


const productsData = [
    {
        id: 1,
        img: 'https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpublish.e2d37493.png&w=384&q=75',
        type: 'Publish',
        describe: 'Make it easy to schedule and publish content',
        logo: <FaTelegramPlane className="text-primary" />,
        color: 'primary'
    },
    {
        id: 2,
        img: 'https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fengage.77ed299b.png&w=384&q=75',
        type: 'Engage',
        describe: 'Boost customer satisfaction rates via a CRM-like toolset',
        logo: <GiEngagementRing className="text-accent" />,
        color: 'accent'


    },
    {
        id: 3,
        img: 'https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.04c2f5d0.png&w=384&q=75',
        type: 'Analytics',
        describe: 'Turn data-driven insights into measurable growth',
        logo: <IoIosAnalytics className="text-success" />,
        color: 'error'


    },
    {
        id: 4,
        img: '	https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flisten.31b9bc6b.png&w=384&q=75',
        type: 'Listen',
        describe: 'Monitor real-time feedback through social media and the web',
        logo: <GrAssistListening className="text-neutral" />,
        color: 'neutral'


    },
    {
        id: 5,
        img: '	https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcompetitor-analysis.eef58885.png&w=384&q=75',
        type: 'Competitor Analysis',
        describe: 'Transform competitors’ data into your advantage',
        logo: <DiGoogleAnalytics className="text-info" />,
        color: 'info'


    },
    {
        id: 6,
        img: 'https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapi.90a31766.png&w=384&q=75',
        type: 'Social API',
        describe: 'Automate your social media workflows',
        logo: <BsFileEarmarkCodeFill className="text-error" />,
        color: 'success'


    },
]
export default productsData;