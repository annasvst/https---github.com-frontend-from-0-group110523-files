import './styles.css';

export const List = () => {
	// UUID (Universally Unique IDentifier)
	const data = [
		{
			id: '04a8e850-f888-4946-825a-5e7f24aa913d',
			title: 'Task 1',
			completed: false,
		},
		{
			id: '454560f3-2b02-40fd-9bbc-5e2d5e94f626',
			title: 'Task 2',
			completed: false,
		},
		{
			id: 'ddf29c1f-5d04-4f11-8daf-1822d8edaf18',
			title: 'Task 3',
			completed: false,
		},
		{
			id: '3cfa4dc3-8bad-452d-8fcc-729d42318370',
			title: 'Task 4',
			completed: false,
		},
		{
			id: '37aae7af-ab59-4e0a-8dec-907577aaf9d5',
			title: 'Task 5',
			completed: false,
		},
		{
			id: '9f2ea145-e0ea-4730-97f3-cc4bf20a5bd9',
			title: 'Task 6',
			completed: false,
		},
		{
			id: '8c62d7cf-95fd-4546-b482-24ea1c1feb7e',
			title: 'Task 7',
			completed: false,
		},
		{
			id: '3f3db242-db4f-481d-9a61-5c48d0c960a9',
			title: 'Task 8',
			completed: true,
		},
		{
			id: 'a1628ac8-45a9-4ee5-92fb-16b6d14dba6e',
			title: 'Task 9',
			completed: false,
		},
		{
			id: 'c7dd8b39-8460-4635-a445-27e09efcc5bf',
			title: 'Task 10',
			completed: true,
		},
	];

	return (
		<ul className='todo__list'>
			{data.map((item) => (
				<li key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<button>X</button>
				</li>
			))}
		</ul>
	);
};
