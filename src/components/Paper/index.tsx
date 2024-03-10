import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './styles.module.scss';

export const Paper = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) => {
	return (
		<div className={[styles.paper, className].join(' ')}>
			{/* <Header /> */}
			{children}
			{/* <Footer /> */}
		</div>
	);
};
