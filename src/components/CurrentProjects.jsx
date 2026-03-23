import useInView from '../lib/useInView';

export default function CurrentProjects() {
	const { ref: headerRef, inView: headerInView } = useInView(0.1);
	const { ref: gridRef, inView: gridInView } = useInView(0.12);

	const projectPlaceholders = [
		{
			title: 'J.A.S Caffeinated QR Menu Ordering System',
			type: 'Mobile Application',
			status: 'In Progress',
			coverImage: '/JAS Caffeinated Sample.png',
			coverImageAlt: 'JAS Caffeinated project sample',
			summaryPoints: [
				'This is a Next.js + Supabase mobile application that was developed as a project for our Software Engineering 2 course.',
				'I contributed as a Full-Stack Developer along with my teammates, where I was responsible for building the front-end interface and integrating it with the backend services.',
				'A major challenge I faced during its development involved solving integration issues and handling migration blockers from Supabase to local Docker.',
                'The project is planned to be refined and deployed in the future for the use of J.A.S Caffeinated restaurant.'
			],
		},
		{
			title: 'Collaborative Development Project with PHIVOLCS',
			type: 'UI/UX & Front-End Development',
			status: 'In Progress',
            coverImage: '/PHIVOLCS Project.png',
            coverImageAlt: 'PHIVOLCS project',
			summaryPoints: [
				'A student collaborative project with PHIVOLCS and the Math Faculty of Ateneo de Davao University.',
				'This is in its development phase at the moment, where I am contributing as a UI/UX Designer, Front-End Developer, and a project staff who will assist in document and publication outputs.',
			],
		},
	];

	return (
		<section id="projects" className="w-full px-4 py-16 md:px-10">
			<div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-neutral-900">
				<div className="px-6 py-10 md:px-10">
					<div
						ref={headerRef}
						className={`flex flex-col items-center gap-3 text-center transition-all duration-700 ${
							headerInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
						}`}
					>
						<h2 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl">My Projects</h2>
						<p className="max-w-3xl text-neutral-300">
							Here are some of my ongoing projects. I mainly work as a UI/UX designer and front-end developer with my current
                        capabilities with Figma and ReactJS, but I am always looking for ways to expand my skills and knowledge. 
                        Feel free to reach out if you want to collaborate or chat about design and development. :) 
						</p>
					</div>
				</div>

				<div className="relative overflow-hidden bg-neutral-200 px-5 py-8 text-neutral-900 md:px-8 md:py-10">
					<div className="pointer-events-none absolute inset-0 opacity-70 bg-[linear-gradient(to_right,rgba(64,64,64,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(64,64,64,0.16)_1px,transparent_1px)] bg-size-[48px_48px]" />

					<div ref={gridRef} className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{projectPlaceholders.map((project, index) => {
							const isFirstProject = index === 0;
							const tiltClass = index % 2 === 0 ? 'md:-rotate-[0.8deg]' : 'md:rotate-[0.8deg]';

							return (
								<article
									key={project.title}
									className={`rounded-2xl border-2 border-neutral-700 bg-neutral-100 p-5 shadow-[0_14px_0_rgba(82,82,82,0.22)] transition-all duration-700 ${
										gridInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
									} ${tiltClass} ${
										isFirstProject ? 'md:col-span-2 xl:col-span-2' : ''
									}`}
									style={{ transitionDelay: `${index * 120}ms` }}
								>
									<div className={`flex flex-col gap-5 ${isFirstProject ? 'md:flex-row md:items-start' : ''}`}>
										<div
											className={`overflow-hidden rounded-xl border-2 border-neutral-700 bg-neutral-300/60 ${
												isFirstProject ? 'w-full md:w-56 md:shrink-0' : 'h-40'
											}`}
										>
											{project.coverImage ? (
												<img
													src={project.coverImage}
													alt={project.coverImageAlt || `${project.title} cover image`}
													className={`w-full ${isFirstProject ? 'block h-auto object-contain' : 'h-full object-cover'}`}
												/>
											) : (
												<div className="h-full px-4 py-3">
													<p className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
														Cover Image Placeholder
													</p>
													<p className="mt-2 text-sm text-neutral-700">Drop screenshot or project visual here.</p>
												</div>
											)}
										</div>

										<div className="flex flex-1 flex-col">
											<div className="mb-3 flex items-center justify-between gap-3">
												<p className="rounded-md border-2 border-red-700 bg-red-200 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-red-900">
													{project.type}
												</p>
												<span className="rounded-md border-2 border-red-800 bg-red-600 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
													{project.status}
												</span>
											</div>

											<h3 className="mb-2 text-2xl font-black leading-tight text-neutral-900">{project.title}</h3>
											<ul className="mb-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
												{project.summaryPoints.map((point) => (
													<li key={point}>{point}</li>
												))}
											</ul>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}