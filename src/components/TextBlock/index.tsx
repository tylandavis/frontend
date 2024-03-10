import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import Link from 'next/link';

type Node = {
	value?: {
		url: string;
		alt: string;
	};
	children?: Node[];
	url?: string;
	[key: string]: unknown;
	newTab?: boolean;
};

type SerializeFunction = React.FC<{
	text?: Node[];
}>;

export const Serialize: SerializeFunction = ({ text }) => {
	return (
		<Fragment>
			{text?.map((node, i) => {
				if (
					node &&
					typeof node === 'object' &&
					node !== null &&
					typeof node.text === 'string'
				) {
					let text = (
						<span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
					);

					if (node.bold) {
						text = <strong key={i}>{text}</strong>;
					}

					if (node.code) {
						text = <code key={i}>{text}</code>;
					}

					if (node.italic) {
						text = <em key={i}>{text}</em>;
					}

					if (node.underline) {
						text = (
							<span
								style={{ textDecoration: 'underline' }}
								key={i}
							>
								{text}
							</span>
						);
					}

					if (node.strikethrough) {
						text = (
							<span
								style={{ textDecoration: 'line-through' }}
								key={i}
							>
								{text}
							</span>
						);
					}

					return <Fragment key={i}>{text}</Fragment>;
				}

				if (!node) {
					return null;
				}

				switch (node.type) {
					case 'br':
						return <br key={i} />;
					case 'h1':
						return (
							<h1 key={i}>
								<Serialize text={node.children} />
							</h1>
						);
					case 'h2':
						return (
							<h2 key={i}>
								<Serialize text={node.children} />
							</h2>
						);
					case 'h3':
						return (
							<h3 key={i}>
								<Serialize text={node.children} />
							</h3>
						);
					case 'h4':
						return (
							<h4 key={i}>
								<Serialize text={node.children} />
							</h4>
						);
					case 'h5':
						return (
							<h5 key={i}>
								<Serialize text={node.children} />
							</h5>
						);
					case 'h6':
						return (
							<h6 key={i}>
								<Serialize text={node.children} />
							</h6>
						);
					case 'quote':
						return (
							<blockquote key={i}>
								<Serialize text={node.children} />
							</blockquote>
						);
					case 'ul':
						return (
							<ul key={i}>
								<Serialize text={node.children} />
							</ul>
						);
					case 'ol':
						return (
							<ol key={i}>
								<Serialize text={node.children} />
							</ol>
						);
					case 'li':
						return (
							<li key={i}>
								<Serialize text={node.children} />
							</li>
						);
					case 'link':
						return (
							<Link
								key={i}
								href={node.url ?? ''}
								target={node.newTab ? '_blank' : ''}
							>
								<Serialize text={node.children} />
							</Link>
						);

					// case 'upload': {
					// 	return { }
					// }

					default:
						return (
							<p key={i}>
								<Serialize text={node.children} />
							</p>
						);
				}
			})}
		</Fragment>
	);
};
