import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../css/_app.scss';

export const metadata: Metadata = {
	title: 'Tylan Davis',
	description:
		'Designer and software engineer based in Grand Rapids, MI, currently working at Payload.',
};

const pitchSans = localFont({
	src: 'fonts/pitch-sans-regular.woff2',
	display: 'swap',
	variable: '--font-pitch-sans',
});

const signifier = localFont({
	src: 'fonts/signifier-extralight.woff2',
	display: 'swap',
	variable: '--font-signifier',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${pitchSans.variable} ${signifier.variable}`}
		>
			<meta
				name='theme-color'
				content='var(--color-base)'
			/>
			<body>{children}</body>
		</html>
	);
}
