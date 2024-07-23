import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";


const PostCard = () => {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/17479660/pexels-photo-17479660/free-photo-of-lake-with-green-hill-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt='' fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>

            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link href='/blog/post' className={styles.link}>READ MORE</Link>

            </div>
        </div>

    )
};

export default PostCard;