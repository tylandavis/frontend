import Link from 'next/link';

export default async function Page() {
	return (
		<main>
			<p>Tylan Davis.</p>
			<p>
				Designer, developer, <Link href='https://payloadcms.com'>Payload</Link>.
			</p>
			<p>Grand Rapids, Michigan, USA.</p>
			<p>
				<Link href='https://github.com/tylandavis'>GitHub</Link>.{' '}
				<Link href='https://bsky.app/profile/tylandavis.com'>Bluesky</Link>.{' '}
				<Link href='https://www.behance.net/tylandavis'>Behance</Link>.{' '}
				<Link href='mailto:hello@tylandavis'>Email</Link>.
			</p>
		</main>
	);
}