import type { Metadata } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
	title: 'Tylan Davis',
	description:
		'Designer and software engineer based in Grand Rapids, MI, currently working at Payload.',
};

const matter = localFont({
	src: './MatterRegular.woff2',
	display: 'swap',
	variable: '--font-matter',
});

import './global.scss';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={matter.variable}
		>
			<meta
				name='theme-color'
				content='#0a0a0a'
			/>
			<body>{children}</body>
		</html>
	);
}
