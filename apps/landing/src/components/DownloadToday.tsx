import clsx from 'clsx';
import { useInView } from 'framer-motion';
import { Download } from 'phosphor-react';
import React, { useRef } from 'react';
import { Button } from '@sd/ui';

interface Props {
	isWindows?: boolean;
}

const DownloadToday = ({ isWindows }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		amount: 0.5,
		once: true
	});
	return (
		<div
			ref={ref}
			className={clsx(
				'download-today-border-gradient download-today-shadow-inset relative mb-[150px] mt-[250px] flex h-[250px] w-full max-w-[1000px] flex-col justify-center opacity-0',
				'overflow-hidden rounded-md bg-gradient-to-b from-transparent to-black p-2 text-center md:mb-[250px] md:h-[350px]',
				isInView && 'fade-in-heading'
			)}
		>
			<div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
			<div className="relative z-10">
				<h1 className="mx-auto w-full max-w-[500px] text-[20px] font-semibold md:text-[30px]">
					Download Spacedrive today and enjoy the experience of the future
				</h1>
				<Button className="mx-auto mt-5 flex gap-2" variant="accent" size="md">
					<Download size={20} />
					{isWindows ? 'Download on Windows' : 'Download on Mac'}
				</Button>
			</div>
		</div>
	);
};

export default DownloadToday;
