
import Image from 'next/image';
import logo from '../../app/assets/logo.png';

const Logo = () => {
    return (
        <div>
            <Image
                className='rounded-full'
                width={60}
                height={60}
                src={logo}
                alt='logo.png'
                priority // Add this property
            />
        </div>
    );
};

export default Logo;
