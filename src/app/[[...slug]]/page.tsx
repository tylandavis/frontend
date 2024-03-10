import { RenderBlocks } from '@/components/RenderBlocks';

import styles from './styles.module.scss';
import { Page as PageType } from '@/payload-types';

const getPages = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/navigation`,
	);
	const data = await res.json();
	return data;
};

export default async function Page() {
	const content = await getPages();
	const { pages } = content;

	return (
		<main className={styles.pages}>
			{pages.map((page: { id: 'string'; page: PageType }, index: number) => {
				return (
					<RenderBlocks
						key={index}
						blocks={page.page.content}
					/>
				);
			})}
		</main>
	);
}
