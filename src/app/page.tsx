'use client';
import styles from './page.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import coffeeOne from '../images/coffee-1.jpg';
import coffeeTwo from '@images/coffee-2.jpg';
import coffeeThree from '@images/coffee-3.jpg';
import coffeeFour from '@images/coffee-4.jpg';
import coffeeFive from '@images/coffee-5.jpg';

export default function Home() {
    return (
        <Parallax pages={2}>
            <ParallaxLayer offset={0} speed={0.5}>
                <img src={`url${coffeeOne}`} alt="" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={1.5}
                style={{
                    backgroundImage: `url(${coffeeOne})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                }}
            >
                <h1 className={`${styles.header} ${styles.latte}`}>THIS IS A LATTE</h1>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
                <h1 className={`${styles.header} ${styles.latte}`}>THIS IS CAPUCCINO</h1>
            </ParallaxLayer>
        </Parallax>
    );
}
