import PersonalInfo from '@/components/section/Intro/PersonalInfo/PersonalInfo';
import JumpLink from '@/components/section/Intro/JumpLink/JumpLink';
import Socials from '@/components/section/Intro/Socials/Socials';

import styles from './Left.module.scss';

const Left = () => {

    return (
        <div>
            <PersonalInfo />
            <JumpLink />
            <Socials />
        </div>
    )
}

export default Left;