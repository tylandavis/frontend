import {
	TextBlock as TextBlockType,
	MediaBlock as MediaBlockType,
	ListBlock as ListBlockType,
} from '@/payload-types';
import { Paper } from '../Paper';
import { Serialize as TextBlock } from '../TextBlock';
import styles from './styles.module.scss';

export type RenderBlocksProps = {
	blocks: (TextBlockType | MediaBlockType | ListBlockType)[];
};

export const RenderBlocks = (props: RenderBlocksProps) => {
	const { blocks } = props;

	return (
		<Paper className={styles.blocks}>
			{blocks &&
				blocks.map((block, index) => {
					if (block.blockType === 'textBlock') {
						return (
							<section
								key={index}
								className={styles.block}
							>
								{block.label && <h6>{block.label}</h6>}
								<TextBlock text={block.text} />
							</section>
						);
					}
					return null;
				})}
		</Paper>
	);
};
